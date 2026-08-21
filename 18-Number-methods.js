/*NUMBER METHODS

Kiểu số (Number) trong Javascript

1/Tạo giá trị number
-các cách tạo
-dùng cách nào? tại sao?
-kiểm tra data type

2/Làm việc với number
-to string
-to fixed
*/

//1/Tạo giá trị number
//các cách tạo- cách 1: tạo
var age = 18;
var PI = 3.14;

//các cách tạo- cách 2: truyền số
//new sẽ tạo ra 1 đối tượng (object)
var othernumber = new Number(9);

console.log('age la' + ' ' + typeof age);
console.log('PI la' + ' ' +typeof PI);
console.log('othernumber la' + ' ' +typeof othernumber);

//phép tính không hợp lệ với number
var result = 20/ 'abc';
console.log('result la' + ' ' +result);

//kiểm tra giá trị NaN
console.log (typeof result==NaN);// invalid checking

console.log ('result la NaN:' + ' ' + isNaN(result)) // valid checking

//2/Làm việc với number
//Keyword: javascript number methods

//to string:
console.log(age);// number is blue
console.log(age.toString());// black is string
console.log('age.toString la' + ' ' + typeof age.toString());

var myString = PI.toString();
console.log(myString.toString());
console.log('myString la' + ' ' + typeof myString.toString());

//to fixed- làm tròn số thập phân

console.log(PI.toFixed());//không truyền- .14 <5 nên rút gọn còn 3, nếu > 5 thì làm tròn lên
console.log(typeof PI.toFixed());

var a= 300.2568871555
console.log(a.toFixed(2));// làm tròn 2 số thập phân
console.log(a.toFixed(3));// làm tròn 3 số thập phân
