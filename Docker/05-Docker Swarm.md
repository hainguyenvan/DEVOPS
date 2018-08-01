## Services
* Là hình ảnh deploy của một images
* Tạo một service
```
# docker service create --replicas 1 --name helloworld alpine ping docker.com
```
  * replicas: số lượng bản copy được tạo ra
  * name: tên của service
  * apline: image
  * ping docker.com: câu lệnh của docker
* Hiển thị service
```
# docker service ls
```
* Hiển thị thông tin của docker service
```
# docker service inspect --pretty helloworld
```
* Hoặc cũng có thể sử dụng lệnh
```
# docker service inspect helloworld
```
* Kiểm tra node nào đang deploy service
```
# docker service ps helloworld
```

## CMD
* Show token of docker swarm
```
# docker swarm join-token worker
```

* Show list node
```
# docker node ls
```

## REF
* https://www.dataquest.io/blog/install-and-configure-docker-swarm-on-ubuntu/