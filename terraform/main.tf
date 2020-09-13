provider "google" {
  project = "utrakr"
  region  = "us-central1"
}

terraform {
  backend "gcs" {
    bucket = "utrakr-all-terraform-state"
    prefix = "dash"
  }
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 3.38"
    }
  }
  required_version = ">= 0.13"
}

data "terraform_remote_state" "crit_dns" {
  backend = "gcs"

  config = {
    bucket = "utrakr-all-terraform-state"
    prefix = "crit-dns"
  }
}

data "google_dns_managed_zone" "root" {
  name = data.terraform_remote_state.crit_dns.outputs["google_dns_managed_zone_root"].name
}

output "dash" {
  value = "https://${trimsuffix(google_dns_record_set.app["dash"].name, ".")}"
}
