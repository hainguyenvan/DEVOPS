## Pod
* This file creates a pod named node-js-pod with the latest bitnami/apache container running on port 80. We can check this using the following command
```
$ kubectl create -f pod-example.yaml
```
* The output as follows:
```
pod "node-js-pod" created
```
*  We can see more information on the pod by running the following command:
```
$ kubectl describe pods/node-js-pod
```
* Pod shows to be in a running state
```
$ kubectl exec node-js-pod -- curl <private ip address>
or
$ kubectl get pod
```
