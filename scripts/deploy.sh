#!/usr/bin/env bash
set -euo pipefail

portfolio_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
portfolio_host="root@5.9.48.239"
portfolio_webroot="/var/www/vhosts/wasiliy-strecker.de/httpdocs"
portfolio_system_conf="/var/www/vhosts/system/wasiliy-strecker.de/conf"
portfolio_backup_stamp="$(date +%Y%m%d-%H%M%S)"
portfolio_backup_root="/var/www/vhosts/wasiliy-strecker.de/.deploy-backups/${portfolio_backup_stamp}"

cd "$portfolio_root"
npm run check

test -f "$portfolio_root/out/index.html"
test -f "$portfolio_root/out/en/index.html"
test -f "$portfolio_root/deploy/vhost_nginx.conf"

ssh -o BatchMode=yes "$portfolio_host" \
  "set -e; install -d -m 750 '$portfolio_backup_root'; cp -a '$portfolio_webroot' '$portfolio_backup_root/httpdocs'; if test -f '$portfolio_system_conf/vhost_nginx.conf'; then cp -a '$portfolio_system_conf/vhost_nginx.conf' '$portfolio_backup_root/vhost_nginx.conf'; fi"

rsync -az --delete "$portfolio_root/out/" "$portfolio_host:$portfolio_webroot/"
scp -q "$portfolio_root/deploy/vhost_nginx.conf" \
  "$portfolio_host:$portfolio_system_conf/vhost_nginx.conf"

ssh -o BatchMode=yes "$portfolio_host" \
  "set -e; chown -R wasiliy_strecker:psacln '$portfolio_webroot'; find '$portfolio_webroot' -type d -exec chmod 755 {} +; find '$portfolio_webroot' -type f -exec chmod 644 {} +; plesk sbin httpdmng --reconfigure-domain wasiliy-strecker.de; nginx -t"

printf 'Deployed https://wasiliy-strecker.de/ (backup: %s)\\n' "$portfolio_backup_root"
