/**
* Toán tử so sánh phần 2-Comparison Operators
* ===
* !=
*/
var a= 1;// number
var b= '1';//string

//== và ===
console.log('==', a==b);//== chỉ quan tâm value
console.log('===', a===b);// === quan tâm value và cả data type

//!= và !==
console.log('!=', a!=b);// thấy rằng value cua a và b đều = 1,
// != không khác gì nhau nên False
//còn!== so sánh cả data type
console.log('!==', a!==b);
