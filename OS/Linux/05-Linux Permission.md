## Linux commands
* Trong linux có 3 kiểu người dùng
  + Owner: Kiểu người dùng bình thường
  + Group: Nhóm người dùng
  + Others: Người dùng khác
* Có các quyền sau:
  + Read(r): Quyền đọc nội dung của files
  + Write (w): Quyền ghi files
  + Execute (x): Quyền thực thi files
* Permission Set
| Position | Characters | Ownership  |
| ---------|:----------:| ----------:|
| 1        | -          | Kiểu files |
| 2-4      | rw-        | Quyền user |
| 5-7      | rw-        | Quyền nhóm |
| 8-10     | rw-        | Quyền of Others |
* Setting Octal Permissions
  + 0: ---
  + 1: --x
  + 2: -w-
  + 3: -wx
  + 4: r--
  + 5: r-x
  + 6: rw-
  + 7: rwx