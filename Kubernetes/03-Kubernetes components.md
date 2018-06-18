## Pod
* Pod: giống như docker compose, nó dùng để chứa các container. Trong việc deploy thì chúng ta lên tách nhỏ các container càng tốt.
## Replication Controller
* Replication Controller đảm bảo rằng số lượng các container luôn được chạy trong hệ thống cụm cluster
## ReplicaSets
* ReplicaSets đảm bảo rằng số lượng các container chạy. Nghe nó có vẻ giống như Replication Controller nhưng nó là một thành phần rộng hơn Replication Controller đó là nó cho phép chúng ta lựa chọn labels mở rộng hơn(VD:app=kube-*)\
## DaemonSet
* DaemomSet là quản lý việc deploy các pod. Nhưng nó không cho phép cấu hình số lượng các bản copy của pods. Số lượng Node có trong hệ thống thì có tưng ứng các pod với kind: DaemonSet. Khi một Node mới tham gia vào cụm Kubernetes thì nó sẽ tự deploy pod vào Node mới tham gia cụm
## Job
* Job là một kiểu resource của Kubernetes, sau khi một pod hoàn thành công việc của nó thì nó sẽ xóa container khỏi hệ thống.Nếu pod bị chết thì nó sẽ tạo ra một backup và nếu Node chết thì nó sẽ khởi tạo lại Pod(Chúng tao có thể cấu hình số lần mà thực hiện một Job hoặc thời gian cho phép để thực hiện một Job)
## CronJob
* Là một thành phần của resource, có thể xử dụng nó để cấu hình lịch trình để thực hiện một Job theo định kỳ\
## Service
* Service là dùng để nhóm các Pods lại với nhau và cho phép chúng có thể giao tiếp được với nhau
## Volumes
* Dùng để chia sẻ dữ liệu giữa các ontainer với nhau. Có các loại volumes sau
 * **emptyDir**: Sử dụng một thư mục ban đầu trống
 * **hostPath**: Sử dụng để volumes các file system vào một pod
 * **gitRepo**: Sử dụng để khởi tạo một data volumes ban đầu từ git
 * **nfs**:
 * **gcePersistentDisk**: Dịch vụ lưu trữ của Google
 * **awsElastic-BlockStore**: Dịch vụ lưu trữ của aws
 * **azureDisk**: Dịch vụ lưu trữ của Microsoft
 * **cinder, cephfs, iscsi, flocker, glusterfs, quobyte, rbd, flexVolume, vsphere-Volume, photonPersistentDisk, scaleIO**: Dịch vụ lưu trữ trong mạng
 * **configMap, secret, downwardAP**:
 * **persistentVolumeClaim**:
## ConfigMaps
* ConfigMaps: có chức năng cấu hình biến môi trường của hệ thống
## Deployment
* Khi chúng ta muốn deploy một version mới thì của một pod thì chúng ta có 2
  * Xóa tất các pod của version của và tạo lại pod
  * Tạo một pod mới và sau đó mới và sau đó chuyển serviecs trỏ sang pod mới
## StatefulSet
* Tạo các bản copy của Pod mà vẫn dữ nguyên trạng thái của Pod mà thời điểm Pod chết


