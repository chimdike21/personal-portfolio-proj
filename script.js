document.addEventListener("DOMContentLoaded", function(){
    const skillLogo = document.querySelector(".skill-logo");

    const observer= new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                skillLogo.classList.add('visible');
                observer.unobserve(skillLogo)
            } 
        })
    })
    observer.observe(skillLogo);
})

document.addEventListener("DOMContentLoaded", function(){
    const h1Element= document.querySelector("#contact h1");
    function checkVisibility(){
        const rect= h1Element.getBoundingClientRect();
        const windowHeight= window.innerHeight;

        if(rect.top <= windowHeight && rect.bottom >= 0){
            h1Element.classList.add("visible"); //adds the visible class
            
        } else {
            h1Element.classList.remove("visible")
        }
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility()
})