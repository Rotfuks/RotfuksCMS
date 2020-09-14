# Deploy image to Cloud Run
resource "google_cloud_run_service" "backend-deploy" {
  name     = "backend-deploy"
  location = var.region
  template {
    spec {
      containers {
        image = "${var.repository}/${var.project}/${var.backend-image}:${var.docker-tag}"
        env {
          name = "PAGES_ID"
          value = var.pages-id
        }
        env {
          name = "CMS_DB_URI"
          value = "${var.mongodb-connection}/backend?retryWrites=true&w=majority"
        }
        env {
          name = "SECRET"
          value = var.auth-secret
        }
        ports {
          container_port = "4000"
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
resource "google_cloud_run_service_iam_policy" "backend-access-policy" {
  location    = google_cloud_run_service.backend-deploy.location
  project     = google_cloud_run_service.backend-deploy.project
  service     = google_cloud_run_service.backend-deploy.name
  policy_data = var.noauth.policy_data
}
# Return service URL
output "backend-url" {
  value = google_cloud_run_service.backend-deploy.status[0].url
}
