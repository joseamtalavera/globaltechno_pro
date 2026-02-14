variable "project" {
  type = string
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

variable "tags" {
  type    = map(string)
  default = {}
}
