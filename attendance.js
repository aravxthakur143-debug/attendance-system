let checkInTime;

function checkIn(){

checkInTime = new Date();

localStorage.setItem(
"in",
checkInTime
);

alert("Check In Saved");

}



function checkOut(){


let out = new Date();

let inp = new Date(

localStorage.getItem("in")

);


let worked =

(out-inp)/1000/60/60;


document.getElementById(

"hours"

).innerHTML=

worked.toFixed(2);



calculateOT(worked);



}