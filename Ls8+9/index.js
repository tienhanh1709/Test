// Bài tập array


// let arr = [4, 3, 8, 6, 2];
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[1] + arr[2]);
// let b;
// b = arr[1]; 
// arr[1] = arr[3];
// arr[3] = b;
// console.log(arr);

// Khai báo 1 mảng gồm các số bất kỳ.
// Hãy in ra các số chẵn trong mảng đó.
// Hãy tính tổng các phần tử trong mảng.
// Hãy tìm phần tử nhỏ nhất trong mảng.
// 1.
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }
// 2.
// let sum = 0; 
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);
// 3.
// let a = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//         a = arr[i];
//     }else if(arr[i] > arr[i + 1]) {
//         a = arr[i + 1]; 
//     }
// }

// console.log(a);


// 1. Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.

// 2. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.

// 3. Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa 
// phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.
// 1. 
// function add(n){
//     let arr_1 = [];
//     for ( let i = 1; i <= n; i++){
//         arr_1.push(Math.floor(Math.random() * 100));
//     }
//     return arr_1;
// }
// console.log(add(8));

// 2. 
// function add_string(n){
//     let arr_2 = [ 46, 67];
//     for ( let i = 1; i <= n; i++){
//         if(arr_2.length < n){
//             arr_2.unshift('0');
//         }
//     }
//     return arr_2;
// }
// console.log(add_string(7));
// 3. 


// Khai báo 1 mảng gồm các số bất kỳ. 
// Tính tích của các phần tử trong mảng đó.
// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Tính giá trị trung bình của mảng.
// Lọc ra các số nguyên tố trong mảng.
// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// Nhập vào số n cho đến khi n là 1 số trong mảng s.


// let array = [4, 5, 9, 6, 9, 10, 11, 12];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// let agv = sum / array.length;
// console.log(agv);
// let multi = 1;
// for (let i = 0; i < array.length; i++) {
//     multi *= array[i];
// }
// console.log(multi);
// let temp = [];
// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 3 === 0) {
//         temp.push(array[i]);
//     }
// }
// let num_temp;
// for (let j = 0; j < temp.length; j++) {
//     if(temp[j] < temp[j + 1]) {
//         num_temp = temp[j+1];
//     }else   if(temp[j] > temp[j + 1]) {
//         num_temp = temp[j];
//     }
// }
// console.log(num_temp);





// 1. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
// 2. Nhập vào 1 dãy số s. Mỗi số cách nhau bởi dấu “,”.
// Tìm số đầu tiên trong dãy lớn hơn 5 và chia hết cho 2.
// Tìm tất cả số lẻ trong dãy s .
// Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương các phần tử của dãy s.

// 1.
// let array = [5,6,7,3,9,4];
// let sum = 0;
// for(let num of array){
//     if(num % 2!== 0){
//         sum += num;
//     }
// }
// console.log(sum);
// 2.
// let s = [7, 4, 12, 6, 8, 4, 3, 9];
// let x = [];
// for(let num of s){
//     if(num % 2 === 0 && num > 5){
//         console.log(num);
//         break;
//     }
// }
// for(let num of s){
//     x.push(num**2);
// }
// console.log(x);



// Sắp xếp nổi bọt
// let s = [7, 4, 12, 6, 8, 3, 9];
// for(let i = 0; i < s.length; i++) {
//     for(let j = 0; j < s.length - i - 1; j++) {
//         if(s[j] > s[j + 1]) {
//             let temp = s[j];
//             s[j] = s[j + 1];
//             s[j + 1] = temp;
//         }
//     }
// }
// console.log(s);
// Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// Tìm những chuỗi trong mảng có chứa giá trị text.
// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.


// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình
//  a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
// let n=[];
// function pt(a,b,c){
//     let dt = b**2 - 4*(a*c);
//     if (dt < 0){
//         return 'Phương trình vô nghiệm';
//     }else if (dt === 0){
//         n.push(-b/2*a);
//         return n;
//     }else if (dt > 0){
//         let temp1 = (-b + Math.sqrt(dt))/2*a;
//         let temp2 = (-b - Math.sqrt(dt))/2*a;
//         n.push(temp1, temp2);
//         return n;
//     }
// }
// console.log(pt(4,-2,-6));