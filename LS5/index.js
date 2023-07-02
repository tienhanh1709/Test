
// Bài 1: Hãy đếm số lượng chữ số của số nguyên dương n
// function countNumber(n){
//     let m = n.toString();
//     return  m.length;
// }
// console.log(countNumber(1456));


// Bài 2: Hãy tính tổng các chữ số chẵn của số nguyên dương n
// function sumNumber(n){
//     if(n < 0){
//         return 'Số phải lớn hơn 0'
//     }else if(n >=0){
//         let sum = 0;
//         let a = n.toString();
//         let b = a.length;
//         let c = a.split('',b)
//         for(let i = 0; i < c.length; i++){
//             if(c[i] % 2 == 0){
//                 sum += Number(c[i]);
//             } 
//         } 
//         return  sum;
//     }

// }
//   console.log(sumNumber(12368234));
// Bài 3: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên
// function index(arr){
//     let a;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < arr[i+1]){
//             a = i;
//         }else if(arr[i] > arr[i+1]){
//             a = i+1;
//         }
//         return a;
//     }
// }
// console.log(index([6,8,9,4,2,5]));