## Mục tiêu bài thực hành

- Kết nối được MongoDB
- Thao tác được với Mongodb shell
- Sử dụng được các câu truy vấn đơn giản

## Công cụ/ môi trường sử dụng
- ChatGPT: giúp viết README và sửa lại các câu truy vấn
- Mongodb shell trong mongodb compass: giúp chạy các câu truy vấn
- webstorm: giúp viết README và push lên git

---
## Lời giải cho các câu bài tập trong lab và hình ảnh kết quả
- 2.2
- db.employees.insertMany([
  {"id":1,"name":{"first":"John","last":"Doe"},"age":48},
  {"id":2,"name":{"first":"Jane","last":"Doe"},"age":16},
  {"id":3,"name":{"first":"Alice","last":"A"},"age":32},
  {"id":4,"name":{"first":"Bob","last":"B"},"age":64}
])
# ![img_2.png](ScreenShot/img_2.png)
- 2.3
- db.employees.createIndex({id:1},{unique:true})
# ![img_1.png](ScreenShot/img_1.png)
- 2.4
- db.employees.find({"name.first": "John","name.last":"Doe"})
# ![img_3.png](ScreenShot/img_3.png)
- 2.5
- db.employees.find({ $and: [{age: { $gt: 30}},{age: { $lt: 60}}]})
# ![img_4.png](ScreenShot/img_4.png)
- 2.6
- db.employees.insertMany([{"id":5,"name":{"first":"Rooney","middle":"K","last":"A"},"age":30},
  {"id":6,"name":{"first":"Ronaldo","middle":"T","last":"B"},"age":60}])
# ![img_5.png](ScreenShot/img_5.png)
- db.employees.find({"name.middle":{$exists: true}})
# ![img_6.png](ScreenShot/img_6.png)
- 2.7
- db.employees.updateMany({"name.middle":{$exists:true}},{$unset:{"name.middle":""}})
# ![img_7.png](ScreenShot/img_7.png)
- 2.8
- db.employees.updateMany({},{$set:{organization: "UIT"}})
# ![img_8.png](ScreenShot/img_8.png)
- 2.9
- db.employees.updateMany({id:{$in:[5,6]}},{$set:{organization: "USSH"}})
# ![img_9.png](ScreenShot/img_9.png)
- 2.10
- db.employees.aggregate([{$match:{organization:{$in: ["UIT", "USSH"]}}},
  {$group:{_id: "$organization", totalAge: { $sum: "$age" }, averageAge: { $avg: "$age" } }}])
# ![img_10.png](ScreenShot/img_10.png)