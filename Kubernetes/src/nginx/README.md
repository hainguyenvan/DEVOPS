## Nginx
* Nginx ReplicationController
```
$ kubectl create -f nginx-rc.yaml
```
* Nginx Service
```
$ kubectl create -f nginx-service.yaml
```
* Get port physical
```
$ kubectl get svc
nginx-service         LoadBalancer   10.105.209.127   <pending>     8080:NODE_PORT/TCP   5m

```
* Accessed on URL
```
http:127.0.0.1:NODE_PORT
```

## Ref
* http://containertutorials.com/get_started_kubernetes/k8s_example.html#pod-deployment-with-two-containers


