# Deploy image to Cloud Run
resource "google_cloud_run_service" "auth-deploy" {
  name     = "auth-deploy"
  location = var.region
  template {
    spec {
      containers {
        image = "${var.repository}/${var.project}/${var.auth-image}:${var.docker-tag}"
        env {
          name = "AUTH_DB_URI"
          value = "${var.mongodb-connection}/auth?retryWrites=true&w=majority"
        }
        env {
          name = "SECRET"
          value = var.auth-secret
        }
        env {
          name = "NODE_ENV"
          value = "production"
        }
      }
    }
  }
  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Enable public access on Cloud Run service
resource "google_cloud_run_service_iam_policy" "auth-access-policy" {
  location    = google_cloud_run_service.auth-deploy.location
  project     = google_cloud_run_service.auth-deploy.project
  service     = google_cloud_run_service.auth-deploy.name
  policy_data = var.noauth.policy_data
}
# Return service URL
output "auth-url" {
  value = google_cloud_run_service.auth-deploy.status[0].url
}
