#!/bin/bash
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
cd /home/maps2
sed -i 's#^.*proxy.*$#\t"proxy":"'$apiadd'",#' package.json
npm install
npm start
