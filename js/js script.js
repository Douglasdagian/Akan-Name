function checkName(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var notify = new Date();
    notify.setDate(parseInt(day));
    notify.setMonth(parseInt(Month)-1);
    notify.setFullYear(parseInt(year));
    var d = notify.getDay();
    if(d===0){
        (alert);
        ("Sunday");
    }else if(d===1){
        ("Monday");
    }else if(d===2){
        ("Tuesday");
    }else if(d===3){
        ("Wednesday");
    }else if(d===4){
        ("Thursday");
    }else if(d===5){
        ("Friday");
    }else if(d===6){
        ("Saturday");
    }
    if(year==""||year>2030){
        ("insert a valid year");
    }else if(Month=="" ||Month>12){
        ("Enter a valid month");
    }else if(day=="" ||day>31){
        ("Enter a valid day");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        ("Your Akan name is" + maleName[d]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        ("Your Akan name is" + femaleName[d]);
    }
}














