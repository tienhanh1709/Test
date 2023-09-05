const list_students = [
    {
        id : 1,
        name : 'Nguyễn A',
        age : 18,
        gender : 'male',
        point : 100,
    },
    {
        id : 2,
        name : 'Trần B',
        age : 19,
        gender : 'female',
        point : 120,
    },
    {
        id : 3,
        name : 'Cao C',
        age : 2,
        gender : 'female',
        point : 150,
    }
];
const listStudent = document.getElementById('data'); 
function render(){
    let stringHTML = '';
for(let student of list_students){
    stringHTML += 
    `
        <tr>
            <th scope='row'>${student.id}</th>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.point}</td>
            <td>
            <button type="button" class="btn btn-danger delete_action"  onclick="">Delete</button>
            <button type="button" class="btn btn-warning update_action" onclick="">Update</button>
            </td>
        <tr>
    `;
}
listStudent.innerHTML = stringHTML;

}
render();

let add = document.getElementById('add_action');

let update = document.getElementsByClassName('update_action');
add.onclick = () =>{
    let id_value = Number(document.getElementById('id_ipt').value);
    let name_value = document.getElementById('name_ipt').value;
    let age_value = Number(document.getElementById('age_ipt').value);
    let gender_value = document.getElementById('gender_ipt').value;
    let point_value = Number(document.getElementById('point_ipt').value);
    
    let isExitId = false;
    for (let student of list_students){
        if(id_value == student.id){
            isExitId = true;
        }
    }
    if(isExitId){
        alert('Id đã tồn tại. Mời nhập lại')
    }else{
        const new_student = {
            id: id_value,
            name : name_value,
            age: age_value,
            gender: gender_value,
            point : point_value,
        }
        list_students.push(new_student);
        document.getElementById('id_ipt').value ='';
        document.getElementById('name_ipt').value ='';
        document.getElementById('age_ipt').value ='';
        document.getElementById('gender_ipt').value ='';
        document.getElementById('point_ipt').value ='';
    }
    render();
}
render();
let del = document.getElementsByClassName('delete_action');
console.log(del);
for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        console.log(i);
        //  delete_student(i);
    };
}
function delete_student(index){
    list_students.splice(index, 1);
}
render();
