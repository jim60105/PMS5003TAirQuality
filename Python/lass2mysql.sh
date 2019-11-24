#!/bin/bash
echo "Try to connect to mysql ..."
while !(/volume1/@appstore/MariaDB10/usr/local/mariadb10/bin/mysqladmin ping)
do
   echo "Waiting 30 seconds for mysql ..."
   sleep 30
done
echo "Starting the main script ..."
(cd /var/services/web/air/ && python3 ./lass2mysql.py)
