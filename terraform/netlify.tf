resource "google_dns_record_set" "app" {
  for_each     = toset(["dash"])
  managed_zone = data.google_dns_managed_zone.root.name
  type         = "CNAME"
  name         = "${each.key}.${data.google_dns_managed_zone.root.dns_name}"
  ttl          = 3600
  rrdatas      = ["utrakr-dash.netlify.app."]
}
