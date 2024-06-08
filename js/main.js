window.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".preload").style.display = "none";
})

// effect letter of title
let titleEffect = document.getElementById("hello");
let text = "i'm a web develober";
let i = 0;

titleEffect = setInterval(function(){
    document.getElementById("hello").textContent += text[i];
    i++;
    if (i > text.length){
        i = 0; 
        document.getElementById("hello").textContent = "hello, "; 
    } 
}, 150);


// effect animation of img
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.introduction-text .image img').classList.add('show');
    }, 1000); 
});

// x.classList.add("remove");

let iconList = document.querySelector(".list");
let ul = document.querySelector(".links");
let x = document.querySelector(".x");

iconList.addEventListener("click", function(){
    document.querySelector(".links").style.left = "0";
    document.querySelector(".logo").style.zIndex = "2";
    x.style.display ="block";
    x.style.zIndex = "2";
    iconList.style.display = "none";
});

// click on x
x.addEventListener("click", function(){
    document.querySelector(".links").style.left = "-100%";
    x.style.display = "none";
    iconList.style.display = "block";
});


// Variables for random background
let intervalBackground;
let startBackground = true;

// Retrieve saved background preference from local storage
let savedBackground = localStorage.getItem("background-option");

if (savedBackground !== null){
    // Set startBackground based on saved preference
    startBackground = savedBackground === 'true';
    
    // Remove active class from all spans
    document.querySelectorAll(".random-background span").forEach((e) => {
        e.classList.remove("active");
    });
    
    // Add active class to the appropriate span based on the saved preference
    if (startBackground){
        document.querySelector(".random-background .yes").classList.add("active");
    } else{
        document.querySelector(".random-background .no").classList.add("active");
    }
}



// Function to change the URL background image
function changeBackground() {
    let randomNumber = Math.floor(Math.random() * imagesArray.length);
    landingPage.style.backgroundImage = `url("img/${imagesArray[randomNumber]}")`;
}

// Function to start or stop the background based on the startBackground variable
function controlBackground() {
    if (startBackground) {
        intervalBackground = setInterval(changeBackground, 10000);
    } else {
        clearInterval(intervalBackground);
    }
}

// Change the background based on user's choice
let randomSpan = document.querySelectorAll(".random-background span");
randomSpan.forEach((span) => {
    span.addEventListener("click", function(e) {
        e.target.parentElement.querySelectorAll(".active").forEach((el) => {
            el.classList.remove("active");
        });
        e.target.classList.add("active");

        // Update startBackground based on user's choice
        startBackground = e.target.dataset.content === "yes";

        // Save the preference to local storage
        localStorage.setItem("background-option", startBackground);
        
        // Control background based on user's choice
        controlBackground();
    });
});

// Change the URL background image when the page loads
let landingPage = document.querySelector(".landing-page");
let imagesArray = ["wallpaperflare.com_wallpaper (2).jpg", "wallpaperflare.com_wallpaper (5).jpg",
"wallpaperflare.com_wallpaper (6).jpg", "wallpaperflare.com_wallpaper (9).jpg", 
"wallpaperflare.com_wallpaper (3).jpg", "wallpaperflare.com_wallpaper (1).jpg"
];

// Control background based on startBackground when the page loads
controlBackground();


// settings box 
let settingsBox = document.querySelector(".settings-box");
let settingGear = document.querySelector(".setting");

settingGear.addEventListener("click", function(){
    settingGear.classList.toggle("fa-spin")
    settingsBox.classList.toggle("open");
});

// set color in loacl storage 
let colorImage = document.getElementById("image");
let robotImage = document.getElementById("robot");

let loaclStorgeOfColor = localStorage.getItem("color-option");
let localImage = localStorage.getItem("image-data");

if (loaclStorgeOfColor !== null && localImage !== null){

    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-option"));
    colorImage.style.filter = `hue-rotate(0deg) saturate(100%) brightness(100%) contrast(50%) drop-shadow(0px 0px 0px ${localImage})`;

    document.querySelectorAll(".colors-list li").forEach((li) => {
        li.classList.remove("active");

        if (li.dataset.color === localStorage.getItem("color-option")){
            li.classList.add("active");
        }
    });
}

// set color of root 
let listLi = document.querySelectorAll(".colors-list li");
listLi.forEach((li) => {
    li.addEventListener("click", function(e){

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);

        const colorData = e.target.getAttribute("data-color");
        colorImage.style.filter = `hue-rotate(0deg) saturate(100%) brightness(100%) contrast(50%) drop-shadow(0px 0px 0px ${colorData})`;

        // Set color data to local storage
        localStorage.setItem("image-data", colorData);

        e.target.parentElement.querySelectorAll(".active").forEach((e) => {
            e.classList.remove("active");
        })
        e.target.classList.add("active");
    });
});

// effect animation of icon 
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
       document.querySelector('.landing-page .down').classList.add('up');
    }, 3000)
})

// start play animation 
let content_about = document.querySelector(".text-about");
let h2_about = document.querySelector(".text-about h2");
let imageRobot = document.getElementById("robot");
let btn_about = document.querySelector(".btn-about");
let first_p = document.getElementById("one");
let last_p = document.getElementById("two");
let main_title = document.querySelector(".about-me .main-title");
let btn_up = document.getElementById("up");
let spanCount = document.querySelectorAll(".cont span");
let sectionSkills = document.querySelector(".skills");
let main_title_skills = document.querySelector(".skills .main-title");
let title_skills = document.querySelector('.title-skills');
let P_skills = document.querySelector(".skills-content p");
let spans_skills = document.querySelectorAll(".skills-content span");
let a_skills = document.querySelector(".skills-content a");
let gallery_section = document.querySelector(".gallery");
let title_gallery = document.querySelector(".gallery .main-title");
let timeline_section = document.querySelector('.timeline');
let line1 = document.querySelector(".content-timeline .line-timeline-1");
let line2 = document.querySelector(".content-timeline .line-timeline-2");
let line3 = document.querySelector(".content-timeline .line-timeline-3");
let circle1 = document.querySelector(".content-timeline  .left .circle-left");
let circle2 = document.querySelector(".content-timeline  .right .circle-right");
let line4 = document.querySelector('.timeline .content-timeline:last-of-type .line-timeline-1');
let line5 = document.querySelector('.timeline .content-timeline:last-of-type .line-timeline-2');
let line6 = document.querySelector('.timeline .content-timeline:last-of-type .line-timeline-3');
let circle3 = document.querySelector(".timeline .content-timeline:last-of-type .left .circle-left");
let circle4 = document.querySelector(".timeline .content-timeline:last-of-type .right .circle-right");
let title_timeline = document.querySelector(".timeline .main-title");
let left_timeline = document.querySelector(".content-timeline  .left");
let right_timeline = document.querySelector(".content-timeline  .right");
let left_2_timeline = document.querySelector('.timeline .content-timeline:last-of-type .left');
let right_2_timeline = document.querySelector('.timeline .content-timeline:last-of-type .right');
let section_feature = document.querySelector(".feature");
let title_feature = document.querySelector(".feature .main-title");
let box_feature = document.querySelectorAll(".feature  .box-feature.one");
let box_feature_2 = document.querySelectorAll(".feature  .box-feature.two");
let testimonials_section = document.querySelector('.testimonials');
let title_testimonials = document.querySelector(".testimonials .main-title");
let boxes_testimonials = document.querySelectorAll(".testimonials .box-testimonials");
let title_contact = document.querySelector(".contact .main-title");
let contact_section = document.querySelector(".contact");
let left_inputs = document.querySelector(".contact .inputs .left-inputs");
let right_inputs = document.querySelector(".contact .inputs .right-inputs");

// set values
let start_value = 0;
let end_value = 100;

// when scroll
window.addEventListener("scroll", function() {
    // contetn about section
    if (window.scrollY >= content_about.offsetTop) {
        main_title.style.opacity = '1';
        main_title.style.animation = 'main forwards 1s ease';
    }
    if (window.scrollY >= content_about.offsetTop + 100) {
        h2_about.style.opacity = '1';
        h2_about.style.animation = `title forwards 0.7s ease`;
    }
    if (window.scrollY >= content_about.offsetTop + 200) {
        imageRobot.style.opacity = '1';
        imageRobot.style.animation = 'img-right forwards 2s ease';
        first_p.style.opacity = '1';
        first_p.style.animation = 'slideright forwards 1s ease';
        last_p.style.opacity = '1';
        last_p.style.animation = 'slideleft forwards 1s ease';
    }
    if(window.scrollY >= content_about.offsetTop + 300){
        btn_about.style.opacity = '1';
        btn_about.style.animation = ' slidetop forwards ease 1s';
    }
    if (window.scrollY >= content_about.offsetTop + 650) {
        btn_up.style.opacity = '1';
    } else{
        btn_up.style.opacity = '0';
    }
    if (window.scrollY >= sectionSkills.offsetTop - 800){
        main_title_skills.style.opacity = '1';
        main_title_skills.style.animation = `main forwards 1s ease`;

    }   
    // skills section
    // set scroll y and section bottom
    let scrollY = window.scrollY;

    if (scrollY >= sectionSkills.offsetTop - 550) {
        spanCount.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (scrollY >= sectionSkills.offsetTop - 200){
        title_skills.style.opacity = '1';
        title_skills.style.animation = 'h2 1s forwards ease'
    }
    if (scrollY >= sectionSkills.offsetTop - 150){
        P_skills.style.opacity = '1';
        P_skills.style.animation = 'slideright forwards 1s ease';
    }
    if (scrollY >= sectionSkills.offsetTop - 100){
        for (let i = 0; i < spans_skills.length; i++) {
            spans_skills[i].style.opacity = '1';
            spans_skills[i].style.animation = 'slideleft forwards 1s ease';
        }
    }
    // gallary section
    if (scrollY >= sectionSkills.offsetTop - 50) {
        a_skills.style.opacity = '1';
        a_skills.style.animation = 'main forwards 1s ease';
    }

    if (scrollY >= gallery_section.offsetTop - 800){
        title_gallery.style.opacity = '1';
        title_gallery.style.animation = 'main forwards 1s ease';
    }

    // timeline section
    if (scrollY >= timeline_section.offsetTop - 800){
        title_timeline.style.opacity = '1';
        title_timeline.style.animation = 'main 1s forwards ease';
    }
    if (scrollY >= timeline_section.offsetTop - 600){
        line1.style.opacity = '1';
        line1.style.animation = 'line linear 0.5s forwards';
        left_timeline.style.opacity = '1';
        left_timeline.style.animation = 'slideright forwards 0.7s ease';
    }

    if (scrollY >= timeline_section.offsetTop - 450) {
        circle1.style.display = 'block';
    }

    if (scrollY >= timeline_section.offsetTop - 400){
        line2.style.opacity = '1';
        line2.style.animation = 'line-2 linear 0.5s forwards';
        right_timeline.style.opacity = '1';
        right_timeline.style.animation = 'slideleft forwards 0.7s ease'
    }
    if (scrollY >= timeline_section.offsetTop - 300){
        circle2.style.display = 'block';
    }
    if (scrollY >= timeline_section.offsetTop - 210){
        line3.style.opacity = '1';
        line3.style.animation = 'line-3 linear 0.5s forwards';
    }
    if (scrollY >= timeline_section.offsetTop - 150){
        line4.style.opacity = '1';
        line4.style.animation = 'line linear 0.5s forwards';
        left_2_timeline.style.opacity =  '1';
        left_2_timeline.style.animation = 'slideright forwards 0.7s ease';
    }
    if (scrollY >= timeline_section.offsetTop - 100){
        circle3.style.display = 'block';
    }
    if (scrollY >= timeline_section.offsetTop - 20){
        line5.style.opacity = '1';
        line5.style.animation = "lines-2 linear 0.5s forwards";
        right_2_timeline.style.opacity = '1';
        right_2_timeline.style.animation = 'slideleft forwards 0.7s ease';
    }
    if (scrollY >= timeline_section.offsetTop + 80){
        circle4.style.display = 'block';
    }
    if (scrollY >= timeline_section.offsetTop +  120){
        line6.style.opacity = '1';
        line6.style.animation = "line-3 linear 0.5s forwards";
    }
    // featuer section 
    if (scrollY >= section_feature.offsetTop - 700){
        title_feature.style.opacity = '1';
        title_feature.style.animation = 'main 1s forwards ease';
    }
    if (scrollY >= section_feature.offsetTop - 600){
        box_feature.forEach((box) =>{
            box.classList.add("one_feature");
        })
    }
    if (scrollY >= section_feature.offsetTop - 350){
        box_feature_2.forEach((box) =>{
            box.classList.add("two_feature");
        })
    }
    // testimonials section 
    if (scrollY >= testimonials_section.offsetTop - 800){
        title_testimonials.style.opacity = '1';
        // title_testimonials.style.zIndex = '0';
        title_testimonials.style.animation = 'main 1s forwards ease';
    }
    if (scrollY >= testimonials_section.offsetTop - 600){
        boxes_testimonials.forEach((box, index) =>{
            if (index === 0){
                box.style.opacity = '1';
                box.style.animation = 'slideright forwards 0.7s ease';
            }
            if (index === 1){
                box.style.opacity = '1';
                box.style.animation = 'main 0.7s forwards ease';
            }
            if (index === 2){
                box.style.opacity = '1';
                box.style.animation = 'slideleft forwards 0.7s ease';
            }
        })
    }
    if (scrollY >= contact_section.offsetTop - 650){
        title_contact.style.opacity = '1';
        title_contact.style.animation = 'main 1s forwards ease';
    }
    if (scrollY >= contact_section.offsetTop - 550){
        right_inputs.style.opacity = '1';
        right_inputs.style.animation = 'slideleft forwards 0.7s ease';
        left_inputs.style.opacity = '1';
        left_inputs.style.animation = 'slideright forwards 0.7s ease';
    }
});

// scroll to top
btn_up.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// complete the first circle
let first_interval = setInterval(() => {
    if (circle1.style.display === 'block'){
        start_value++;
        circle1.style.background = `conic-gradient(white ${start_value * 3.6}deg, #00000000 0deg)`;
        if (start_value === end_value){
            clearInterval(first_interval);
        }
    }
}, 5);

let new_start = 0;
let new_end = 100;

// complete the last circle
let last_interval = setInterval(() => {
    if (circle2.style.display === 'block'){
        new_start++;
        circle2.style.background = `conic-gradient(white ${new_start * 3.6}deg, #00000000 0deg)`;
        if (new_start === new_end){
            clearInterval(last_interval);
        }
    }
}, 5);

 let start_3 = 0;
 let end_3 = 100;

 let circle_interval = setInterval(() => {
    if (circle3.style.display === 'block'){
        start_3++;
        circle3.style.background = `conic-gradient(white ${start_3 * 3.6}deg, #00000000 0deg)`;
        if (start_3 === end_3){
            clearInterval(circle_interval);
        }
    }
}, 5);

let start_4 = 0;
let end_4 = 100;

let circle2_interval = setInterval(() => {
    if (circle4.style.display === 'block'){
        start_4++;
        circle4.style.background = `conic-gradient(white ${start_4 * 3.6}deg, #00000000 0deg)`;
        if (start_4 === end_4){
            clearInterval(circle2_interval);
        }
    }
}, 5);


// create popupo gallery 
let all_image = document.querySelectorAll('.gallery-box img');

all_image.forEach((img) => {
    img.addEventListener('click', function(e){
        let overlay_popup = document.createElement("div");
        overlay_popup.className = 'overlay-box';
        document.body.appendChild(overlay_popup);

        let popupo_box = document.createElement('div');
        popupo_box.className = 'popupo-box';

        if (img.alt !== null){
            let title = document.createElement("h3");
            title.className = 'image-title';
            title.appendChild(document.createTextNode(img.alt));
            popupo_box.appendChild(title);
        }

        let img_create = document.createElement('img');
        img_create.src = img.src;

        let delet_el = document.createElement('span');
        delet_el.appendChild(document.createTextNode('X'));
        delet_el.className = 'delete-btn';

        popupo_box.appendChild(delet_el);
        popupo_box.appendChild(img_create);
        overlay_popup.appendChild(popupo_box);
    })
});

// remove the popupo when click on x 
document.addEventListener('click', function(e){
    if (e.target.className === 'delete-btn'){
        e.target.parentElement.remove();
        document.querySelector('.overlay-box').remove();
    }
    else if (e.target.className === 'overlay-box'){
        document.querySelector('.overlay-box').remove();
    }
})

// go to all links and bullets
let all_bullets = document.querySelectorAll(".nav-bullets .bullet");
let all_links = document.querySelectorAll(".links li a");

function go_to_section(elements){
    elements.forEach((element) => {
        element.addEventListener("click", function(el){
            el.preventDefault();
            document.querySelector(el.target.dataset.section).scrollIntoView({
                behavior: 'smooth',
            })
        })
    });
}
go_to_section(all_bullets);
go_to_section(all_links);

// icon go to footer
document.querySelector(".down").onclick = function(){
    document.querySelector(".footer").scrollIntoView({
        behavior: 'smooth',
    })
}

// handel bullets display 
let bullets_container = document.querySelector(".nav-bullets");
let spans_display = document.querySelectorAll(".display span");

// save in loalstorage
const display_local = window.localStorage.getItem("display-option");

if (display_local !== null){
    spans_display.forEach((span) =>{
        span.classList.remove("active");
    })
    if (display_local === 'yes'){
        document.querySelector(".display span.yes").classList.add("active");
        bullets_container.style.display = "block";
    } else{
        document.querySelector(".display span.no").classList.add("active");
        bullets_container.style.display = "none";
    }
}

// remove class and add + display bullets
spans_display.forEach((span) => {
    span.addEventListener('click', function(e) {
        e.target.parentElement.querySelectorAll(".active").forEach((el) => {
            el.classList.remove("active");
        })
        e.target.classList.add("active");
        if (this.dataset.display === "yes") {
            bullets_container.style.display = "block";
            window.localStorage.setItem("display-option", "yes");
        } else {
            bullets_container.style.display = "none";
            window.localStorage.setItem("display-option", "no");
        }
    });
});

// header display
let header_option = document.querySelector(".setting-container .position");
let spans_option = document.querySelectorAll(".setting-container .position span");
let local_position = localStorage.getItem("position-option");
// save in localstorage
if (local_position !== null){

    spans_option.forEach((span) =>{
        span.classList.remove("active");
    });

    if (local_position === "yes"){
        document.querySelector('.header-area').classList.add('header-area-2');
        document.querySelector(".introduction-text").style.top = '50%';
        document.querySelector(".setting-container .position .yes").classList.add("active");
    } else{
        document.querySelector('.header-area').classList.remove('header-area-2');
        document.querySelector(".introduction-text").style.top = '40%';
        document.querySelector(".setting-container .position .no").classList.add("active");
    }
}
// loop for elments 
spans_option.forEach((span) =>{
    span.addEventListener('click', function(e){
        spans_option.forEach((span) =>{
            span.classList.remove("active");
        });
        e.target.classList.add("active");

        if (e.target.dataset.position === "yes"){
            localStorage.setItem("position-option", "yes");
            document.querySelector('.header-area').classList.add('header-area-2');
            document.querySelector(".introduction-text").style.top = '50%';
        } else{
            localStorage.setItem("position-option", "no");
            document.querySelector('.header-area').classList.remove('header-area-2');
            document.querySelector(".introduction-text").style.top = '40%';
        }
    })
})

// reset all options in localstorage
document.querySelector(".reset-option").addEventListener("click", function(){
    let popupo = document.createElement("div");
    popupo.className = "overlay-box";
    document.body.appendChild(popupo);

    let show_popupo = document.createElement("div");
    show_popupo.className = "show-popupo";

    let text_popupo = document.createElement('span')
    text_popupo.appendChild(document.createTextNode("Are You Sure You Want to Reset All Options"));
    text_popupo.className = "text-popupo";


    let btn_div = document.createElement("div");
    btn_div.className = "btn-div";

    let btn_yes = document.createElement("span");
    btn_yes.className = 'btn-yes';
    btn_yes.appendChild(document.createTextNode("Yes"));
    
    let btn_no = document.createElement("span");
    btn_no.className = 'btn-no';
    btn_no.appendChild(document.createTextNode("No"));

    btn_div.appendChild(btn_yes)
    btn_div.appendChild(btn_no)
    show_popupo.appendChild(text_popupo);
    show_popupo.appendChild(btn_div);
    popupo.appendChild(show_popupo);

    btn_no.onclick = function(){
        popupo.remove();
        show_popupo.remove();
    }
    btn_yes.onclick = function(){
        localStorage.clear()
        window.location.reload();
    }
});


