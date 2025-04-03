// Toggle Menu Mobile 
document.querySelector('.menu-toggle').addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('active');
})

//Toggle Tema
function toggleTheme(){
    document.body.classList.toggle('dark-theme');
}