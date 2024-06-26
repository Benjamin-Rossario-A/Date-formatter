const currentDateParagraph = document.getElementById("current-date"); //used to display the output to the user.
const dateOptionsSelectElement = document.getElementById("date-options"); //used to choose format of date.

const date = new Date();
//Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970
const day = date.getDate(); //used to get the current local date.
const month = date.getMonth() + 1;
//.getMonth() is used to get current month. since the index of Jan is 0, we have to add 1 to the result.
const year = date.getFullYear();
//The getFullYear() method of Date instances returns the year for this date according to local time.
const hours = date.getHours();
//The getHours() method of Date instances returns the hours for this date according to local time.
const minutes = date.getMinutes();
//The getMinutes() method of Date instances returns the minutes for this date according to local time.
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});
/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC*/
/*1) .getDate() --> returns the date b/w 1 and 31
2) .getMonth() --> returns a no. B/w 0 and 11
                          0 - Jan
                          11 - Dec
3) .getFullYear() --> returns a number which represents the year for the provided date.
4) .getHours() --> returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.*/
