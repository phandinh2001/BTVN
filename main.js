// Bài 1
// let str_input = prompt("nhập chuỗi:").toLowerCase();
// let reversed = " ";
// for (let i = str_input.length - 1; i >= 0; i--) {
//   reversed += str_input[i]
// }
// console.log(reversed);
//--------------------------------------------------
//Bài 2 
// let str = prompt('nhập chuỗi:');
// let newstr = str.split(" ");
// let aRR = [];
// for(let i = 0; i < newstr.length; i++) {
//     aRR.push(newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1)); 
// }
//     console.log(aRR.join(' '));

//hàm charAt có tác dụng tìm kiếm kí tự ở một vị trí nhất định.
//hàm slice có tác dụng trích xuất  một số phần tử của mảng.
//-------------------------------------------------------------------
//Bài3
// let arr = prompt('nhập chuỗi ngăn cách bởi dấu phẩy(,)');
// let newArr = arr.split(',');
// let newArr2 = [];
// for ( let i = 0 ; i <newArr.length; i++) {
//   if (newArr2.indexOf (newArr [i]) === -1 ) {
//    newArr2.push (newArr [i]);
//  }
// }
// console.log(newArr);
// console.log(newArr2);
//hàm indexof tìm kiếm một phần tử trong mảng dựa vào giá trị của nó
//--------------------------------------------------------------------
//Bài 4
// Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ)
// let products = [
//     {
//      name : 'Phan Văn Đức',
//      age : 20,
//      salary : 1000,
//      position : 'Trợ giảng',
//     },
//       {
//         name : 'Nguyễn Trọng Hoàng',
//         age  : 21,
//         salary : 2000,
//         position : 'Giảng viên',
//     },
//     {
//         name : 'Quế Ngọc Hải',
//         age  : 22,
//         salary : 3000,
//         position : 'Giám đốc',
//     },
// ]
// console.log(products);
// while(true){
//     let input = prompt("Mời chọn :C-R-U-D").toLowerCase();
//     if(input === 'c'){
//         let name = String(prompt('Nhập tên muốn create:'));
//         let age = Number(prompt('Nhập tuổi nhân viên đó:'));
//         let salary = Number(prompt('Nhập tiền lương:'));
//         let position = String(prompt('Nhập chức vụ:'));
//         let object = {};
//         object['name'] = name;
//         object['age'] = age;
//         object['salary'] = salary;
//         object['position'] = position;
//         products.push(object);
        
//     }
//     else if(input === 'r'){
//         for(let i = 0; i <= products.length; i++){
//             console.log(`${i + 1}`,products[i]);
//         }
//         break;
//     }
//     else if(input === 'u'){
//         let index = Number(prompt('Nhập vị trí nhân viên bạn muốn cập nhật:'));
//         let key = String(prompt('Nhập name, age, salary, position:'));
//         let newValue = prompt('Nhập giá trị mới:');
//         products[index - 1][key] = newValue;
       
//     }
//     else if(input === 'd' ){
//         let indexDel = Number(prompt('Nhập vị trí nhân viên bạn muốn xóa:'));
//         let key2 = String(prompt('Nhập name, age, salary, position:'));
//         products.splice(indexDel - 1, 1);
      
//     }
//     else{
//         alert("Can't find it, please exit")
//     }
// }
//----------------------------------------------------------------------------
//Bài 5
let day = Number(prompt('Input day :'));
let month = Number(prompt('Input month:'));
let year = Number(prompt('Input year:'));
let dayOfmonth ;
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
//     case 12: 
//      dayOfmonth = 31;
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//      dayOfmonth = 30;
//     break; 
//     case 2:
//         if(year % 400 === 0 || (year % 4 === 0 && year != 0 )){
//             dayOfmonth = 29;
//         }
//         else{
//             dayOfmonth = 28;
//         }
//         break;
// }
// if(year > 0 && (month > 0 && month <= 12) && (day > 0 && day <= dayOfmonth)){
//     console.log('Nhập ngày,tháng,năm hợp lệ!\n');
//     console.log('----------------------------\n')
//     console.log(`Ngày,tháng,năm đã nhập là: ${day}/${month}/${year}.`);
//     let nextDay;
//     let nextMonth;
//     let nextYear;
//     if(day === dayOfmonth){
//     nextDay = 1;
//         if(month === 12){
//          nextMonth = 1;
//          nextYear = year + 1;
//         }
//         else{
//          nextMonth = month + 1;   
//          nextYear = year;
//         }
//     }
//     else{
//     nextDay = day + 1;
//     nextMonth = month;
//     nextYear = year;
//     }
//     console.log(`Ngày tiếp theo là:${nextDay}/${nextMonth}/${nextYear}`);
// }
// else{
   
//     console.log('Nhập ngày,tháng,năm không hợp lệ!')
// }
let shirttypes = [ "Jean", "T-Shirt", "Socks"];
let hello = prompt('Hi there, welcom to shop admin panel, what do you want(C,R,U,D)?');
if(hello == 'r'){
    console.log(hello);
}
else if(hello == 'c'){
   shirttypes.push(prompt('Enter the name of the new item'));
   alert('Done');


}
else if(hello == 'u'){
    let num_ber = prompt('Enter the position you want to update');
    let new_name = prompt('Enter the new name');
    num_ber = Number(num_ber);
    shirttypes[num_ber] = new_name;
    alert('Done');

 

}
else if(hello == 'd'){
    let startDelete = prompt('Number of element staring to delete');
    let sumDelete = prompt('Enter the position you want to delete');
    shirttypes.splice(startDelete,sumDelete);


}
else {
    alert('This is command is not supported');
}
let hi = prompt("Hi there, welcome to shop admin panel, what do you want(C, R, U, D)?");
if (hi == "r") {
    console.log(shirttypes);
}











