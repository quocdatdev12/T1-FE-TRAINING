<!--
1:localStorage :
- là một giao diện Web Storage cho phép lưu trữ dữ liệu trong trình duyệt của người dùng một cách bền vững.
- Dữ liệu lưu trữ trong localStorage sẽ không bị xóa khi người dùng đóng trình duyệt, và nó có thể được truy cập từ bất kỳ trang nào thuộc cùng một tên miền.

2: Một số đặc điểm của localStorage:

- Kích thước lưu trữ: Mỗi miền có thể lưu trữ khoảng 5-10 MB dữ liệu tùy thuộc vào trình duyệt.
- Dữ liệu dạng chuỗi: localStorage chỉ hỗ trợ lưu trữ dữ liệu dưới dạng chuỗi. Nếu bạn muốn lưu trữ các kiểu dữ liệu khác (như đối tượng), bạn cần chuyển đổi chúng thành chuỗi bằng JSON.stringify().
Truy cập: Dữ liệu trong localStorage có thể dễ dàng truy cập và thay đổi bằng JavaScript.

Ví dụ:
// Lưu trữ dữ liệu
localStorage.setItem('key', 'value');

// Lấy dữ liệu
const value = localStorage.getItem('key');

// Xóa dữ liệu
localStorage.removeItem('key');

// Xóa tất cả dữ liệu
localStorage.clear();
 -->
