//id function
let $ = (foo) => {
    return document.getElementById(foo);
}
//class function
let $2 = (bar) => {
    return document.getElementsByClassName(bar);
}

let days = [];

function getDaysOfMonth(year, month) {
    let bookingDate = new Date(year, month, 1);
    while (bookingDate.getMonth() === month) {
        days.push(new Date(bookingDate));
        bookingDate.setDate(bookingDate.getDate() + 1);
    }
    return days;
}

getDaysOfMonth(2020, 11);


//make list items
let makeDates = (text) => {
    let liDate = document.createElement("li");
    liDate.setAttribute("class", "date");
    liDate.innerHTML = text;
    return liDate;
}

//open drop down menu
$("dropDownBtn").addEventListener("click", () => {
    $2("div2")[0].style.display = "block";
});

//make all the list items
for (let i = 0; i < days.length; i++) {
    $("dropDown").appendChild(makeDates(days[i].getDate()));
}



//change drop down btn text = clicked items element
for (let i = 0; i < days.length; i++) {
    $2("date")[i].addEventListener("click", () => {
        $("dropDownBtn").innerHTML = $2("date")[i].innerHTML;
    });
}


