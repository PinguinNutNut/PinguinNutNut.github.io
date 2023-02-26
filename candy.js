gallery2 = document.getElementsByClassName("second_gallery")
gallery3 = document.getElementsByClassName("third_gallery") 
gallery1 = document.getElementsByClassName('first_gallery')
gallery4 = document.getElementsByClassName('fourth_gallery')

opa = 0
function show(){
    for(gallery of gallery2){
        gallery.style.opacity = opa
    }
    opa+=0.01
    console.log(opa)
}

function on_click (){
    opa=0
    // gallery1.style.backgroundColor = "#000000";

    setInterval(show,15)
    }

opa2 = 0
function show2(){
    for(i=0 ; i<4 ; i=i+1){
        gallery = gallery3[i]
        gallery.style.opacity = opa2
    }
    opa2+=0.01
    console.log(opa2)
}

function on_click2(){
    opa2=0   

    setInterval(show2,15)
}

function on_mouse (entry){
    for(gallery of entry){
        if(gallery.isIntersecting){
            gallery.target.classList.add('animation')
        }
    }  
}
observer = new IntersectionObserver(on_mouse);
for (block of gallery1) {
            observer.observe(block);
}

function on_color (entry){
    for(gallery of entry){
        if(gallery.isIntersecting){
            gallery.target.classList.add('color')
            // gallery.target.classList.add('color2')
        }
    } 
}
observer = new IntersectionObserver(on_color);
for (block of gallery4) {
            observer.observe(block);
}
