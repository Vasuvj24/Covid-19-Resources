const url = "https://covid-assist-server.herokuapp.com/data/add";

const submitForm = (event) => {
  event.preventDefault();

  var elements = document.getElementById("volunteers-data").elements;
  var obj = {};
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    if (item.name !== 'type' || item.checked) obj[item.name] = item.value;
  }

  console.log(obj);
  const data = {
    name: obj.name,
    age: obj.age,
    description: obj.description,
    type: obj.type,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
};
