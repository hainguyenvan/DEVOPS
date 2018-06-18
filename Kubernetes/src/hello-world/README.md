## Hello World
* Run rc
```
$ kubectl create -f hello-world-rc.yaml
```
* Run service
```
$ kubectl create -f hello-world-service.yaml
```
* Show describe
```
$ kubectl describe service hello-world-service
```