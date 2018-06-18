## Node
* Set labels of node
```
$ kubectl label node NAME_NOE disk=ss
```
## CronJob
* Với cronjob thì chúng ta có thể cấu hình để một job có thể thực hiện lặp đi lặp lại theo chu kỳ của mình
* Lịc chình cấu hình của một cronjob
```
   *     *           *          *         *
Munute  Hour   Day of month  Month   Day of week
```
* Vi dụ
```
"0,15,30,45 * * * *": lịch trình sẽ được lặp lại sau 15 phút
"0,30 * 1 * *": lịch trình chỉ được chạy trong ngày đầu tiên của tháng với chu kỳ 30 phút một lần
"0 3 * * 0": lịch trình được được chạy thường xuyên vào 3h chủ nhật hàng tuần
```

## Job
* Job: sử dụng nó khi chúng ta muốn hủy một containers sau khi nó hoàn thành công việc
* completions: Số lần thực hiện Job
* parallelism: Số pod được phép chạy tối đa
* scaling job: chính là tăng số parallelisms để có thể chạy song song
* Cấu hình thời gian cho phép hoàn thành một công việc
## Replication Controller
* Xóa một Replication Controller nhưng không xóa các pods được tạo bởi controller đó
```
$ kubectl delete rc kubia --cascade=fals
```
* Scale pods
```
$ kubectl scale rc kubia --replicas=3
```
## Namespaces
* Show namespaces
```
$ kubectl get ns
```
* Show pods by namespace
```
$ kubectl get po -n custom-namepace
```
* Delete namespaces
```
$ kubectl delete ns custom-name
```
## Labels
* Show labels
```
$ kubectl get po --show-labels
```
* Modifying labels of existing pods
```
$ kubectl label po kubia-manual-v2 env=debug --overwrite
```
* Show pods if labels matching
```
$ kubectl get po -L creation_method,env
```
* Show pod by label
```
$ kubectl get po -l env=debug
```
## Pod
* Delete pod
```
$ kubectl delete pod NAME_POD
```
* Get list pod
```
$ kubectl get pod
```
* Create pod
```
$ kubectl create -f FILE_NAME.yaml
```
* describe
```
$ kubectl describe pod/POD_NAME
```