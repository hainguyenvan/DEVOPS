## PHPAdmin
* Install MYSQL
```
# docker-compose up
```
* Install phpadmin with kubernetes
```
$ kubectl create -f phpadmin.yaml
```
* Get port physical
```
$ kubectl get svc
nginx-service         LoadBalancer   10.105.209.127   <pending>     8080:NODE_PORT/TCP   5m

```
* Accessed on URL
```
http:127.0.0.1:NODE_PORT
User/Pass: root.pwd
```