let students=[
    {id:1,fname: "ram", lname:"shrestha", salary:'10000', Department:'Management'},
    {id:2,fname:"shyam", lname:"poudel", salary:'20000', Department:'Computing'}
];

function show_students(){
    let outPut="";
    for(let a=0; a<students.length;a++){
        outPut+=`<tr>
        <td>${students[a].id}</td>
        <td>${students[a].fname} ${students[a].lname}</td>
        <td>${students[a].salary}</td>
        <td>${students[a].Department}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>`;
    }
    document.getElementById("result").innerHTML=outPut;
}
show_students();

let i=4

function addStudent(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let salary = document.getElementById("salary").value;
    let Department = document.getElementById("Department").value;
    let insertData= {id:i, fname:fname, lname:lname, salary:salary, Department:Department};
    students.push(insertData);
    i++;
    show_Students();
}