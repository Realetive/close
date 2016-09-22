#!/usr/bin/env bash
cd dist
rm theater.zip
zip -r theater.zip *
scp theater.zip root@goteatr.ru:/var/www/html
ssh root@goteatr.ru 'bash -s' < ../unzip.sh