## Using an emptyDir volume
* Create file fortune-pod.yaml
```
apiVersion: v1
kind: Pod
metadata:
 name: fortune
 spec:
  containers:
   - immage: luksa/fortune
     name: html-generator
     volumeMounts:
     - name: html
       mountPath: /var/htdocs
   - image: nginx:alpine
     name: web-server
     volumeMounts:
      - name: html
        mountPath: /usr/share/nginx/html
        readOnly: true
      ports:
       - containerPort: 80
         protocol: TCP
   volumes:
    - name: html
      emptyDir: {}
```
## Using a Git repository as the starting point for a volume
* Sử dụng để khởi tạo một volumes mặc định. Sau khi đã đông bộ xong với git repo thì khi chúng ta push code lên git thì kubernetes sẽ không tự đồng bộ cái commit mới nhất. Nếu muốn đồng bộ thì chúng ta xóa cái pod và tạo lại
* Tạo một file **gitrepo-volume-pod.yaml**
```
apiVersion: v1
kind: Pod
metadata:
 name: gitrepo-volume-pod
spec:
 containers:
  - image: nginx:alpine
    name: web-server
    volumeMounts:
     - name: html
       mountPath: /usr/share/nginx/html
       readOnly: true
    ports:
     - containerPort: 80
       protocol: TCP
 volumes:
   - name: html
     gitRepo:
       repository: htpps://github.com...
       revision: master
       directory: .
```
## hostPath
* hostPath là một kiểu volumes dữ liệu, nó khác với gitRepo và emptyDir đó là khi khi một pod bị xóa hay bị chết những kiểu volumes này sẽ bị mất hết dữ liệu, nhưng với hostPath thì không, khi pod mới được tạo ra thì nó sẽ sử dụng liệu mà pod trước đã voumes ra.
* Không bao giờ được sử dụng hostPath để lưu dữ liệu của cụm cluster. hostPath chỉ nên dùng để đọc và ghi file trên một Node.