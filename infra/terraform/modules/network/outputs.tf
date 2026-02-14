output "vpc_id" {
  value = var.create_network ? aws_vpc.this[0].id : var.existing_vpc_id
}

output "public_subnet_ids" {
  value = var.create_network ? aws_subnet.public[*].id : var.existing_public_subnet_ids
}

output "private_subnet_ids" {
  value = var.create_network ? aws_subnet.private[*].id : var.existing_private_subnet_ids
}
