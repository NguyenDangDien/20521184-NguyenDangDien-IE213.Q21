## Mục tiêu bài thực hành
- 1 Thêm và sửa review
- 2 Xóa review
- 3 Lấy dữ liệu cho trang tiếp theo

## Công cụ/ môi trường sử dụng
- webstorm: giúp viết code

## Lời giải
### 1.1 Tạo login component
- Vì react phiên bản mới nên em dùng useNavigate() để Link tới các trang trong dự án
![img_9.png](screenShot/img_9.png)

### Kết quả
![img.png](screenShot/img.png)
### 1.2 Thêm review
- Dùng useParams để lấy id của movie 
![img_10.png](screenShot/img_10.png)

### Kết quả
![img_1.png](screenShot/img_1.png)
![img_2.png](screenShot/img_2.png)
![img_3.png](screenShot/img_3.png)
### 1.3 Sửa review
- Tách 1 component riêng để xử lý logic sửa review
- yêu cầu cần truyền thêm reviewId
![img_11.png](screenShot/img_11.png)
### Kết quả
![img_4.png](screenShot/img_4.png)
![img_5.png](screenShot/img_5.png)

### 2 Xóa review
- Thêm event onClick vào để xóa review
- Cần truyền reviewId va userId
![img_12.png](screenShot/img_12.png)


### 3.1 getAll()
- Thêm 2 nút chuyển trang
- Nếu trang hiện tại > 0 thì hiện cả 2 nút
![img_13.png](screenShot/img_13.png)
- Viết logic để chuyển trang component sẽ re-render fetch lại api danh sách phim với 2 query currentPage và entriesPerPage
![img_14.png](screenShot/img_14.png)
![img_15.png](screenShot/img_15.png)

### Kết quả
![img_7.png](screenShot/img_7.png)
![img_8.png](screenShot/img_8.png)
### 3.2 find()
- Viết hàm để chọn chế độ tìm theo title hay rating
![img_16.png](screenShot/img_16.png)
![img_17.png](screenShot/img_17.png)
