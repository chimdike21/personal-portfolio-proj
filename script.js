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