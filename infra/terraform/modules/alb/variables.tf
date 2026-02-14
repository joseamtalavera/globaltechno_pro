variable "project" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "public_subnet_ids" {
  type = list(string)
}

variable "acm_certificate_arn" {
  type = string
}

variable "web_port" {
  type    = number
  default = 3000
}

variable "api_port" {
  type    = number
  default = 4000
}

variable "web_health_check_path" {
  type    = string
  default = "/api/health"
}

variable "api_health_check_path" {
  type    = string
  default = "/api/health"
}

variable "tags" {
  type    = map(string)
  default = {}
}
