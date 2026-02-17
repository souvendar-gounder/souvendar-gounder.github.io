function getLastPartOfURL(url) {
    return url.substring(url.lastIndexOf('/') + 1);
}

function currentMenu(){
    const url = window.location.href;
const lastPart = getLastPartOfURL(url).toLowerCase();
console.log(lastPart);

let navs = document.querySelectorAll('.nav-link');

navs.forEach(nav => {
    nav.classList.remove('active');
    if(lastPart==nav.id){
        nav.classList.add('active');
    }
});

}
currentMenu();

document.getElementById('hmb').addEventListener('click',function(){
    let element = document.getElementById("navigation");
    if (!element.classList.contains("show")) {
        element.classList.add("collapsing");
        element.classList.add("show");
        element.style.height = "763px";
    
        setTimeout(() => {
            element.style.height = ""; // Remove height styling
            element.classList.remove("collapsing");
        }, 500); // 1 millisecond delay
    } else {
        element.classList.remove("show");
    }
})

