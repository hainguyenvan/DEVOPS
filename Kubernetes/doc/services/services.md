## Services
* Vì pod có tuổi thọ nhất ngắn nên không thể đảm bảo được về địa chỉ IP mà chúng được cung cấp
* Service là khái niệm được thực hiện bởi: domain name, port. Service sẽ tự động tìm các pod được đánh label phù hợp (trùng với label service), rồi chuyển các connection tới đó
* Nếu tìm được 5 pods thỏa mãn label. service sẽ thực hiện load-balancing: chia container tới từng pod theo chiến lược được chọn
* Mỗi service sẽ được gán 1 domain do người dùng lựa chọn, khi ứng dụng cần kết nối đến service, ta chỉ cấn dùng domain là xong. Donmain được quản lý bởi hệ thống SKYDNS nội bộ của k8s-một thành phần sẽ được cài khi ta cài k8s
* Đây là nơi bạn có bạn có thể cấu hình cân bằng tải cho nhiều pod và expose các pod đó