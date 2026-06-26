items = [];

document.addEventListener("product-submit", (event) => {
  const item = event.detail;
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
});

const user = {
  username: "jleal007",
  password: "112233dfg"
}

const httpClient = fetch(`${URL_BASE}/user.json`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});

const res = httpClient.then(data => data.json());
res.then(data => console.log).catch(err => console.log)

