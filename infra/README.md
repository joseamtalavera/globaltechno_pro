# Infrastructure (AWS ECS Fargate)

This folder contains Terraform modules and production environment wiring for:

- ECR repositories for web and api images
- VPC/subnets (or import existing network)
- Application Load Balancer with `/api/*` routing to API target group
- ECS cluster and separate Fargate services (`web`, `api`)
- IAM task execution/task roles
- CloudWatch logs and ECS deployment circuit breaker rollback

## Apply (Production)

1. `cd infra/terraform/envs/prod`
2. `cp terraform.tfvars.example terraform.tfvars`
3. Update variable values (`acm_certificate_arn`, `database_url_secret_arn`, domain)
4. `terraform init`
5. `terraform plan`
6. `terraform apply`

## ALB Routing Assumption

- `https://globaltechno.eu/*` -> web service
- `https://globaltechno.eu/api/*` -> api service

API service exposes `/api/health`; web service exposes `/api/health` for container health checks.
