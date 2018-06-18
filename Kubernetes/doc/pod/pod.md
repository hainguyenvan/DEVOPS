## Pod
* Pod là một nhóm (1 trở lên) các container chứa ứng dụng chia sẻ các tài nguyên lưu trữ,
địa chỉ ip ...
* Pod có thể chạy theo 2 cách sau:
	* Pods that run a single container: 1 container tương ứng với 1 pod
	* Pods that run multiple container that need to work together: Một  pod có thể là một
	ứng dụng bao gồm nhiều container được kết nối chặt chẽ và cần phải chia sẻ tài nguyên với nhau.
* Pods cung cấp 2 loại tài nguyên chia sẻ cho các containers: networking và storage
* Networking: Mỗi pod sẽ được cấp 1 địa chỉ IP. Các container trong cùng một Pod có thể
cùng chia sẻ network namespace (địa chỉ ip và port). Các container trong cùng một pod có thể giao tiếp
với các container ở pod khác.
* Storage: Pod có thể chỉ định một share storage volumes. Các container trong pod có thể
truy cập vào volume này.
