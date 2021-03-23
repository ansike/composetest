#!/bin/bash

docker container rm -f docker_redis
docker run -itd --name=docker_redis -p 6379:6379 redis

docker image rm -f docker_web:linkredis
docker container rm -f docker_web
docker build -f ./web2/Dockerfile-web -t docker_web:linkredis ./web2
docker run -itd --link docker_redis:docker_redis --name docker_web -e redis_host=docker_redis -p 3000:3000 docker_web:linkredis