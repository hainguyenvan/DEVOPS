## Kubernetes
### Annotations
* Are used for **non-identifying** information
* Mục đích của annotations thêm các chú thích
```
"metadata": {
  "annotations": {
    "key1" : "value1",
    "key2" : "value2"
  }
}
```
### Labels and Selectors
* Sử dụng để hạn chế số lượng pods, services được deploy lên một nodes hay
nói cách khác là chỉ định pods được deploy trên những node nào.
### Namespaces
* Là không gian chứa các pods, services, Replication Controller
* Mỗi một **resources** khác nhau thì nên có một namespaces khác nhau
* Get namespaces
```
$ kubectl get namespaces
NAME          STATUS    AGE
default       Active    1d
kube-system   Active    1d
kube-public   Active    1d
```
### Kubectl apply 
* Sử dụng khi một đối tượng của chúng ta có sự thay đổi liên tục và chúng ta muốn cập nhật lại nó chứ không muốn xóa đối tượng đó đi


## Ref
* https://github.com/hocchudong/ghichep-kubernetes/blob/master/notes/concepts.md