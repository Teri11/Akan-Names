
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi",  "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male = document.getElementById("radioDefault1");
    var female = document.getElementById("radioDefault2");

function dayName() {
  var birthYear = parseInt(document.getElementById("birthYear").value);


   var month = parseInt(document.getElementById("month").value);
   
   if(month >12 || month <= 0 ) {
       alert("Enter a valid month");
   }
   
   var day = parseInt(document.getElementById("date").value);

   if(day <=0 || day > 31) {
       alert("Enter a valid date");
   }
   
   var dayNumber = new Date (birthYear,month-1,day).getDay();
   console.log(dayNumber);

   

   if(male.checked) {
       alert("Congratulations for knowing your Akan Name is: " + maleNames[dayNumber]);
   } else if(female.checked){
       alert("Congratulations  for knowing your Akan Name is: " + femaleNames[dayNumber])
   } else {
       alert("Kindly select your Gender and fill up the empty spaces:");
   }
   

}

