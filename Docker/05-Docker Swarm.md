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
* Sacle service in docker swarm
  * Container chạy trong service gọi là **task**
```
# docker service scale <SERVICE-ID>=<NUMBER-OF-SERVICE>
```
* Xóa một service
```
# docker service rm  SERVICE-ID
```
* Cập nhật image của service
```
# docker service create --replicas 3 --name redis --update-delay 10s redis:3.0.6
```
* Drain một node trong docker swarm
  * Đôi khi chúng ta muốn dừng một node để có thể nâng cấp nó, thì toàn bộ các task trên node đó sẽ được docker service chuyển đến node nào đang active

## Docker Stack
* Stack giống như docker compose. Một stack được tạo từ nhiều container và mỗi stack được tao ra thì lại có một server tương ứng

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