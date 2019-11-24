#!/bin/bash
cp -r ./PMS5003TAirQuality/dist/.htaccess /var/services/web/air/
cp -r ./PMS5003TAirQuality/dist/* /var/services/web/air/
cp -r ./Python/lass2mysql.sh /var/services/web/air/
cp -r ./Python/lass2mysql.py /var/services/web/air/
cp -r ./Python/delete2WeeksBefore.py /var/services/web/air/
cp -r ./Python/delete2WeeksBefore.sh /var/services/web/air/
cp -r ../dbpassword.pas /var/services/web/air/
cp -r ../dbpassword.pas /var/services/web/air/assets/php/
exit 0
