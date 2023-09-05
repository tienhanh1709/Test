// 1. Tạo một danh sách đồ vật yêu thích của bạn với ul#favorite-list và các li.favorite-list-item.
// Sử dụng DOM để thay đổi nội dung của tất cả li.favorite-list-item thành “I love this thing”.
// Sử dụng DOM để thay đổi màu chữ của các li.favorite-list-item thành màu đỏ.
// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list một li có nội dung là text vừa nhập vào.

// console.log(document.getElementsByClassName('favorite-list-item').innerHTML = 'I love this thing');
// document.getElementsByClassName('favorite-list-item').style.color = 'red';
// let list = document.getElementsByClassName('favorite-list-item');
// for(let i of list){
//     i.innerText ='i love this thing';
//     i.style.color = 'red';
// }

// let string = 'xcbbfbf';
// const new_tag = `<li> ${string}</li>`;
// document.getElementById('favorite-list').insertAdjacentHTML('beforeend',new_tag);
// for(let i = 0; i < list.length; i ++){
//     list[i].innerHTML = 'i love this thing';
// }

// 1. Tạo 1 thẻ input:email#my-email. Hãy tạo listener khi giá trị của input thay đổi để kiểm tra định dạng của email nhập vào.

function check(){
    let a = document.getElementById('my-email').value;
    if (a === ''){
        alert('Mời nhập Email')
    }else{
        const expression = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
        let re = expression.test(String(a).toLowerCase());
        document.getElementById('result').innerHTML += re;
        document.getElementById('my-email').value = '';
    }
}

//2. Tạo 2 thẻ input:number#number-a, input:number#number-b và 2 nút “Cộng”, “Trừ”. 
// Hãy tạo listener khi:
// Click vào nút “Cộng” → Cộng 2 số nhập vào từ 2 ô input. 
// Click nút “Trừ” → Trừ 2 số nhập vào từ 2 ô input.
function sumNumber(){
    let a = Number(document.getElementById('number-a').value);
    let b = Number(document.getElementById('number-b').value);
    if (a === 0 || b === 0){
        alert('Mời nhập số')
    }else{
        let sum = a + b;
        document.getElementById('result_2').innerHTML = `Kết quả : ${sum}`;
    }
}

function subNumber(){
    let a = Number(document.getElementById('number-a').value);
    let b = Number(document.getElementById('number-b').value);
    if (a === 0 || b === 0){
        alert('Mời nhập số')
    }else{
        let sub = a - b;
        document.getElementById('result_2').innerHTML = `Kết quả : ${sub}`;
    }
}
// 3. Tạo ra 1 ảnh có kích thước 100x100 và 2 nút “Tăng kích thước”, “Giảm kích thước”. 
// Khi click vào nút “Tăng kích thước” → Tăng kích thước của ảnh mỗi chiều lên 10px.
// Khi click vào nút “Giảm kích thước” → Giảm kích thước của ảnh mỗi chiều đi 10px.
function sizeImg(){
    return  w = Number(document.getElementById('img_size').style.width.split('p',1));
}
function upSize(){
    let number_size= sizeImg() + 10;
    let new_size = String(number_size + 'px');
    document.getElementById('img_size').style.width = new_size;
    document.getElementById('img_size').style.height = new_size;
}

function downSize(){
    let number_size= sizeImg() - 10;
    let new_size = String(number_size + 'px');
    document.getElementById('img_size').style.width = new_size;
    document.getElementById('img_size').style.height = new_size;
}




////////////////////////////////////////////////////////////////////////////////////////////////
let newImg = document.getElementById('img_4');
let newUrl = document.getElementById('url');
let newWeight = document.getElementById('w');
let newheight = document.getElementById('h');
let newradius = document.getElementById('radius');
let newAlt = document.getElementById('al');

newUrl.onchange = () => {
    const image = newUrl.value;
    newImg.src = image;
}

newWeight.onchange = () => {
    const w = newWeight.value;
    document.getElementById('img_4').style.width = w + 'px';
}
newheight.onchange = () => {
    const w = newheight.value;
    document.getElementById('img_4').style.height = w + 'px';
}
newradius.onchange = () => {
    const w = newradius.value;
    document.getElementById('img_4').style.borderRadius = w + 'px';
}
newAlt.onchange = () => {
    const w = newAlt.value;
    document.getElementById('img_4').alt = w;
}

////////////////////////////////////////////////////////////////////////////////////////////////
let job = document.getElementById('ipt_job');
let job_sumit = document.getElementById('btn_job');

job_sumit.onclick = () => {
    if(job.value === ''){
        alert('Không nhập lấy đâu ra việc :)');
    }else if(Number(job.value)){
        alert('Công việc thì làm j có số??')
    }else{
        document.getElementById('list_job').innerHTML += `<li>${job.value}</li>`;
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////
let del_select = document.getElementsByClassName('del');
// let delete_action = document.getElementsByClassName('row');
// console.log(delete_action);


// for (let i = 0; i < del_select.length; i++){
//     del_select[i].onclick = () => {
//          this.value = 'd';
//         // del_select[i].value = 'f';
//         if(del_select[i].value = 'd'){
//             let el = del_select[i].parentElement.parentElement;
//             // console.log(el);
//             el.remove(el);
//             // del_select = document.getElementsByClassName('del');
//         }
//     };

// }

for (let i = 0; i < del_select.length; i++){
    del_select[i].onclick = () => {
        del_select[i].parentElement.parentElement.remove();
        let new_btn = document.getElementsByClassName('del');
        for (let new_select of new_btn) {
            new_select.onclick = () =>{
                new_select.parentElement.parentElement.remove();
            }
        }

    };
}




////////////////////////////////////////////////////////////////////

let btn_register = document.getElementById('btn_7');
let ipt_value = document.getElementsByClassName('ipt_7');


btn_register.onclick = () => {
    for (let i = 0; i < ipt_value.length; i++) {
        if (i = 0){
            ipt_value[0].value == '';
            alert('Thông tin có * là bắt buộc');
            break;
        }        
        if(i = 4){
            if (ipt_value[4].value == ''){
                alert('Thông tin có * là bắt buộc');
                break;
            }else{
                let email_check = ipt_value[4].value;
                const expressions = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
                let rew = expressions.test(String(email_check).toLowerCase());
                if (rew === false){
                    alert('Email không đúng định dạng');
                    break;
                }
            }
        }
        if(i = 5){
            if (ipt_value[5].value == ''){
                alert('Thông tin có * là bắt buộc');
                break;
            }else{
                let email_pass = String(ipt_value[5].value);
                if(email_pass.length <=5){
                    alert('Mật khẩu tối thiểu 6 ký tự');
                    break;
                }
            }
        }

        alert('Đăng ký thành công');
        break; 
        
    }
};

