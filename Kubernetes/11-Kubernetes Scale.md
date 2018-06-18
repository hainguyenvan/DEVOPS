## Scaling
* Run command
```
$ kubectl scale --replicas=3 rc/node-js-scale
```
* Check result scale
```
$ kubectl get pods -l name=node-js-scale
```