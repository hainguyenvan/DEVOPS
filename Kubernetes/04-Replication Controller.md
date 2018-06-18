## Replication Controller Operations
* Đảm bảo số lượng pod được chạy liên tục
### Create a replication contronller
* Replication controllers create with **kubectl create**
```
$ kubectl create -f FILE
```
* Replication controller configuration file
```
{
  "apiVersion": "v1",
  "kind": "ReplicationController",
  "metadata": {
    "name": "",
    "labels": "",
    "namespace": ""
  },
  "spec": {
    "replicas": int,
    "selector": {
      "":""
    },
    "template": {
      "metadata": {
        "labels": {
          "":""
        }
      },
      "spec": {
        // See 'The spec schema' below
      }
    }
  }
}
```
* Required fields are:
  - **kind**: Alawys **ReplicationController**
  - **apiVersion**: Currently **v1**
  - **metadata**: An object containing:
    * **name**: bắt buộc nếu **generateName** không tồn tại và nó phải là duy nhất.
    * **labels**: không bắt buộc
    * **generateName**: bắt buộc nếu **name** không tồn tại
    * **namespace**: Không gian để gom nhóm các pod lại với nhau
    * **annotations**: Không bắt buộc
 - **spec**: Chứa cấu hình của replication controller
   *  **replicas**: Số lượng pod luôn được duy trì
   * **selector**: Phải trùng với labels trong template
   * **template** contains
      * A metadata object with labels for the pod.
      * The spec schema that defines the pod configuration
* The spec schema

```
{
  "kind": "ReplicationController",
  "apiVersion": "v1",
  "metadata": {
    "name": "frontend-controller",
    "labels": {
      "state": "serving"
    }
  },
  "spec": {
    "replicas": 2,
    "selector": {
      "app": "frontend"
    },
    "template": {
      "metadata": {
        "labels": {
          "app": "frontend"
        }
      },
      "spec": {
        "volumes": null,
        "containers": [
          {
            "name": "php-redis",
            "image": "redis",
            "ports": [
              {
                "containerPort": 80,
                "protocol": "TCP"
              }
            ],
            "imagePullPolicy": "IfNotPresent"
          }
        ],
        "restartPolicy": "Always",
        "dnsPolicy": "ClusterFirst"
      }
    }
  }
}
```
### RC commands
* Shows list rcs
```
$ kubectl get rc
```
* Delete rcs
```
$ kubectl describe rc NAME
```
* Show info rc
```
$ kubectl describe rc NAME
```
* Show service by labels
```
$ kubectl get rc -l deployment=test
```
* Delete rc by labels
```
$ kubectl delete rc -l deployment=test
```
### Service commands
* Show list services
```
$ kubectl get services
```

## Ref
* https://kubernetes-v1-4.github.io/docs/user-guide/replication-controller/operations/#creating-a-replication-controller