#####################################################################
# Variables
#####################################################################
variable "project" {
  description = "The google cloud project id."
  Sensitive = true
}
variable "region" {
  default = "us-central1"
  description = "The region of the cloud environment"
}
variable "repository" {
  default = "gcr.io"
  description = "The repository you push images to"
}
variable "backend-image" {
  default = "rotfuks-cms/backend"
  description = "The image name of the backend image"
}
variable "auth-image" {
  default = "rotfuks-cms/auth"
  description = "The image name of the auth image"
}
variable "docker-tag" {
  default = "latest"
  description = "The tag for the docker images"
}
variable "pages-id" {
  default = "rotfuks.de"
  description = "The default id for the Rotfuks-Page"
}
variable "auth-secret" {
  Sensitive = true
  description = "The secret salt for the authentication token"
}
variable "mongodb-connection" {
  Sensitive = true
  description = "The connection string to mongodb"
}
#####################################################################
# Cloud Run Provider
#####################################################################
provider "google" {
  project = var.project
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