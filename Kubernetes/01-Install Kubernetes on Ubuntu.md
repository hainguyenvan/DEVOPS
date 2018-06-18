## Installing dependencies
* Run command
```
$ sudo apt-get update
$ sudo apt-get upgrade -y
```
* Docker
```
$ sudo apt-get update && apt-get install -y apt-transport-https
$ sudo apt install docker.io
$ sudo systemctl start docker
$ sudo systemctl enable docker
```
## Installing Kubernetes
* Turn off swap
```
# swapoff -a
```
* Run cmd
```
$ sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
```
* Creating the file /etc/apt/sources.list.d/kubernetes.list and enter the following content
```
deb http://apt.kubernetes.io/ kubernetes-xenial main 
```
* Install Kubernetes with the following commands
```
# apt-get update
# apt-get install -y kubelet kubeadm kubectl kubernetes-cni
```
## Setup host name
* Change hostname
```
$ sudo nano /etc/hostname
master or node1
```
* Config hosts
```
# 192.168.109.132  DOMAIN HOSTNAME
192.168.109.132  k8s.master master
192.168.109.133  k8s.node1 node1
```
## Initializing Kubernetes
* Now we need to initialize kubernetes cluster to run as Master. Execute below commands:
```
# sudo kubeadm init --pod-network-cidr 10.244.0.0/16
```
* Run command with permission
```
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```
## Pod Network Configuration
* Master node to apply network settings.
```
$ sudo kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
$ sudo kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/k8s-manifests/kube-flannel-rbac.yml
$ sudo kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
```
* Go ahead and execute below command to see results of all pods.
```
$ sudo kubectl get pods --all-namespaces
```
## Joining other linux node to Cluster
* Install Docker  & Kubernetes Installation
* Join master
```
$ sudo kubeadm join --token 59f9e5.ca7acb3f48d73813 192.168.0.150:6443 --discovery-token-ca-cert-hash sha256:397f05b795e279a189e18dd9b17381c540a8d1513ca31cd40c8e3d91325a628a
```
## Kubernetes dashboard
* Run command
```
$ sudo kubectl proxy
```
* Url web
```
http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/ 
```
## Ref
* https://blog.tekspace.io/setup-kubernetes-cluster-with-ubuntu-16-04/
* https://www.techrepublic.com/article/how-to-quickly-install-kubernetes-on-ubuntu/
* http://blog.ruanbekker.com/blog/2017/12/11/setup-a-3-node-kubernetes-cluster-on-ubuntu/
* https://www.digitalocean.com/community/tutorials/how-to-create-a-kubernetes-1-10-cluster-using-kubeadm-on-ubuntu-16-04
* Fix bug: https://github.com/kubernetes/kubernetes/issues/53333
* https://github.com/hocchudong/ghichep-kubernetes/tree/master/docs/kubernetes-5min
