
let sidebar = document.querySelector(".sidebarr");
let sidebarBTN = document.querySelector(".fa-bars");

sidebarBTN.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
})

$(document).ready(function () {
    // dropdown Sidebar
    $(".iconn-link").click(function () {
        // Toggle active class on the clicked link
        $(this).toggleClass("active");

        // Toggle display of the sub-menu using slideToggle for a smooth transition
        $(this).siblings(".sub-menuu").slideToggle("fast");

        // Toggle the rotation class for the angle-down icon
        $(this).find("span.fa-angle-down").toggleClass("rotate");

    });
});




// Drag In Drop
function allowDrop(even) {
    even.preventDefault();
}

function drag(even) {
    even.dataTransfer.setData("text", even.target.id);
}

function drop(even) {
    even.preventDefault();
    var fetchData = even.dataTransfer.getData("text");
    even.target.appendChild(document.getElementById(fetchData));
}

        
const images = document.querySelectorAll(".imagess img");
const gambar_modal = document.querySelector(".gambar_modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".tutup");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        gambar_modal.classList.add("appear");

        close.addEventListener("click", () => {
            gambar_modal.classList.remove("appear");
        });
    });
});


