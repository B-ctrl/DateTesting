
var invoiceDate = document.querySelector("#invoiceDate").value;
var days = Number(document.querySelector("#days").value);
var dueDateElement = document.querySelector("#dueDate");
var initialDepartureDate = document.querySelector("#invoiceDate").value;
var day1;
var day2;
var day3;
var day4;
var day5;
var eventDays = [];

  document.querySelector("#addDays").addEventListener("click", function() {
    invoiceDate = document.querySelector("#invoiceDate").value;
    days = Number(document.querySelector("#days").value);
    dueDateElement = document.querySelector("#dueDate");
    initialDepartureDate = document.querySelector("#invoiceDate").value;
  
        if (!isNaN(days) && invoiceDate.length) {
      //  console.log("1st invoice date: " + invoiceDate);
        invoiceDate = invoiceDate.split("-");
       // console.log("invoice date after split " + invoiceDate);
        invoiceDate = new Date(invoiceDate[0], invoiceDate[1] - 1, invoiceDate[2]);
       // console.log("invoice date after new date: " + invoiceDate);
            
            console.log("invoice date: " + invoiceDate);
            day1 = invoiceDate.toString();
            console.log(" Day 1: " + day1);

            invoiceDate.setDate(invoiceDate.getDate() + 1);            
            day2 = invoiceDate.toString();
            console.log(" Day 2: " + day2);

            invoiceDate.setDate(invoiceDate.getDate() + 1);            
            day3 = invoiceDate.toString();
            console.log(" Day 3: " + day3);

            invoiceDate.setDate(invoiceDate.getDate() + 1);            
            day4 = invoiceDate.toString();
            console.log(" Day 4: " + day4);

            invoiceDate.setDate(invoiceDate.getDate() + 1);            
            day5 = invoiceDate.toString();
            console.log(" Day 5: " + day5);
            
            console.log(" day 1 event date after 3 rounds: " + day1);
            console.log(" day 2 event date after 3 rounds: " + day2);
            console.log(" day 3 event date after 3 rounds: " + day3);
            console.log(" day 4 event date after 3 rounds: " + day4);
            console.log(" day 5 event date after 3 rounds: " + day5);

            eventDays = [day1, day2, day3, day4, day5];
            console.log("event days array " + eventDays);

           

        }
  });