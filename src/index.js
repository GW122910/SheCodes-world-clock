function updateTime() {
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTimeMoment = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTimeMoment.format("dddd Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTimeMoment.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //HongKong
  let hongkongElement = document.querySelector("#hongkong");
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongTimeMoment = moment().tz("Hongkong");
  hongkongDateElement.innerHTML =
    hongkongTimeMoment.format("dddd Do MMMM YYYY");
  hongkongTimeElement.innerHTML = hongkongTimeMoment.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //India
  let indiaElement = document.querySelector("#india");
  let indiaDateElement = indiaElement.querySelector(".date");
  let indiaTimeElement = indiaElement.querySelector(".time");
  let indiaTimeMoment = moment().tz("India");
  indiaDateElement.innerHTML = indiaTimeMoment.format("dddd Do MMMM YYYY");
  indiaTimeElement.innerHTML = indiaTimeMoment.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
