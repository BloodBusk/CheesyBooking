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

let showDate = () => {
    for (let b of bookingDate) {
        $("confirmationText").innerHTML = `Congratulations! you have booking a table on ${b.date} at ${b.time}, booked by ${b.name} with a party of ${b.amount} people.`;
    }
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

let main = () => {
    writeDate();
}

window.addEventListener("load", main);
