terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.90"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

locals {
  project = "globaltechno"
  tags = {
    Project     = "globaltechno"
    Environment = "prod"
    ManagedBy   = "terraform"
  }
}

resource "aws_ecs_cluster" "main" {
  name = "${local.project}-cluster"
  tags = local.tags
}

module "network" {
  source = "../../modules/network"

  project                     = local.project
  create_network              = var.create_network
  vpc_cidr                    = var.vpc_cidr
  existing_vpc_id             = var.existing_vpc_id
  existing_public_subnet_ids  = var.existing_public_subnet_ids
  existing_private_subnet_ids = var.existing_private_subnet_ids
  tags                        = local.tags
}

module "ecr" {
  source  = "../../modules/ecr"
  project = local.project
  tags    = local.tags
}

module "iam" {
  source  = "../../modules/iam"
  project = local.project
  tags    = local.tags
}

module "alb" {
  source = "../../modules/alb"

  project               = local.project
  vpc_id                = module.network.vpc_id
  public_subnet_ids     = module.network.public_subnet_ids
  acm_certificate_arn   = var.acm_certificate_arn
  web_port              = 3000
  api_port              = 4000
  web_health_check_path = "/api/health"
  api_health_check_path = "/api/health"
  tags                  = local.tags
}

module "web_service" {
  source = "../../modules/ecs-service"

  project               = local.project
  service_name          = "web"
  cluster_arn           = aws_ecs_cluster.main.arn
  execution_role_arn    = module.iam.execution_role_arn
  task_role_arn         = module.iam.task_role_arn
  image_uri             = "${module.ecr.web_repository_url}:${var.web_image_tag}"
  container_port        = 3000
  target_group_arn      = module.alb.web_target_group_arn
  health_check_path     = "/api/health"
  private_subnet_ids    = module.network.private_subnet_ids
  vpc_id                = module.network.vpc_id
  alb_security_group_id = module.alb.alb_security_group_id
  desired_count         = var.web_desired_count
  cpu                   = 512
  memory                = 1024
  aws_region            = var.aws_region
  environment = {
    NODE_ENV             = "production"
    NUXT_PUBLIC_SITE_URL = "https://${var.domain_name}"
    NUXT_PUBLIC_API_BASE = "/api"
    NUXT_API_BASE        = "https://${var.domain_name}/api"
  }
  tags = local.tags
}

module "api_service" {
  source = "../../modules/ecs-service"

  project               = local.project
  service_name          = "api"
  cluster_arn           = aws_ecs_cluster.main.arn
  execution_role_arn    = module.iam.execution_role_arn
  task_role_arn         = module.iam.task_role_arn
  image_uri             = "${module.ecr.api_repository_url}:${var.api_image_tag}"
  container_port        = 4000
  target_group_arn      = module.alb.api_target_group_arn
  health_check_path     = "/api/health"
  private_subnet_ids    = module.network.private_subnet_ids
  vpc_id                = module.network.vpc_id
  alb_security_group_id = module.alb.alb_security_group_id
  desired_count         = var.api_desired_count
  cpu                   = 512
  memory                = 1024
  aws_region            = var.aws_region
  environment = {
    NODE_ENV   = "production"
    PORT       = "4000"
    SITE_URL   = "https://${var.domain_name}"
    APP_VERSION = var.app_version
  }
  secrets = [
    {
      name       = "DATABASE_URL"
      value_from = var.database_url_secret_arn
    }
  ]
  tags = local.tags
}
