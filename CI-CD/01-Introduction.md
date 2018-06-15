## CI (Continuous Integration)
* CI là tích hợp liên tục, nhằm tích hợp các source code của các members trong team một cách nhanh chóng, giúp kiểm soát được tình hình phát triển thông qua các bước kiểm thử, nhằm đưa sản phảm đạt đến sự ổn định.
* Chu trình làm việc với source code
  + Đầu tiên, các members trong team sẽ bắt đầu pull code mới nhất từ repo về branch để thực hiện các ticket nhất định
  + Tiếp đó là quá trình typing và testing code để đảm bảo chất lượng ticket cũng như toàn bộ source code.
  + Merge code với branch phát triển của cả team và giải quyết conflict
  + Build và đảm bảo code pass qua các tests dưới loacl
  + Commit code lên repo
  + Server CI lắng nghe các thay đổi code từ repository và có thể tự động build/test, sau đó đưa ra các thông báo (pass/failure) cho các members
## CD (Continuous Delivery)
* CD được hiểu là chuyển giao liên tục, là 1 tập hợp các kỹ thuật nhằm đảm bảo việc triển khai tích hợp source code trên môi trường **staging** (môi trường rất giống môi trường **production**). Khi đó suorce code sẽ được deploy một cách tự động lên môi trường **staging**.
* CD (Continuous Deployment): là 1 bước phát triển của Continuous Delivery, giúp hoàn tất giai đoạn triển khai từ môi trường staging(môi trường kiểm thử)
sang môi trường production. **Bằng cách này sources code sẽ được tự động deploy lên môi trường production**
* Continuous Delivery vs Continuous Deployment: Continuous Delivery thì việc deploy production từ môi trường staging lên production là hoàn toàn bằng tay và làm thủ công. Continuous Deployment thì việc deploy production từ môi trường staging lên môi trường production sẽ được làm một cách tự động. Nhưng rất it khi chúng ta deploy tự động từ môi trường staging lên môi trường production vì nó rất dễ có vấn đề xảy ra.
## REF
* https://viblo.asia/p/ci-cd-va-devops-07LKXYXDZV4
* https://viblo.asia/p/cicd-with-jenkins-p1-bWrZnLLv5xw
