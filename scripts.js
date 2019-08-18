function validateform() {
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const gender= document.getElementsByName("gender");
    // const currentDate = new Date();
    // const currentYear = currentDate.getFullYear();

     if(isNaN(date.value) ||date.value <1 || date.value >31 ||date.value === null || date.value === ""){
        alert("Invalid date format");
    }else{
        alert("continue")
    }
}

if(isNaN(month.value) ||month.value <1 || month.value >12 ||month.value === null || month.value === ""){
    alert("Invalid month format");
}else{
    alert("continue")
}

if(isNaN(year.value) ||year.value <1 || year.value >1970 ||year.value === null || year.value === ""){
    alert("Invalid year format");
}else{
    alert("continue")
}
