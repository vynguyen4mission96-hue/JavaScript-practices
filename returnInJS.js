//Return trong hàm- JS cơ bản

var isConfirm = confirm('massage?')
//alert, confirm, etc nó sẽ ngăn cản những đoạn code đằng sau
//trừ khi nó chạy xong (ví dụ: hộp thoại- mình phải tắt hộp thoại đi)
console.log(isConfirm)

//return
function cong(a,b){
    //không return thì mặc định nó trả về undified
    return a+b
    //bất cứ cái gì bên dưới return sẽ bị bỏ qua
    //console.log dưới đây sẽ bị bỏ qua
    console.log(a+b-1)
    //gặp return là ngưng (gặp return nào trước thì trả kết quả trước)
}

var result= cong(2,8)
console.log(result)

//ví dụ return: trả về kết quả nối chuỗi
function congcd(c,d){
    //nối chuỗi: 3+5= 35 (không phải phép cộng)
    return c.toString() + d.toString()
}
var result2= congcd(3, 5)
console.log(result2)