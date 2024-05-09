// Định nghĩa hàm constructor cho đối tượng người dùng
function Users(name, age, dateOfBirth, mange) {
  this.name = name;
  this.age = age;
  this.dateOfBirth = dateOfBirth;
  this.mange = mange;
}

// Tạo ra các đối tượng người dùng mẫu
var user1 = new Users("John Doe", 25, "1999-05-08", false);
var user2 = new Users("Alice Smith", 30, "1994-10-15", true);
var user3 = new Users("Bob Johnson", 40, "1984-03-20", true);
var user4 = new Users("user 4", 40, "1984-03-20", true);
var user5 = new Users("user 5", 40, "1984-03-20", true);

// Tạo một mảng chứa các đối tượng người dùng
export const userlist = [user1, user2, user3, user4, user5];
