## Horizontal Pod Autoscaler
* HPA được kubernetes hỗ trợ để tự động scale các pod. Scaling các pod là gia tăng số lượng các pod dựa trên việc tính toán các thông số của CPU. HAP không hỗ trợ các resource mà không chia tỷ lệ (DaemonSets).
* Tạo một HPA
 * Khi CPU đạt tới 80% thì hệ thống sẽ tự động tạo thêm POD để xử lý, số lượng POD nằm trong khoảng 2->5
```
$ kubectl autoscale rc foo --min=2 --max=5 --cpu-percent=80
```
* Hiển thị các HPA
```
$ kubectl get hpa
```
* Hiển thị detailed
```
$ kubectl describe hpa
```
* Xóa HPA
```
$ kubectl delete hpa
```
## Create Demo HPA
* Chỉnh sửa cấu hình của kubernetes
```
$ sudo gedit /etc/kubernetes/manifests/kube-controller-manager.yaml
Thêm cấu hình sau
containers:
  - command:
    - kube-controller-manager
    - --horizontal-pod-autoscaler-use-rest-clients=false
```
* Cài đặt **Heapster** thống kê CPU
```
$ git clone https://github.com/kubernetes/heapster.git
$ cd heapster
$ sudo kubectl create -f deploy/kube-config/influxdb/
$ sudo kubectl create -f deploy/kube-config/rbac/heapster-rbac.yaml
```
* Check heapster
```
$ kubectl get pods --namespace=kube-system
...
monitoring-grafana-927606581-0tmdx        1/1       Running   0          6d
monitoring-influxdb-3276295126-joqo2      1/1       Running   0          15d
...

$ kubectl get services --namespace=kube-system monitoring-grafana monitoring-influxdb
```
* Ref
  + https://github.com/kubernetes/heapster
* Step Two: Create Horizontal Pod Autoscaler
  + Chung ta đặt 50 có nghĩa là CPU đạt ngưỡng 100m thì hệ thống sẽ tự scaling(Do chúng ta đặt CPU max là 200m)
```
$ kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10
```
* Kiểm tra trạng thái autoscaler
```
$ kubectl get hpa
NAME         REFERENCE                     TARGET    MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache/scale   0% / 50%  1         10        1          18s
```
* Hiện tại 0% vì không có request nào được gửi đến
* Step Three: Increase load
```
$ kubectl run -i --tty load-generator --image=busybox /bin/sh
Hit enter for command prompt
$ while true; do wget -q -O- http://php-apache.default.svc.cluster.local; done
```
* Đợi một vài phút và kiểm tra lại HPA
```
$ kubectl get hpa
NAME         REFERENCE                     TARGET      CURRENT   MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache/scale   305% / 50%  305%      1         10        1          3m

$ kubectl get deployment php-apache
NAME         DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
php-apache   7         7         7            7           19m
```
* Mở chế độ xem HPA
```
$ kubectl get hpa --watch

NAME         REFERENCE               TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache   0%/50%    1         10        1          9m
php-apache   Deployment/php-apache   366%/50%   1         10        1         9m
php-apache   Deployment/php-apache   366%/50%   1         10        4         10m
php-apache   Deployment/php-apache   4%/50%    1         10        4         10m
php-apache   Deployment/php-apache   4%/50%    1         10        4         11m
php-apache   Deployment/php-apache   45%/50%   1         10        4         11m
php-apache   Deployment/php-apache   45%/50%   1         10        4         12m
php-apache   Deployment/php-apache   0%/50%    1         10        4         12m
php-apache   Deployment/php-apache   0%/50%    1         10        4         13m
php-apache   Deployment/php-apache   0%/50%    1         10        4         13m
php-apache   Deployment/php-apache   0%/50%    1         10        4         14m
php-apache   Deployment/php-apache   0%/50%    1         10        4         14m
php-apache   Deployment/php-apache   0%/50%    1         10        1         15m
php-apache   Deployment/php-apache   0%/50%    1         10        1         15m
```
* Ref
  + https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/
## Ref
* https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/