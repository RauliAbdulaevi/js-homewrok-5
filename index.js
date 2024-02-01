let div1 = document.querySelector("#div1");
let html = `<div class="wrapper"> 
<img src="https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image">
<h2 class="title">image title</h2>
</div>`;
div1.insertAdjacentHTML("afterbegin", html);

let title = div1.querySelector(".title");
title.style.color = "red";
title.style.fontSize = "30px";

let img = div1.querySelector(".wrapper > img")
img.style.width = "700px"

let div2 = document.querySelectorAll(".div2");
let html2 = `<p class=“text”> hello </p>`
div2.forEach((obj)=>{
obj.insertAdjacentHTML("afterbegin" ,html2)
})

let aTag = document.createElement('a')
let box = document.querySelector(".box")
aTag.textContent = "google link"
aTag.setAttribute("href","https://google.com")
aTag.setAttribute("target", "_blank")
aTag.classList.add("link");
aTag.classList.replace("link", "newclass")
box.insertAdjacentElement("afterbegin", aTag);
