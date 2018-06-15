## Dockerfile
* Create file name **entrypoint.sh**
```
#!/bin/bash
if [ $# -eq 0]; then
 /usr/games/fortune | /usr/games/cowsay
else
 /usr/games/cowsay "$@"
fi  
```
* Create file name **Dockerfile**
```
FROM debian:wheezy
RUN apt-get update && apt-get install -y cowsay fortune
COPY entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```
* Note
  + **COPY**: Lệnh này sẽ copy file từ host vào container
  + **ENTRYPOINt**: Sẽ thực thi command
* Build images
```
# docker build -t ROOT_FOLDER .
```
* Run demo
```
# docker run ROOT_FOLDER
```