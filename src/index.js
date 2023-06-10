//Stockholm
setInterval(function () {
  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  let stockholmTime = moment.tz("Europe/Stockholm");

  stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
  stockholmTimeElement.innerHTML = stockholmTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

//Los Angeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment.tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

//Auckland
setInterval(function () {
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");

  let aucklandTime = moment.tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

// Dropdown

function updatePlaceholder(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let placeholderElement = document.querySelector("#placeholder");
  placeholderElement.innerHTML = `
  <div class="city">
        <div class="left">
          <h2>${cityName}</h2>
          <div class="date"></div>
        </div>
        <div class="time"></div>
    </div>
    <div class="hr"></div>
        `;
  setInterval(function () {
    let cityTimezone = event.target.value;
    let cityTime = moment().tz(cityTimezone);
    let placeholderElement = document.querySelector("#placeholder");
    let placeholderDateElement = placeholderElement.querySelector(".date");
    let placeholderTimeElement = placeholderElement.querySelector(".time");

    placeholderDateElement.innerHTML = cityTime.format("MMMM Do YYYY");
    placeholderTimeElement.innerHTML = cityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }, 1000);
}

let selectElement = document.querySelector("#city-dropdown");
selectElement.addEventListener("change", updatePlaceholder);
