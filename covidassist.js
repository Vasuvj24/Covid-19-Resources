var i = 0;
function qsa(selector) {
  // we can input query selector here and input the class
  return document.querySelectorAll(selector);
}
function id(id) {
  return document.getElementById(id);
}
console.log(menu1);
id("menu1").addEventListener("click", function () {
  id("sidebar1").style.left = "0";
  id("overlay").style.backgroundColor = "rgba(0,0,0,0.6)";
  // id("sidebar1").style.backgroundcp;/
  // id("main").style.filter="blur(5px)";
  // id("sidebar1").style.filter="blur(0px)";
});
// console.log(foodbtn1);
id("foodbtn1").addEventListener("click", function () {
  console.log("foodbtn1");
  console.log(i);
  i++;
  if (i % 2 !== 0) {
    id("food1").style.display = "block";
    console.log(i + "display is block");
    // id("sidebar1").style.left="-20vw";
    console.log("value of i is " + i);
  } else {
    id("food1").style.display = "none";
    console.log(i + "display is none");
  }
});
id("bedsbtn1").addEventListener("click", function () {
  i++;
  if (i % 2 != 0) {
    console.log(i);
    id("beds1").style.display = "block";
  } else {
    console.log(i);
    id("beds1").style.display = "none";
  }
});
id("injectionbtn1").addEventListener("click", function () {
  i++;
  if (i % 2 != 0) {
    console.log(i);
    id("injection1").style.display = "block";
  } else {
    console.log(i);
    id("injection1").style.display = "none";
  }
});
id("closingsidebar").addEventListener("click", function () {
  id("sidebar1").style.left = "-20vw";
  id("overlay").style.backgroundColor = "rgba(0,0,0,0)";
});

let query = window.matchMedia('(max-width: 600px)');
if (query.matches) {
  var i = 0;
  function qsa(selector) {
    // we can input query selector here and input the class
    return document.querySelectorAll(selector);
  }
  function id(id) {
    return document.getElementById(id);
  }
  id("menu1").addEventListener("click", function () {
    id("sidebar1").style.left = "0";
    // id("overlay").style.filter="blur(10px)"
    // id("main").style.filter="blur(5px)";
  });
  id("closingsidebar").addEventListener("click", function () {
    id("sidebar1").style.left = "-50vw";
  });
  console.log(foodbtn1);
  id("foodbtn1").addEventListener("click", function () {
    // i++;
    if (i % 2 != 0) {
      console.log(i);
      id("food1").style.display = "block";
      // id("sidebar1").style.left="-20vw";
    } else {
      console.log(i);
      id("food1").style.display = "none";
    }
  });
  id("bedsbtn1").addEventListener("click", function () {
    // i++;
    if (i % 2 != 0) {
      console.log(i);
      id("beds1").style.display = "block";
    } else {
      console.log(i);
      id("beds1").style.display = "none";
    }
  });
  id("injectionbtn1").addEventListener("click", function () {
    // i++;
    if (i % 2 != 0) {
      console.log(i);
      id("injection1").style.display = "block";
    } else {
      console.log(i);
      id("injection1").style.display = "none";
    }
  });
}
