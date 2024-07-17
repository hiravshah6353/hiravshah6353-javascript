const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const update_data_btn = document.querySelector("#update_data_btn");
const save_data_btn = document.querySelector("#save_data_btn");

form.addEventListener("submit", (event) => {


  let obj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  let items = JSON.parse(localStorage.getItem("user_data")) || [];
  items.push(obj);
  localStorage.setItem("user_data", JSON.stringify(items));
});

let items = JSON.parse(localStorage.getItem("user_data")) || [];

let html_arr = [];
items.forEach((data, index) => {
  html_arr.push(`
    <tr>
      <td>Username:${data.username}</td><br><br>
      <td>Email: ${data.email}</td><br><br>
      <td>Password: ${data.password}</td><br><br>

      <td><button id="data-${index}" onclick="update_data(${index})">Update</button></td>
      <td><button id="data-${index}" onclick="deleteUser(${index})">Delete</button></td>
    </tr><br><br>
  `);
});
document.querySelector(".show-data").innerHTML = html_arr.join("\n");

function deleteUser(index) {
  let items = JSON.parse(localStorage.getItem("user_data")) || [];
  items.splice(index, 1);
  localStorage.setItem("user_data", JSON.stringify(items));
  location.reload();
}

function update_data(index) {
  let items = JSON.parse(localStorage.getItem("user_data")) || [];

  let my_obj = items[index];
  username.value = my_obj["username"];
  email.value = my_obj["email"];
  password.value = my_obj["password"];

  save_data_btn.style.display = "none";
  update_data_btn.style.display = "inline";
  update_data_btn.setAttribute("name", index);
}

update_data_btn.addEventListener("click", (event) => {
  event.preventDefault();
  let index = Number(update_data_btn.name);
  console.log(index);
  let items = JSON.parse(localStorage.getItem("user_data")) || [];
  let my_obj = items[index];
  my_obj["username"] = username.value;
  my_obj["email"] = email.value;
  my_obj["password"] = password.value;
  items[index] = my_obj;
  localStorage.setItem("user_data", JSON.stringify(items));
  location.reload();
});