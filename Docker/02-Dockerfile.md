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
  + . Chính là thư mục hiện tại
```
# docker build -t ROOT_FOLDER .
```
* Run demo
```
# docker run ROOT_FOLDER
```
## Note
* ADD sẽ copy tư một remote
* CMD sẽ thực thi câu lệnh sau khi đã khởi tạo một images thành công
* COPY sẽ copy một file vào trong một container
* ENTRYPOINT giống CMD nhưng nó được sử dụng khi đã biết được tham số đầu vào cho command
* ENV biến môi trường của compose
* EXPOSE container sẽ mở cổng listening trên máy thật
* FROM nền tảng build image
* MAINTAINER nền tảng xây dựng images
* ONBUILD
* RUN thực thi các command
* USER
* VOLUME dùng để volumes dữ liệu từ máy thật vào máy ảo và ngược lại
* WORKDIR là thư mục làm việc của containers
