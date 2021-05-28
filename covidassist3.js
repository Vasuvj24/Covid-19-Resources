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
id("closingsidebar").addEventListener("click", function () {
  id("sidebar1").style.left = "-20vw";
  id("overlay").style.backgroundColor = "rgba(0,0,0,0)";
});

id("scrolltotop1").addEventListener("click", () => {
  console.log("scrolltotop");
  let btnscrolltotop = qsa("scrolltotop");
  window.scrollTo({
    top: 0,
    left: 0,
    behaviour: "smooth",
  });
});
id("tweets1").addEventListener("click", () => {
  console.log("clicked");
  id("tweets1").style.borderBottom = "5px solid darkcyan";
  id("personaldata1").style.borderBottom = "none";
});
id("personaldata1").addEventListener("click", () => {
  id("personaldata1").style.borderBottom = "5px solid darkcyan";
  id("tweets1").style.borderBottom = "none";
});
let query = window.matchMedia('(max-width: 600px)'); // & '(max-height: 823px)'
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
    console.log("inside closing sidebar")
    id("sidebar1").style.left = "-50vw";
  });
  console.log(foodbtn1);
  id("foodbtn1").addEventListener("click", function () {
    i++;
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
}
// var loader = document.querySelectorAll("loading");
window.addEventListener("load", () => {
  document.querySelector(".loading").classList.add("disappear");
});
// const data=0;
const getTweets = async () => {
  const response = await fetch(url, {
    headers: {
      mode: "no-cors",
    },
  });
  
  // const data = response.data;
  data = await response.json();
  const parent = document.querySelector(".displayinformation");

  if (data.error || data.length==0) {
    parent.innerHTML = ' NO DATA AVAILABLE';
    parent.style.textAlign = "center";
    return;
  }

  console.log(data);

  
  parent.innerHTML = '';
  data.map((tweet) => {
    const div = document.createElement("div");
    div.className = "tweet";
    const contactdetails = document.createElement("div");
    contactdetails.className = "contactdetails";
    div.appendChild(contactdetails);
    const detailsdisplay = document.createElement("a");
    detailsdisplay.className = "detailsdisplay";
    const sharinginfo = document.createElement("div");
    sharinginfo.className = "sharinginfo";
    detailsdisplay.innerHTML = "View Details";
    detailsdisplay.style.textDecoration="none"
    detailsdisplay.href="https://twitter.com/i/web/status/" + tweet.id;
    contactdetails.appendChild(detailsdisplay); // view details popup
    contactdetails.appendChild(sharinginfo); //whatsapp and insta image
    const tweetinfo = document.createElement("div");
    const subtweetname = document.createElement("div");
    subtweetname.className = "subtweetname";
    subtweetname.innerHTML = tweet.authorName;
    div.appendChild(subtweetname);
    div.appendChild(tweetinfo);
    tweetinfo.className = "tweetinfo";
    tweetinfo.innerHTML = tweet.text;
    console.log("hello");
    const aofsharing = document.createElement("a");
    const aofsharing1 = document.createElement("a");
    const sharinginfo1 = document.createElement("i");
    sharinginfo1.className = "fab fa-whatsapp-square fa-2x";
    sharinginfo1.style.margin = "1vw";
    sharinginfo1.style.transition = "all 0.3s ease-in-out";
    sharinginfo1.style.color = "black";
    sharinginfo1.addEventListener("mouseover", () => {
      sharinginfo1.style.boxShadow = "0 0 10px cyan";
    });
    sharinginfo1.addEventListener("mouseout", () => {
      sharinginfo1.style.boxShadow = "none";
    });
    aofsharing.appendChild(sharinginfo1);
    aofsharing.href = "https://www.whatsapp.com/";
    sharinginfo.appendChild(aofsharing);
    const sharinginfo2 = document.createElement("i");
    sharinginfo2.className = "fas fa-envelope-square fa-2x";
    sharinginfo2.style.margin = "1vw";
    sharinginfo2.style.transition = "all 0.3s ease-in-out";
    sharinginfo2.addEventListener("mouseover", () => {
      sharinginfo2.style.boxShadow = "0 0 10px cyan";
    });
    sharinginfo2.addEventListener("mouseout", () => {
      sharinginfo2.style.boxShadow = "none";
    });
    sharinginfo2.style.color = "black";
    aofsharing1.appendChild(sharinginfo2);
    aofsharing1.href = "https://www.facebook.com/";
    sharinginfo.appendChild(aofsharing1);
    div.appendChild(contactdetails);
    parent.appendChild(div);
  });
};

const getleads = async () => {
  const response = await fetch(url2, {
    headers: {
      mode: "no-cors",
    },
  });
  // const data = response.data;
  
  data = await response.json();

  const parent = document.querySelector(".displayinformation");
  if (data.error || data.length==0) {
    parent.innerHTML = ' NO DATA AVAILABLE';
    parent.style.textAlign = "center";
    return
  } 
  // console.log(data);

  parent.innerHTML = '';
  data.map((tweet) => {
    const div = document.createElement("div");
    div.className = "tweet";
    const contactdetails = document.createElement("div");
    contactdetails.className = "contactdetails";
    div.appendChild(contactdetails);
    // const detailsdisplay = document.createElement("a");
    // detailsdisplay.className = "detailsdisplay";
    const sharinginfo = document.createElement("div");
    sharinginfo.className = "sharinginfo";
    // detailsdisplay.innerHTML = "View Details";
    // detailsdisplay.style.textDecoration="none"
    // detailsdisplay.href="https://twitter.com/i/web/status/" + tweet.id;
    // contactdetails.appendChild(detailsdisplay); // view details popup
    contactdetails.appendChild(sharinginfo); //whatsapp and insta image
    const tweetinfo = document.createElement("div");
    const subtweetname = document.createElement("div");
    subtweetname.className = "subtweetname";
    subtweetname.innerHTML = tweet.name;
    div.appendChild(subtweetname);
    div.appendChild(tweetinfo);
    tweetinfo.className = "tweetinfo";
    tweetinfo.innerHTML = tweet.description;
    console.log("hello");
    const aofsharing = document.createElement("a");
    const aofsharing1 = document.createElement("a");
    const sharinginfo1 = document.createElement("i");
    sharinginfo1.className = "fab fa-whatsapp-square fa-2x";
    sharinginfo1.style.margin = "1vw";
    sharinginfo1.style.transition = "all 0.3s ease-in-out";
    sharinginfo1.style.color = "black";
    sharinginfo1.addEventListener("mouseover", () => {
      sharinginfo1.style.boxShadow = "0 0 10px cyan";
    });
    sharinginfo1.addEventListener("mouseout", () => {
      sharinginfo1.style.boxShadow = "none";
    });
    aofsharing.appendChild(sharinginfo1);
    aofsharing.href = "https://www.whatsapp.com/";
    sharinginfo.appendChild(aofsharing);
    const sharinginfo2 = document.createElement("i");
    sharinginfo2.className = "fas fa-envelope-square fa-2x";
    sharinginfo2.style.margin = "1vw";
    sharinginfo2.style.transition = "all 0.3s ease-in-out";
    sharinginfo2.addEventListener("mouseover", () => {
      sharinginfo2.style.boxShadow = "0 0 10px cyan";
    });
    sharinginfo2.addEventListener("mouseout", () => {
      sharinginfo2.style.boxShadow = "none";
    });
    sharinginfo2.style.color = "black";
    aofsharing1.appendChild(sharinginfo2);
    aofsharing1.href = "https://www.facebook.com/";
    sharinginfo.appendChild(aofsharing1);
    div.appendChild(contactdetails);
    parent.appendChild(div);
  });

  
};

getTweets();
id("tweets1").addEventListener("click",()=>{getTweets();})

id("personaldata1").addEventListener("click",()=>{
  console.log("personaldata1 clicked")
  console.log("inside leads");
  getleads();
})
