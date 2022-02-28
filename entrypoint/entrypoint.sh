#!/bin/bash
(echo "D ^%GI";echo "/home/yotta/STADIUMS.go";echo "") | ydb
cd /opt/mgweb && /opt/mgweb/start
