output "alb_dns_name" {
  value = module.alb.alb_dns_name
}

output "web_ecr_repository" {
  value = module.ecr.web_repository_url
}

output "api_ecr_repository" {
  value = module.ecr.api_repository_url
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.main.name
}
