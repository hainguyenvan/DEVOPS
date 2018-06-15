## CMD
* Run hello world
```
# docker run debian echo 'Hello World'
```
* SSH remote docker container
```
# docker exec CONTAINER_ID -i -t /bin/bash
```
* Show detail Dockerfile
```
# docker inspect CONTAINER_NAME
or
# docker inspect CONTAINER_NAME | grep IPAddress
```
* Show log Container
```
# docker log CONTAINER_NAME
```
* Remove containers exited
```
# docker rm COTAINER_ID
```
* Remove all containers exited
```
# docker rm -v $(docker ps -aq -f status=exited)
```
