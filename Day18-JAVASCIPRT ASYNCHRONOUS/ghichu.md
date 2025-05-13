<!-- Xử lý bất đồng bộ bằng promise
 Promise: là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào callback hell là tình 
trạng các hàm callback lồng vào nhau ở quá nhiều tầng.
hiểu đơn giản: promise nó là 1 lời hứa, nó có 2 tác vụ thành công và thất bại , nếu thành công nó sẽ làm 1 công việc 
nào đó và trả về .then , nếu thất bại nó sẽ làm 1 công việc nào đó và trả về .catch
nó bao gồm 3 trạng thái
   + Pending: tác vụ vẫn đang thực hiện
   +     Fullfilled: tác vụ thực hiện thành công
   +     Rejected: tác vụ thực hiện thất bại -->

<!-- Xử lý bất đồng bộ bằng promise
 API là gì : thông thường ở bên BE sẽ tạo ra API cho bên phía FE sử dụng hiểu đơn giản API là những câu lệnh, function, 
giao thức, object,arr…
 => giúp FE và BE có thể tương tác và trao đổi với dữ liệu đc với nhau
giao thức: GET, POST, PUT, DELETE, PATCH.
 +  GET: Lấy dữ liệu từ máy chủ. (Không có tác động phụ đến dữ liệu trên máy chủ. Thường dùng để lấy thông tin.)
 + POST: Tạo mới tài nguyên.
 + PUT: Cập nhật một tài nguyên hiện có trên máy chủ (Thay thế hoàn toàn tài nguyên hiện tại.)
 + DELETE: Xóa một tài nguyên trên máy chủ.
 + PATCH: Cập nhật một phần của tài nguyên hiện có trên máy chủ -->