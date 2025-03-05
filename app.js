const $employeesWrapper = document.querySelector(".employees-wrapper");

console.log($employeesWrapper);

const employeData = {
  firstName: "data.name.first",
  lastName: "data.name.last",
  email: "john@gmail.com",
  picture: "./user.jpg",
  city: "Pantin",
};

fetch("https://randomuser.me/api/?results=12&inc=name,email,picture,location")
  .then(function (data) {
    console.log(data);
    const firstName = data.name.first;
    console.log(firstName);
  })
  .catch(function (err) {
    console.log("Error: " + err);
  });

function tableObjectAPI(data) {
  let employees = [];

  for (let i = 0; i < 12; i++) {
    employees.push(data);
  }

  return employees;
}

console.log(tableObjectAPI(employeData));

document.addEventListener("DOMContentLoaded", () => {
  employeesData.forEach((element) => {
    console.log(element);

    const $employeCard = document.createElement("div");
    $employeCard.classList.add("employe-card");
    $employeesWrapper.appendChild($employeCard);

    const $picture = document.createElement("img");
    $picture.classList.add("picture");
    $picture.src = element.picture;
    $employeCard.appendChild($picture);

    const $textCard = document.createElement("ul");
    $textCard.classList.add("text-card");
    $employeCard.appendChild($textCard);

    const $fullName = document.createElement("li");
    $fullName.classList.add("full-name");
    $textCard.appendChild($fullName);
    $fullName.textContent = `${element.firstName} ${element.lastName}`;

    const $email = document.createElement("li");
    $email.classList.add("email");
    $textCard.appendChild($email);
    $email.textContent = element.email;

    const $city = document.createElement("li");
    $city.classList.add("city");
    $textCard.appendChild($city);
    $city.textContent = element.city;
  });
});
