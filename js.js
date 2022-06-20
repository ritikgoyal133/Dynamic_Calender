var date = new Date();
console.log(date);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function renderBody() {

    document.getElementById("month").innerHTML = months[date.getMonth()];
    //Show Current Month on UI 


    document.getElementById("todayDate").innerHTML = date.toDateString();
    //Show Current Date on UI(Day/Month/Date/Year)Format

    var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
    console.log("Print Weekdays:" + weekDays);


    var weeks = " ";
    for (i = 0; i < weekDays.length; i++) {
        weeks += `<div class = weekDays>  ${weekDays[i]}  </div>`;
    }
    console.log(weeks);
    document.getElementsByClassName('weeks')[0].innerHTML = weeks;
    //Showing Week Days

    //(2022, 5+1,0) => (2022, 6,0).getDate() => (1july,0) => 30June
    var endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    console.log("End Date of month: " + endDate);
    // 30 End Date of month


    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    console.log("First Day of month: " + firstDay);
    //3 First Day of month ie. wednesday

    //1june->0== 31may->getdate = 31 May
    var prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    console.log("Previous date: " + prevDate);
    // 31may Last Date of Previous month (current month in june, so it shows31)

    const day = date.getDay();
    console.log("Today's day: " + day);
    //Getting Today Day in terms of (0..6)//show 6 because today is Saturday

    var todayDate = date.getDate();
    console.log("Today Date is :" + todayDate);


    // Now we have to make 6 rows and 7 columns for perticular calender body and that will be fix for dates and containing 42 dates.7 Dates in each div.


    var dateData = " ";
    var number = 1;
    var nextMonth = false;

    for (i = 0; i <= 5; i++) {
        dateData += "<div class = 'calBodyWeek'>";
        // console.log("div"); //Create individual 6 div
        for (j = 0; j <= 6; j++) {
            if (i == 0 && j < firstDay) {
                // console.log(" ");
                dateData += `<div class = 'calBodyDays prevMonth'> ${prevDate - firstDay + 1 + j} </div>`;
                //Contains previous month's end dates by using this formula {prevDate - firstDay + 1 + j}
            } else {
                dateData += nextMonth ? `<div class = 'calBodyDays prevMonth'> ${number} </div>` : `<div class = 'calBodyDays'> ${number} </div>`;
                number++;
                //Contains current month dates
            }

            if ((number > endDate)) {
                var number = 1;
                nextMonth = true;
                //Contains next month date's
            }
        }
        dateData += "</div>";
        //Close the individual 6 divs with each iteration of first loop 


    }

    document.getElementsByClassName("calBody")[0].innerHTML = dateData;
    //Showing each div(calBodyWeek)[ each div store individual {7div(calBodyDays) which stores dates}] in calBody Div on UI with the help of dateData variable
}

function renderMonth(render) {
    //Function create for rendering purpose(showing previous and next month) when user click on <(&lt;), (&gt;)>

    if (render == 'prev') {
        date.setMonth(date.getMonth() - 1);
        //For Set Previous Month
        // document.getElementsByClassName("calBody")[0].style.color = "grey";

    } else if (render == 'next') {
        date.setMonth(date.getMonth() + 1);
        //For Set Next Month
        // document.getElementsByClassName("calBody")[0].style.color = "grey";

    }

    renderBody();
}


// ===============================================Jai Shree Radhey Krishna!===============================================

