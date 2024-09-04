ssh -o StrictHostKeyChecking=no -l root 89.116.236.61 "cd apps/gministudio; git pull"
ssh -o StrictHostKeyChecking=no -l root 89.116.236.61 "cd apps/gministudio; git pull; npm i --force; pm2 restart gministudio --cron-restart="0 0 1 * *""
ssh -o StrictHostKeyChecking=no -l root 89.116.236.61 "cd apps/gministudio; git pull; pm2 restart gministudio --cron-restart="0 0 1 * *""