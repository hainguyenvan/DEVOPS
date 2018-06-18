## Autoscaling process
* Qúa trình autoscaling trải qua 3 bước sau
 * Lấy số liệu về các Pod
 * Tính toán và chia tỉ lệ các Pod: Nếu chúng ta đặt giới hạn là 50% với 3 replicas Pod, và khi các pod đã đạt đến giới hạn của CPU thì hệ thống sẽ tính toán để tạo gia số lượng các Pod phù hợp với yêu cầu.(CPU1 + CPU2 + CPU3)/50 => Số Pod max nhất để đáp ứng 50% CPU. Target QPS = 20 => Min Pod = (QPSA + QPSB + QPSC)/20 => Min Pod cần thiết.
 * Cập nhật các replicas nguồn scaled
## Các Resource hộ trợ auto scaling
* Việc scaling chính là việc tăng hoặc giảm các replicas. Những resource hỗ trợ auto scaling
 * Deployments
 * ReplicaSets
 * ReplicationControllers
 * StatefulSets
## Create autoscaling
* Create file deployment.yaml
```
apiVersion: extensions/v1beta1
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
      resources:
       requests:
        cpu: 100m
```
* Run command scaling
```
$ kubectl autoscale deployment kubia --cpu-percent=30 --min=1 --max=5
```
* Show hpa
```
$ kubectl get hpa
```
## Vertical pod autoscaling
