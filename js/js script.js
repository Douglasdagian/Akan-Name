function checkName(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var doug = new Date();
    doug.setDate(parseInt(day));
    doug.setMonth(parseInt(Month)-1);
    doug.setFullYear(parseInt(year));
    var d = doug.getDay();
    if(d===0){
        alert("Sunday");
    }else if(d===1){
        alert("Monday");
    }else if(d===2){
        alert("Tuesday");
    }else if(d===3){
        alert("Wednesday");
    }else if(d===4){
        alert("Thursday");
    }else if(d===5){
        alert("Friday");
    }else if(d===6){
        alert("Saturday");
    }
    if(year==""||year>2030){
        alert("insert a valid year");
    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid day");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is" + maleName[d]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is" + femaleName[d]);
    }
}














