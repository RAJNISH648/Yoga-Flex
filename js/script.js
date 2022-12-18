// toggle button 
$(".toggle").click(function(){
  $("ul").slideToggle();
});  


// navbar active 
var mynav = document.querySelectorAll(".navbar a");
mynav.forEach(li =>{
  li.addEventListener("click",()=> {
    resetLinks();
    li.classList.add("active");
  })
})
function resetLinks() {
  mynav.forEach(li => {
    li.classList.remove("active") 
  })
}






