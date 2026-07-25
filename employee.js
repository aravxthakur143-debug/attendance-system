
showEmployees();



function showEmployees(){


let employees = JSON.parse(

localStorage.getItem("employees")

)||[];



let html="";



employees.forEach((emp,index)=>{


html+=`

<div class="employee">

<b>${emp.name}</b>

<br>

Salary : ₹${emp.salary}


<br><br>


<button onclick="deleteEmp(${index})">

Delete

</button>


</div>


`;


});


document.getElementById("list").innerHTML=html;



}




function deleteEmp(i){


let employees=JSON.parse(

localStorage.getItem("employees")

)||[];



employees.splice(i,1);



localStorage.setItem(

"employees",

JSON.stringify(employees)

);



showEmployees();



}
