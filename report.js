
let employees = JSON.parse(

localStorage.getItem("employees")

)||[];


let html="";


employees.forEach(emp=>{


html+=`

<tr>


<td>

${emp.name}

</td>



<td>

0

</td>



<td>

0

</td>



<td>

₹${emp.salary}

</td>



</tr>


`;



});



document.getElementById(

"report"

).innerHTML=html;

