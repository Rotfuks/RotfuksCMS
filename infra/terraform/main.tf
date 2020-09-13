#####################################################################
# Variables
#####################################################################
variable "project" {
}
variable "region" {
  default = "us-central1"
}
variable "repository" {
  default = "gcr.io"
}
variable "backend-image" {
  default = "rotfuks-cms/backend"
}
variable "auth-image" {
  default = "rotfuks-cms/auth"
}
variable "docker-tag" {
  default = "latest"
}
variable "pages-id" {
  default = "rotfuks.de"
}
variable "auth-secret" {
}
variable "mongodb-connection" {
}
variable "cloud-credentials" {
}
#####################################################################
# Cloud Run Provider
#####################################################################
provider "google" {
  project = var.project
  credentials = var.cloud-credentials
}

# Create public access
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}
#####################################################################
# Modules
#####################################################################
module "deployments" {
  source = "./deployments"
  project = var.project
  region = var.region
  repository = var.repository
  backend-image = var.backend-image
  auth-image = var.auth-image
  docker-tag = var.docker-tag
  pages-id = var.pages-id
  auth-secret = var.auth-secret
  mongodb-connection = var.mongodb-connection
  noauth = data.google_iam_policy.noauth
}

output "backend-url" {
  value = module.deployments.backend-url
}
output "auth-url" {
  value = module.deployments.auth-url
}