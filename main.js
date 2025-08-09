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
            pos1+=30
            pos2+=30
            pos3+=30
            pos4+=30
            pos5+=30
            pos6+=30
            pos7+=30
            pos8+=30
            pos9+=30
            pos10+=30
            if(pos1 > 120){
                pos1 =120
            }
            if(pos2 > 120){
                pos2 =120
            }
            if(pos3 > 120){
                pos3 =120
            }
            if(pos4 > 120){
                pos4 =120
            }
            if(pos5 > 120){
                pos5 =120
            }
            if(pos6 > 120){
                pos6 =120
            }
            if(pos7 > 120){
                pos7 =120
            }
            if(pos8 > 120){
                pos8 =120
            }
            if(pos9 > 120){
                pos9 =120
            }
            if(pos10 > 120){
                pos10 =120
            }
        }
        else{
            pos1-=30
            if(pos1 < -120){
                pos1 =-120
            }
            pos2-=30
            if(pos2 < -120){
                pos2 =-120
            }
            pos3-=30
            if(pos3 < -120){
                pos3 =-120
            }
            pos4-=30
            if(pos4 < -120){
                pos4 =-120
            }
            pos5-=30
            if(pos5 < -120){
                pos5 =-120
            }
            pos6-=30
            if(pos6 < -120){
                pos6 =-120
            }
            pos7-=30
            if(pos7 < -120){
                pos7 =-120
            }
            pos8-=30
            if(pos8 < -120){
                pos8 =-120
            }
            pos9-=30
            if(pos9 < -120){
                pos9 =-120
            }
            pos10-=30
            if(pos10 < -120){
                pos10 =-120
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
    slider_1.style.display='flex'
    slider_2.style.display='none'
    slider_3.style.display='none'
    slider_4.style.display='none'
    slider_5.style.display='none'
    slider_6.style.display='none'
    slider_link_1.style.borderBottom='4px solid black'
    slider_link_2.style.borderBottom='none'
    slider_link_3.style.borderBottom='none'
    slider_link_4.style.borderBottom='none'
    slider_link_5.style.borderBottom='none'
    slider_link_6.style.borderBottom='none'

})
slider_link_2.addEventListener('click', function(){
    slider_1.style.display='none'
    slider_2.style.display='flex'
    slider_3.style.display='none'
    slider_4.style.display='none'
    slider_5.style.display='none'
    slider_6.style.display='none'
    slider_link_1.style.borderBottom='none'
    slider_link_2.style.borderBottom='4px solid black'
    slider_link_3.style.borderBottom='none'
    slider_link_4.style.borderBottom='none'
    slider_link_5.style.borderBottom='none'
    slider_link_6.style.borderBottom='none'
})

slider_link_3.addEventListener('click', function(){
    slider_1.style.display='none'
    slider_2.style.display='none'
    slider_3.style.display='flex'
    slider_4.style.display='none'
    slider_5.style.display='none'
    slider_6.style.display='none'
    slider_link_1.style.borderBottom='none'
    slider_link_3.style.borderBottom='4px solid black'
    slider_link_2.style.borderBottom='none'
    slider_link_4.style.borderBottom='none'
    slider_link_5.style.borderBottom='none'
    slider_link_6.style.borderBottom='none'
})

slider_link_4.addEventListener('click', function(){
    slider_1.style.display='none'
    slider_2.style.display='none'
    slider_3.style.display='none'
    slider_4.style.display='flex'
    slider_5.style.display='none'
    slider_6.style.display='none'
    slider_link_1.style.borderBottom='none'
    slider_link_4.style.borderBottom='4px solid black'
    slider_link_2.style.borderBottom='none'
    slider_link_3.style.borderBottom='none'
    slider_link_5.style.borderBottom='none'
    slider_link_6.style.borderBottom='none'
})

slider_link_5.addEventListener('click', function(){
    slider_1.style.display='none'
    slider_2.style.display='none'
    slider_3.style.display='none'
    slider_4.style.display='none'
    slider_5.style.display='flex'
    slider_6.style.display='none'
    slider_link_1.style.borderBottom='none'
    slider_link_5.style.borderBottom='4px solid black'
    slider_link_2.style.borderBottom='none'
    slider_link_4.style.borderBottom='none'
    slider_link_3.style.borderBottom='none'
    slider_link_6.style.borderBottom='none'
})

slider_link_6.addEventListener('click', function(){
    slider_1.style.display='none'
    slider_2.style.display='none'
    slider_3.style.display='none'
    slider_4.style.display='none'
    slider_5.style.display='none'
    slider_6.style.display='flex'
    slider_link_1.style.borderBottom='none'
    slider_link_6.style.borderBottom='4px solid black'
    slider_link_2.style.borderBottom='none'
    slider_link_3.style.borderBottom='none'
    slider_link_5.style.borderBottom='none'
    slider_link_4.style.borderBottom='none'
})

let header = document.querySelector('.header')
let header_back = document.querySelector('.header-back')
let header_menu_client = document.querySelector('.header-menu-client')
let header_menu_auth = document.querySelector('.header-menu-auth')

window.addEventListener('scroll', function(){
    if(window.scrollY>1000){
        header.style.background='white'
        header_back.style.background='white'
        header.style.color='black'
        header_menu_client.style.border='3px solid black'
        header_menu_auth.style.borderColor='black'
        header_menu_auth.style.backgroundColor='black'
        header_menu_auth.style.color='white'
    }
    else{
        header.style.background='#7F42E1'
        header_back.style.background='#7F42E1'
        header.style.color='white'
        header_menu_client.style.border='3px solid white'
        header_menu_auth.style.borderColor='white'
        header_menu_auth.style.backgroundColor='white'
        header_menu_auth.style.color='black'
    }
})

let burger_btn = document.querySelector('.burger-btn')
let cut = document.querySelector('.cut')
let burger = document.querySelector('.burger')
let crest_btn = document.querySelector('.crest-btn')
burger_btn.addEventListener('click', function(){
    burger.style.display='block'
    cut.style.display='none'
})
crest_btn.addEventListener('click', function(){
    burger.style.display='none'
    cut.style.display='block'
})


let current_index = 0

function move_slide(index){
    let burger_slide = document.querySelector('.burger-slide')
    if(index < 0){
        current_index=9
    }
    else if(index >= 10){
        current_index=0
    }
    else{
        current_index=index
    }
    let offset=-(current_index*287)
    burger_slide.style.transform=`translateX(${offset}px)`
}

let burger_slider_btn_1 = document.querySelector('.burger-slider-btn-1')
let burger_slider_btn_2 = document.querySelector('.burger-slider-btn-2')
let burger_slider_btn_3 = document.querySelector('.burger-slider-btn-3')
let burger_slider_btn_4 = document.querySelector('.burger-slider-btn-4')
let burger_slider_btn_5 = document.querySelector('.burger-slider-btn-5')
let burger_slider_btn_6 = document.querySelector('.burger-slider-btn-6')
let burger_slider_btn_7 = document.querySelector('.burger-slider-btn-7')
let burger_slider_btn_8 = document.querySelector('.burger-slider-btn-8')
let burger_slider_btn_9 = document.querySelector('.burger-slider-btn-9')
let burger_slider_btn_10 = document.querySelector('.burger-slider-btn-10')

burger_slider_btn_1.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #000000ff'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_2.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #000000ff'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_3.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #000000ff'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_4.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #000000ff'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_5.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #000000ff'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_6.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #000000ff'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_7.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #000000ff'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_8.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #000000ff'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_9.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #000000ff'
    burger_slider_btn_10.style.border='1px solid #e1e1e1'
})

burger_slider_btn_10.addEventListener('click', function(){
    burger_slider_btn_1.style.border='1px solid #e1e1e1'
    burger_slider_btn_2.style.border='1px solid #e1e1e1'
    burger_slider_btn_3.style.border='1px solid #e1e1e1'
    burger_slider_btn_4.style.border='1px solid #e1e1e1'
    burger_slider_btn_5.style.border='1px solid #e1e1e1'
    burger_slider_btn_6.style.border='1px solid #e1e1e1'
    burger_slider_btn_7.style.border='1px solid #e1e1e1'
    burger_slider_btn_8.style.border='1px solid #e1e1e1'
    burger_slider_btn_9.style.border='1px solid #e1e1e1'
    burger_slider_btn_10.style.border='1px solid #000000ff'
})