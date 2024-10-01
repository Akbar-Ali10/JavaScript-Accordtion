

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const tittle = item.querySelector(".accordion-tittle");
    const contant = item.querySelector(".accordion-contant");

    tittle.addEventListener('click', () => {
        for( var i = 0; i < accordionItems.length; i ++){
            if(accordionItems [i] != item){
               accordionItems[i].classList.remove('active');
            }else{
                item.classList.toggle('active');
            }
        }
        
    });
});

