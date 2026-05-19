## Mục tiêu bài thực hành
- 1 Kết nối Backend
- 2 Xây dựng MovieList Component
- 3 Hiển thị thông tin trang movie khi nhấn vào 'View Reviews'
- 4 Hiển thị danh sách review tương ứng cho từng phim dưới phần Plot

## Công cụ/ môi trường sử dụng
- webstorm: giúp viết code

## Lời giải
### 1.1 Cài đặt axios
- Câu lệnh: npm i axios
### 1.2 Tạo lớp dịch vụ MovieDataService ở .src/services/movie.js

### 1.3 Tạo các lời gọi dịch vụ backend 

![img.png](screen-shot/img.png)

### 2.1 Tạo các biến trạng thái: movies, searchTitle, searchRating, ratings 
![img_1.png](screen-shot/img_1.png)

### 2.2 Tạo 2 phương thức retrieveMovies() và retrieveRatings()
![img_2.png](screen-shot/img_2.png)

### 2.3 Tạo 2 search form title và rating dùng component Row, Col của bootstrap
![img_3.png](screen-shot/img_3.png)

### 2.4 Hiển thị các movie bằng component Card
![img_4.png](screen-shot/img_4.png)

### 2.5 Hiện thực 2 phương thúc findByTitle() và findByRating()
![img_5.png](screen-shot/img_5.png)

### Kết quả bài 2
![img_6.png](screen-shot/img_6.png)

### 3.1 Tạo component chi tiết của 1 movie

### 3.2 Tạo phương thức getMovie()
![img_7.png](screen-shot/img_7.png)

### 3.3 Trang trí

### Kết quả bài 3
![img_8.png](screen-shot/img_8.png)

### 4.1 Tạo phần list các review
![img_9.png](screen-shot/img_9.png)

### 4.2a Thêm các review
### 4.2b Dùng thư viện moment để format lại ngày tháng
![img_10.png](screen-shot/img_10.png)
