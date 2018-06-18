## Deploymet
* Sử dụng để cập version của pod và cài đặt một pod

## Create deployment
* Create file kubia-rc-and-service.yaml
```
apiVersion: v1
kind: ReplicationController
metadata:
 name: kubia-v1
spec:
 replicas: 3
 template:
  metadata:
   name: kubia
   labels:
    app: kubia
  spec:
   containers:
    - image: luksa/kubia:v1
      name: nodejs
---
apiVersion: v1
kind: Service
metadata:
 name: kubia
spec:
 type: LoadBalancer
 selector:
  app: kubia
 ports:
  - port: 80
    targetPort: 8080
```
* Run 
```
$ kubectl create -f kubia-rc-and-service.yaml
```
* Check state service
```
$ kubectl get svc
```
* Check state rc
```
$ kubectl get rc
```
* Check state pod
```
$ kubectl get pod
```
## Update version
* Run command
```
$ kubectl rolling-update kubia-v1 kubia-v2 --image=luksa/kubia:v2
```
## Using Deployments for updating apps declaratively
* Tạo một file **kubia-deployment-v1.yaml**
```
apiVersion: apps/v1beta1
kind: Deployment
metadata:
 name: kubia
spec:
 replicas: 3
 template:
  metadata:
   name: kubia
   labels:
    app: kubia
  spec:
   containers:
    - image: luksa/kubia:v1
      name: nodejs
```
* Chạy lệnh sau
```
$ kubectl create -f kubia-deployment-v1.yaml --record
```
* Với options **--record** thì sẻ lưu lịch sử  các câu lện thay đổi version
* Khi chúng ta tạo một Deployment thì nó sẽ tạo một Replicasets để quản lý pod chứ Deployment không quản lý Pod
* Quay trở lại version Deployment cũ
```
$ kubectl rollout undo deployment kubia
```
* Hiển thị các version của Deployment
```
$ kubectl rollout history deployment kubia
```
* maxSurge = 1: chiến lược cập nhật version mơi của Deployment. Và mỗi lần cập nhật thì sẽ cập nhật từng cái một
* maxUnavailable = 0: Đảm bảo rằng luôn có một pod sẵn sàng phục vụ trong quá trình cập nhật hệ thống. Nếu bằng 1 thì có nghĩa là sẽ có thơi điểm hệ thống không có pod để phục vụ nhu cầu.
