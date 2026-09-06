/**
 * Mảng trong Javascript- ARRAY
 * 
 * 1.Tạo mảng
 * -cách tạo
 * -sử dụng cách nào? tại sao?
 * -kiểm tra data type
 * 
 * 2. Truy xuất mảng
 * -độ dài mảng
 * -lấy phần tử theo index
 * 
 */

//1.Tạo mảng

//(declare)khai báo biến trong JS chỉ cần ghi "var" là được
//không cần biết data type của nó là gì
// để tạo mảng chỉ cần viết =[]
var  languages= [
    'JavaScript',
    'PHP',
    'Ruby',
    'Dark',
    null,
    undefined,
    function(){},
    {},//object
    123

];
//trong JS, nếu nhiều câu lệnh viết cùng 1 hàng
//mới cần ngăn cách bằng dấu ;
//còn không thì không cần
console.log(languages)
// Array là kiểu object
console.log(typeof languages)
//kiểm tra biến có phải là 1 Array hay không?
console.log(Array.isArray(languages))

// cách 2: tạo Array = new Array()
//nhưng nó thực thi chậm
var  languages2= new Array(
    'JavaScript',
    'PHP',
    'Ruby',
    'Dark',
    null,
    undefined,
    function(){},
    {},//object
    123

);
console.log(languages2)

//2. Truy xuất mảng
//độ dài mảng-length
console.log("độ dài Array_languages là:"+languages.length)

// lấy phần tử theo index
console.log("phần tử 2 của Array_languages là"+languages[2])
console.log("phần tử 3 của Array_languages2 là"+languages2[3])
