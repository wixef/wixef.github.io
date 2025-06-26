let pos1 = 0
let img1 = document.querySelector('.img1')
let pos2 = 0
let img2 = document.querySelector('.img2')
let pos3 = 0
let img3 = document.querySelector('.img3')
let pos4 = 0
let img4 = document.querySelector('.img4')
let pos5 = 0
let img5 = document.querySelector('.img5')
let pos6 = 0
let img6 = document.querySelector('.img6')
let pos7 = 0
let img7 = document.querySelector('.img7')
let pos8 = 0
let img8 = document.querySelector('.img8')
let pos9 = 0
let img9 = document.querySelector('.img9')
let pos10 = 0
let img10 = document.querySelector('.img10')
window.addEventListener('wheel', function(event){
        if(event.deltaY>0){
            pos1+=50
            pos2+=50
            pos3+=50
            pos4+=50
            pos5+=50
            pos6+=50
            pos7+=50
            pos8+=50
            pos9+=50
            pos10+=50
            if(pos1 > 300){
                pos1 =300
            }
            if(pos2 > 300){
                pos2 =300
            }
            if(pos3 > 150){
                pos3 =150
            }
            if(pos4 > 300){
                pos4 =300
            }
            if(pos5 > 300){
                pos5 =300
            }
            if(pos6 > 300){
                pos6 =300
            }
            if(pos7 > 300){
                pos7 =300
            }
            if(pos8 > 300){
                pos8 =300
            }
            if(pos9 > 300){
                pos9 =300
            }
            if(pos10 > 300){
                pos10 =300
            }
        }
        else{
            pos1-=50
            if(pos1 < -150){
                pos1 =-150
            }
            pos2-=50
            if(pos2 < -150){
                pos2 =-150
            }
            pos3-=50
            if(pos3 < -150){
                pos3 =-150
            }
            pos4-=50
            if(pos4 < -100){
                pos4 =-100
            }
            pos5-=50
            if(pos5 < -150){
                pos5 =-150
            }
            pos6-=50
            if(pos6 < -150){
                pos6 =-150
            }
            pos7-=50
            if(pos7 < -150){
                pos7 =-150
            }
            pos8-=50
            if(pos8 < -150){
                pos8 =-150
            }
            pos9-=50
            if(pos9 < -150){
                pos9 =-150
            }
            pos10-=50
            if(pos10 < -150){
                pos10 =-150
            }
        }
    img1.style.transform = `translateX(${pos1}px)`
    img2.style.transform = `translateX(${pos2}px)`
    img3.style.transform = `translateX(${pos3}px)`
    img4.style.transform = `translateX(${pos4}px)`
    img5.style.transform = `translateX(${pos5}px)`
    img6.style.transform = `translateX(${pos6}px)`
    img7.style.transform = `translateX(${pos7}px)`
    img8.style.transform = `translateX(${pos8}px)`
    img9.style.transform = `translateX(${pos9}px)`
    img10.style.transform = `translateX(${pos10}px)`
})

let slider_link_1 = document.querySelector('.slider-link-1')
let slider_link_2 = document.querySelector('.slider-link-2')
let slider_link_3 = document.querySelector('.slider-link-3')
let slider_link_4 = document.querySelector('.slider-link-4')
let slider_link_5 = document.querySelector('.slider-link-5')
let slider_link_6 = document.querySelector('.slider-link-6')
let slider_1 = document.querySelector('.slider-1')
let slider_2 = document.querySelector('.slider-2')
let slider_3 = document.querySelector('.slider-3')
let slider_4 = document.querySelector('.slider-4')
let slider_5 = document.querySelector('.slider-5')
let slider_6 = document.querySelector('.slider-6')
slider_link_1.addEventListener('click', function(){
    slider_1.style.display='block'
    slider_2.style.display='none'
    slider_3.style.display='none'
    slider_4.style.display='none'
    slider_5.style.display='none'
    slider_6.style.display='none'
        slider_link_1.style.borderBottom='block'
})
slider_link_2.addEventListener('click', function(){
    slider_1.style.display='none'
    slider_2.style.display='block'
    slider_3.style.display='none'
    slider_4.style.display='none'
    slider_5.style.display='none'
    slider_6.style.display='none'
    slider_link_1.style.borderBottom='none'
})