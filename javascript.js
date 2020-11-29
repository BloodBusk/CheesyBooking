//id function
let $ = (foo) => {
    return document.getElementById(foo);
}
//class function
let $2 = (bar) => {
    return document.getElementsByClassName(bar);
}

let bookingInfo = {
    name: "Thomas",
    amount: "4",
    date: "",
    time: ""
}
let bookingDate = [];

//shows booking information
let showDate = () => {
    for (let b of bookingDate) {
        $("confirmationText").innerHTML = `Congratulations! you have booking a table on ${b.date} at ${b.time}, booked by ${b.name} with a party of ${b.amount} people.`;
    }
}

//boolean local storage enabled and catches exceptions
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

//sets values to correct object, pushes into array when isLocalStorageEnabled = true, and sets items in localStorage
let writeDate = () => {
    if (isLocalStorageEnabled) {
        $("confirmBtn").addEventListener("click", () => {
            let getItem = localStorage.getItem('bookingDate');
            let bookingDate = JSON.parse(getItem);

            let bk = Object.assign({}, bookingInfo);
            bk.name = $("nameText").value;
            bk.amount = $("amountText").value;
            bk.date = $("date").value;
            bk.time = $("time").value;
            bookingDate.push(bk);

            let date = JSON.stringify(bookingDate);
            localStorage.setItem("bookingDate", date);
        });
    }

}

//runs on load
let main = () => {
    writeDate();
    showDate();
}

window.addEventListener("load", main);
