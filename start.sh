#!/bin/bash
echo "running api gateway"
ls
echo "this is the whole list of dir"
echo "docker-compose up -d --build --force-recreate"

docker-compose -f docker-compose.dev.yml up  -d