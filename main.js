let menuVisible = false;
//Efectos para el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Hide menu una vez que selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//JSON para los skills
function efectoSkills(){
    var skills = document.getElementById("skills");
    var lenght_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(lenght_skills >= 300){
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("photoshop");
        skills[3].classList.add("python");
        skills[4].classList.add("java");
        skills[5].classList.add("comunicacion");
        skills[6].classList.add("trabajo");
        skills[7].classList.add("creatividad");
        skills[8].classList.add("dedicacion");
        skills[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
