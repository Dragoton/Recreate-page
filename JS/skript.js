const url = "https://kea2020-346b.restdb.io/rest/testbase?max=36";

const options = {
  headers: {
    "x-apikey": "6140ba5343cedb6d1f97f111",
  },
};

//fetch
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    handleData(data);
  })
  .catch((e) => {
    console.error("Evo problem:", e.message);
  });

function handleData(foods) {
  foods.forEach((food) => {
    console.log(food);
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = food.name;
    clone.querySelector("img").src = food.image;
    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}
