variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "domain_name" {
  type    = string
  default = "globaltechno.eu"
}

variable "acm_certificate_arn" {
  type = string
}

variable "database_url_secret_arn" {
  type = string
}

variable "app_version" {
  type    = string
  default = "1.0.0"
}

variable "web_image_tag" {
  type    = string
  default = "latest"
}

variable "api_image_tag" {
  type    = string
  default = "latest"
}

variable "web_desired_count" {
  type    = number
  default = 2
}

variable "api_desired_count" {
  type    = number
  default = 2
}

variable "create_network" {
  type    = bool
  default = true
}

variable "vpc_cidr" {
  type    = string
  default = "10.40.0.0/20"
}

variable "existing_vpc_id" {
  type    = string
  default = ""
}

variable "existing_public_subnet_ids" {
  type    = list(string)
  default = []
}

variable "existing_private_subnet_ids" {
  type    = list(string)
  default = []
}
