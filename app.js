const $employeesWrapper = document.querySelector(".employees-wrapper");
const $employeesDetails = document.querySelector(".employees-details");

console.log($employeesWrapper);

let employees;

fetch(
  "https://randomuser.me/api/?results=12&inc=name,email,picture,location,id&nat=FR"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    employees = data.results;

    console.log(employees);

    employees.forEach((element) => {
      console.log(element);

      const $employeCard = document.createElement("div");
      $employeCard.classList.add("employe-card");
      $employeesWrapper.appendChild($employeCard);

      const $picture = document.createElement("img");
      $picture.classList.add("picture");
      $picture.src = element.picture.large;
      $employeCard.appendChild($picture);

      const $textCard = document.createElement("ul");
      $textCard.classList.add("text-card");
      $employeCard.appendChild($textCard);

      const $fullName = document.createElement("li");
      $fullName.classList.add("full-name");
      $textCard.appendChild($fullName);
      $fullName.textContent = `${element.name.first} ${element.name.last}`;

      const $email = document.createElement("li");
      $email.classList.add("email");
      $textCard.appendChild($email);
      $email.textContent = element.email;

      const $city = document.createElement("li");
      $city.classList.add("city");
      $textCard.appendChild($city);
      $city.textContent = element.location.city;

      $employeCard.addEventListener("click", function (e) {
        $employeesWrapper.classList.add("hidden");
        $employeesDetails.classList.remove("hidden");
      });
    });
  })
  .catch(function (err) {
    console.log("Error: " + err);
  });
