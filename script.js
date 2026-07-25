
let monthlySalary=16000;

let selfieTaken=false;



const video=document.getElementById("camera");

const canvas=document.getElementById("canvas");

const preview=document.getElementById("preview");



navigator.mediaDevices.getUserMedia({

video:true

})

.then(stream=>{

video.srcObject=stream;

});




function capturePhoto(){


let ctx=canvas.getContext("2d");


canvas.width=video.videoWidth;

canvas.height=video.videoHeight;



ctx.drawImage(

video,

0,

0

);



preview.src=canvas.toDataURL("image/png");

preview.style.display="block";


selfieTaken=true;



}





function checkIn(){


if(!selfieTaken){

alert("Take Selfie First");

return;

}


localStorage.setItem(

"in",

new Date()

);



document.getElementById("result").innerHTML=

"✅ Check In Saved";


}




function checkOut(){



let out=new Date();


let inp=new Date(

localStorage.getItem("in")

);



let worked=(out-inp)/1000/60/60;



document.getElementById("hours").innerHTML=

worked.toFixed(2);



let ot=0;


let day=new Date().getDay();



if(day==0){

ot=worked;

}
else{

if(worked>9){

ot=worked-9;

}

}



let otRate=monthlySalary/30/9;

let otPay=ot*otRate;



document.getElementById("ot").innerHTML=

ot.toFixed(2);



document.getElementById("otpay").innerHTML=

otPay.toFixed(2);



let total=(monthlySalary/30)+otPay;



document.getElementById("salary").innerHTML=

total.toFixed(2);



document.getElementById("result").innerHTML=

"✅ Attendance Completed";


}