//id function
let $ = (foo) => {
    return document.getElementById(foo);
}
//class function
let $2 = (bar) => {
    return document.getElementsByClassName(bar);
}

let days = []; //saves entire date day, month, year, time
let bookingDate = []; //saves bookings made by people
let bookingInfo = { //variable used to save booking info per person
    month: "11",
    day: "1"
};

//get date function
let getDaysOfMonth = (year, month) => {
    let bookingDate = new Date(year, month, 1);
    while (bookingDate.getMonth() === month) {
        days.push(new Date(bookingDate));
        bookingDate.setDate(bookingDate.getDate() + 1);
    }
    return days;
}

//make list items
let makeDates = (text) => {
    let liDate = document.createElement("li");
    liDate.setAttribute("class", "date");
    liDate.setAttribute("id", "dateId" + text);
    liDate.innerHTML = text;
    return liDate;
}

//boolean local storage
const isLocalStorageEnabled = () => {
    let foo = "bar";
    try {
        localStorage.setItem(foo, foo);
        localStorage.removeItem(foo);
        return true;
    } catch (e) {
        return false;
    }
}

//get date and save in local storage
let pressDate = (e) => {
    for (let i = 0; i < days.length; i++) {
        let bk = Object.assign({}, bookingInfo);

        $("dateId" + (i + 1)).addEventListener("click", () => {
            $("dateId" + (i + 1)).style.backgroundColor = "blue";
            let currentBookingDay = $("dateId" + (i + 1)).innerHTML;
            bk.day = currentBookingDay;
            bookingDate.push(bk);
            console.log(bookingDate);
            $("dateId" + (i + 1)).style.display = "none";
        })
    }

    if (isLocalStorageEnabled) {
        localStorage.removeItem("bookingDate");
        let date = JSON.stringify(bookingDate);
        localStorage.setItem("bookingDate", date);
    }
    console.log(localStorage.getItem("bookingDate"));
}

//clicking on confirm btn prints out your confirmed booking information
let confirmBooking = () => {
    $("confirm").addEventListener("click", () => {
        $("bookingConfirmation").innerHTML = "You have booked a table on the: " + bookingDate[bookingDate.length - 1].day + " of month: " + bookingDate[bookingDate.length - 1].month;
    })
}

//main function runs on load
let doThis = () => {
    getDaysOfMonth(2020, 10);
    //open drop down menu
    $("dropDownBtn").addEventListener("click", () => {
        $("dropDown").classList.toggle("toggleOff");
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
    pressDate();
    
    confirmBooking();
    
}

window.addEventListener("load", doThis);
