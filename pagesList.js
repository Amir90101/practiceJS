const pages = JSON.parse(localStorage.getItem("pages")) || []

const div = document.querySelector("div");

for(let i = 0; i< pages.length; i++){
    div.innerHTML+= `<p onclick="openPage(${i})">${pages[i].title}</p>`
}

const openPage = index=>{
    localStorage.setItem("currentPageHtml", pages[index].html);
    location.href= "page.html";
}