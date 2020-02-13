
var arrivalDate = document.querySelector("#arrivalDate").value;
var days = 5;
var day1;
var day2;
var day3;
var day4;
var day5;
var eventDays = [];
var day1Formatted = "2020-02-28";   // hardcoded for now
var day2Formatted = "2020-02-29";   // hardcoded for now
var day3Formatted = "2020-03-01";   // hardcoded for now
var day4Formatted = "2020-02-02";   // hardcoded for now
var day5Formatted = "2020-02-03";   // hardcoded for now
var latlon = "38.8951,-77.0364";    // hardcoded for now
var Day1Events = {};
var Day2Events = {};
var Day3Events = {};
var Day4Events = {};
var Day5Events = {};


document.querySelector("#submitRequest").addEventListener("click", function() {
   arrivalDate = document.querySelector("#arrivalDate").value;
  
    if (!isNaN(days) && arrivalDate.length) {
      arrivalDate = arrivalDate.split("-");
      arrivalDate = new Date(arrivalDate[0], arrivalDate[1] - 1, arrivalDate[2]);
  
            day1 = arrivalDate.toString();

            arrivalDate.setDate(arrivalDate.getDate() + 1);            
            day2 = arrivalDate.toString();

            arrivalDate.setDate(arrivalDate.getDate() + 1);            
            day3 = arrivalDate.toString();

            arrivalDate.setDate(arrivalDate.getDate() + 1);            
            day4 = arrivalDate.toString();

            arrivalDate.setDate(arrivalDate.getDate() + 1);            
            day5 = arrivalDate.toString();
            
            console.log(" day 1 event date after 5 rounds: " + day1);
            console.log(" day 2 event date after 5 rounds: " + day2);
            console.log(" day 3 event date after 5 rounds: " + day3);
            console.log(" day 4 event date after 5 rounds: " + day4);
            console.log(" day 5 event date after 5 rounds: " + day5);

            eventDays = [day1, day2, day3, day4, day5];
            console.log("event days array " + eventDays);
    }

    showPosition();

});

function showPosition() {

  // get events for day 1 and store in Day1Events
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events?apikey=azaUxsQPC2NvNoM7ZPpJOHJ0xw2N0iqd&radius=10&unit=miles&locale=*&size=5&countryCode=US&localStartDateTime=" + day1Formatted + "T00:00:00," + day1Formatted + "T23:59:59&geoPoint=" + latlon,
        async: true,
        dataType: "json",
        success: function (Day1JSON) {
          Day1Events = Day1JSON;
          },
        error: function (xhr, status, err) {
          console.log(err);
          }
      });
              
  // get events for day 2 and store in Day2Events
    $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events?apikey=azaUxsQPC2NvNoM7ZPpJOHJ0xw2N0iqd&radius=10&unit=miles&locale=*&size=5&countryCode=US&localStartDateTime=" + day2Formatted + "T00:00:00," + day2Formatted + "T23:59:59&geoPoint=" + latlon,
      async: true,
      dataType: "json",
      success: function (Day2JSON) {
        Day2Events = Day2JSON;
        },
      error: function (xhr, status, err) {
        console.log(err);
        }
    });
            


  console.log("Day 1 Events: ");
  console.log(Day1Events);
  console.log("Day 2 Events: ")
  console.log(Day2Events);   

}


