function displayTimeDate() {
  //Los Angeles
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  let losAngelesDateElement = document.querySelector("#los-angeles-date");

  if (losAngelesTimeElement) {
    losAngelesTimeElement.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  if (losAngelesDateElement) {
    losAngelesDateElement.innerHTML = moment
      .tz("America/Los_Angeles")
      .format("dddd, MMMM D, YYYY ");
  }

  //Sofia
  let sofiaTimeElement = document.querySelector("#sofia-time");
  let sofiaDateElement = document.querySelector("#sofia-date");
  if (sofiaTimeElement) {
    sofiaTimeElement.innerHTML = moment
      .tz("Europe/Sofia")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  if (sofiaDateElement) {
    sofiaDateElement.innerHTML = moment
      .tz("Europe/Sofia")
      .format("dddd, MMMM D, YYYY ");
  }

  //Jakarta
  let jakartaTimeElement = document.querySelector("#jakarta-time");
  let jakartaDateElement = document.querySelector("#jakarta-date");
  if (jakartaTimeElement) {
    jakartaTimeElement.innerHTML = moment
      .tz("Asia/Jakarta")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  if (jakartaDateElement) {
    jakartaDateElement.innerHTML = moment
      .tz("Asia/Jakarta")
      .format("dddd, MMMM D, YYYY");
  }
}
displayTimeDate();
setInterval(displayTimeDate, 1000);

function changeCity(event) {
  if (event.target.value.length > 0) {
    let timezone = event.target.value;
    if (event.target.value === "current") {
      timezone = moment.tz.guess();
    }
    let newCityElement = document.querySelector(".city-wrap");
    let cityName = timezone.replace("_", " ").split("/")[1];
    let time = moment.tz(timezone).format("h:mm:ss [<small>]A[</small>]");
    let date = moment.tz(timezone).format("dddd, MMMM D, YYYY");
    newCityElement.innerHTML = `<div class="new-time-date-container">
  <div class="new-time-date-flex">
    <div>
      <h2 class="new-city-name">${cityName}</h2>

      <div class="new-date">${date}</div>
    </div>
    <div class="new-time">${time}</div>
  </div>
  <div  class="back-link">
  <a href="/">Back to all cities</a>
  </div>
</div>`;
  }
}

let changeCityElement = document.querySelector("#cities");
changeCityElement.addEventListener("change", changeCity);
