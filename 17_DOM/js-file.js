// your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

const p_container = document.querySelector("#container");
const p_content = document.createElement("p");
const p2_content = document.createElement("p");
const h3_content = document.createElement("h3");
const h1_content = document.createElement("h1"); 
const div2 = document.createElement("div");
const div2_container = document.querySelector("#div2");

p_content.textContent = "Am I doing this shit right? only time will tell.";
p_content.style = "color: red;";
//p_content.classList.add("paragraph");
h3_content.textContent = "I'm a blue h3";
h3_content.style = "color: blue;";

div2.classList.add("div2");
div2.style.border = "1px solid black";
div2.style.backgroundColor = "pink";

h1_content.textContent = "I'm in a div";
p2_content.textContent = "ME TOO!"

p_container.appendChild(p_content);
p_container.appendChild(h3_content);
p_container.appendChild(div2);
div2.appendChild(h1_content);
div2.appendChild(p2_content);