function validateform() {
    const date = document.getElementById("date");
    // const month = document.getElementById("month");
    // const year = document.getElementById("year");
    // const gen= document.getElementsByName("gender");
    // const currentDate = new Date();
    // const currentYear = currentDate.getFullYear();

     if(isNaN(date.value) ||date.value <1 || date.value >31 ||date.value === null || date.value === ""){
        alert("Invalid date format");
    }else{
        alert("continue")
    }
}