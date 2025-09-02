// Mobile detection
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Initialize variables
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, pos5 = 0;
let pos6 = 0, pos7 = 0, pos8 = 0, pos9 = 0, pos10 = 0;

// Get all image elements
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
const img7 = document.querySelector('.img7');
const img8 = document.querySelector('.img8');
const img9 = document.querySelector('.img9');
const img10 = document.querySelector('.img10');

// Wheel event with mobile optimization
window.addEventListener('wheel', function(event) {
    if (isMobile) return; // Disable wheel animation on mobile
    
    const sensitivity = isMobile ? 5 : 30;
    
    if (event.deltaY > 0) {
        // Scroll down
        [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10] = 
        [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10].map(pos => {
            let newPos = pos + sensitivity;
            return newPos > 120 ? 120 : newPos;
        });
    } else {
        // Scroll up
        [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10] = 
        [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10].map(pos => {
            let newPos = pos - sensitivity;
            return newPos < -120 ? -120 : newPos;
        });
    }
    
    // Apply transformations
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const positions = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10];
    
    images.forEach((img, index) => {
        if (img) {
            img.style.transform = `translateX(${positions[index]}px)`;
        }
    });
});

// Slider functionality
const sliderLinks = [
    document.querySelector('.slider-link-1'),
    document.querySelector('.slider-link-2'),
    document.querySelector('.slider-link-3'),
    document.querySelector('.slider-link-4'),
    document.querySelector('.slider-link-5'),
    document.querySelector('.slider-link-6')
];

const sliders = [
    document.querySelector('.slider-1'),
    document.querySelector('.slider-2'),
    document.querySelector('.slider-3'),
    document.querySelector('.slider-4'),
    document.querySelector('.slider-5'),
    document.querySelector('.slider-6')
];

// Initialize slider
function initSlider() {
    // Hide all sliders except first
    sliders.forEach((slider, index) => {
        if (slider) {
            slider.style.display = index === 0 ? 'flex' : 'none';
        }
    });
    
    // Set active link
    sliderLinks.forEach((link, index) => {
        if (link) {
            link.style.borderBottom = index === 0 ? '4px solid black' : 'none';
            link.style.paddingBottom = '15px';
        }
    });
}

// Add click events to slider links
sliderLinks.forEach((link, index) => {
    if (link) {
        link.addEventListener('click', function() {
            // Hide all sliders
            sliders.forEach(slider => {
                if (slider) slider.style.display = 'none';
            });
            
            // Show selected slider
            if (sliders[index]) {
                sliders[index].style.display = 'flex';
            }
            
            // Update active link
            sliderLinks.forEach((l, i) => {
                if (l) {
                    l.style.borderBottom = i === index ? '4px solid black' : 'none';
                }
            });
        });
        
        // Add touch events for mobile
        if (isMobile) {
            link.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            
            link.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        }
    }
});

// Header scroll effect
const header = document.querySelector('.header');
const header_back = document.querySelector('.header-back');
const header_menu_client = document.querySelector('.header-menu-client');
const header_menu_auth = document.querySelector('.header-menu-auth');

window.addEventListener('scroll', function() {
    if (!header || !header_back) return;
    
    if (window.scrollY > 1000) {
        header.style.background = 'white';
        header_back.style.background = 'white';
        header.style.color = 'black';
        
        if (header_menu_client) {
            header_menu_client.style.border = '3px solid black';
        }
        
        if (header_menu_auth) {
            header_menu_auth.style.borderColor = 'black';
            header_menu_auth.style.backgroundColor = 'black';
            header_menu_auth.style.color = 'white';
        }
    } else {
        header.style.background = '#7F42E1';
        header_back.style.background = '#7F42E1';
        header.style.color = 'white';
        
        if (header_menu_client) {
            header_menu_client.style.border = '3px solid white';
        }
        
        if (header_menu_auth) {
            header_menu_auth.style.borderColor = 'white';
            header_menu_auth.style.backgroundColor = 'white';
            header_menu_auth.style.color = 'black';
        }
    }
});
const burger_btn2 = document.querySelector('.burger-btn2');

window.onscroll = function() {
    if (window.pageYOffset > 1000) {
        burger_btn2.style.display = 'flex';
    } else {
        burger_btn2.style.display = 'none';
    }
};

// Burger menu functionality
const burger_btn = document.querySelector('.burger-btn');
const cut = document.querySelector('.cut');
const burger = document.querySelector('.burger');
const crest_btn = document.querySelector('.crest-btn');

if (burger_btn && cut && burger && crest_btn) {
    burger_btn.addEventListener('click', function() {
        burger.style.display = 'block';
        cut.style.display = 'none';
        document.body.style.overflow = 'hidden';
    });
    
    crest_btn.addEventListener('click', function() {
        burger.style.display = 'none';
        cut.style.display = 'block';
        document.body.style.overflow = 'auto';
    });
}

// Burger slider functionality
let current_index = 0;

function move_slide(index) {
    const burger_slide = document.querySelector('.burger-slide');
    if (!burger_slide) return;
    
    if (index < 0) {
        current_index = 9;
    } else if (index >= 10) {
        current_index = 0;
    } else {
        current_index = index;
    }
    
    const offset = -(current_index * 287);
    burger_slide.style.transform = `translateX(${offset}px)`;
    
    // Update active button
    updateBurgerSliderButtons(current_index);
}

function updateBurgerSliderButtons(activeIndex) {
    for (let i = 1; i <= 10; i++) {
        const btn = document.querySelector(`.burger-slider-btn-${i}`);
        if (btn) {
            btn.style.border = i === (activeIndex + 1) ? '1px solid #000000ff' : '1px solid #e1e1e1';
        }
    }
}

// Add click events to burger slider buttons
for (let i = 1; i <= 10; i++) {
    const btn = document.querySelector(`.burger-slider-btn-${i}`);
    if (btn) {
        btn.addEventListener('click', function() {
            move_slide(i - 1);
        });
        
        // Add touch events for mobile
        if (isMobile) {
            btn.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            
            btn.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        }
    }
}

// Mobile optimization functions
function initMobileMenu() {
    if (window.innerWidth <= 768) {
        const menuItems = document.querySelectorAll('.header-menu-p, .slider-link, .burger-btn');
        
        menuItems.forEach(item => {
            item.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            
            item.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
}

function preventZoom() {
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initMobileMenu();
    
    if (isMobile) {
        preventZoom();
    }
    
    // Hide decorative images on mobile
    if (isMobile) {
        document.querySelectorAll('.img').forEach(img => {
            img.style.display = 'none';
        });
    }
    
    // Hide "Стать клиентом" button on mobile
    if (window.innerWidth <= 768) {
        const clientBtn = document.querySelector('.header-menu-client');
        if (clientBtn) {
            clientBtn.style.display = 'none';
        }
    }
});

// Resize handler
window.addEventListener('resize', function() {
    initMobileMenu();
    
    // Hide "Стать клиентом" button on mobile
    if (window.innerWidth <= 768) {
        const clientBtn = document.querySelector('.header-menu-client');
        if (clientBtn) {
            clientBtn.style.display = 'none';
        }
    } else {
        const clientBtn = document.querySelector('.header-menu-client');
        if (clientBtn) {
            clientBtn.style.display = 'block';
        }
    }
});