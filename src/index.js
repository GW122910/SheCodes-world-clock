function updateTime() {
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTimeMoment = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTimeMoment.format("dddd Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTimeMoment.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  //HongKong
  let hongkongElement = document.querySelector("#hongkong");
  if (hongkongElement) {
    let hongkongDateElement = hongkongElement.querySelector(".date");
    let hongkongTimeElement = hongkongElement.querySelector(".time");
    let hongkongTimeMoment = moment().tz("Hongkong");
    hongkongDateElement.innerHTML =
      hongkongTimeMoment.format("dddd Do MMMM YYYY");
    hongkongTimeElement.innerHTML = hongkongTimeMoment.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
  //India
  let indiaElement = document.querySelector("#india");
  if (indiaElement) {
    let indiaDateElement = indiaElement.querySelector(".date");
    let indiaTimeElement = indiaElement.querySelector(".time");
    let indiaTimeMoment = moment().tz("Asia/Kolkata");
    indiaDateElement.innerHTML = indiaTimeMoment.format("dddd Do MMMM YYYY");
    indiaTimeElement.innerHTML = indiaTimeMoment.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTimeMoment = moment().tz(cityTimeZone);
  let citySelectUpdate = document.querySelector("#cities");

  citySelectUpdate.innerHTML = `
   <div class="place">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTimeMoment.format(
              "dddd Do MMMM YYYY"
            )}</div>
          </div>
          <div class="time">${cityTimeMoment.format(
            "HH:mm:ss"
          )}<small>${cityTimeMoment.format("A")}</small>
          </div>
        </div>

        <br />
        <a href="https://digitalworld-clock.netlify.app/">Return to main page</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
