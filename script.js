/* =========================================
LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1800);

});

/* =========================================
MUSIC
========================================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const openLetter = document.getElementById("openLetter");

let isPlaying = false;

function playMusic(){

    music.play().then(() => {
        isPlaying = true;
        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';
    }).catch(()=>{});

}

openLetter.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({
        behavior:"smooth"
    });

    if(!isPlaying){
        playMusic();
    }

});

musicBtn.addEventListener("click", () => {

    if(isPlaying){

        music.pause();
        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';
        isPlaying = false;

    }else{

        playMusic();

    }

});

/* =========================================
LIGHTBOX
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeLightbox.onclick = ()=>{

    lightbox.style.display = "none";

};

lightbox.onclick = (e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};

/* =========================================
SCROLL ANIMATION
========================================= */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".letter,.gallery,.reasons,.timeline,.playlist,.ending"
).forEach(section=>{

    section.classList.add("fade-up");
    observer.observe(section);

});

/* =========================================
BACK TO TOP
========================================= */

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

/* =========================================
FLOATING HEARTS
========================================= */

const heartContainer =
document.getElementById("hearts-container");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";
    heart.style.fontSize =
    (15 + Math.random()*20)+"px";
    heart.style.opacity = Math.random();
    heart.style.color = "#ff7eb6";
    heart.style.animation =
    `floatHeart ${5 + Math.random()*5}s linear`;

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,600);

/* =========================================
FLOATING FLOWERS
========================================= */

const flowerContainer =
document.getElementById("flowers-container");

function createFlower(){

    const flower = document.createElement("div");

    flower.innerHTML = "🌸";

    flower.style.position = "absolute";
    flower.style.left = Math.random()*100+"vw";
    flower.style.top = "-50px";
    flower.style.fontSize =
    (18 + Math.random()*15)+"px";
    flower.style.animation =
    `flowerFall ${6 + Math.random()*5}s linear`;

    flowerContainer.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },12000);

}

setInterval(createFlower,1200);

/* =========================================
SPARKLE CLICK
========================================= */

document.addEventListener("click",(e)=>{

    for(let i=0;i<8;i++){

        const sparkle =
        document.createElement("span");

        sparkle.innerHTML="✨";

        sparkle.style.position="fixed";
        sparkle.style.left=e.clientX+"px";
        sparkle.style.top=e.clientY+"px";
        sparkle.style.pointerEvents="none";
        sparkle.style.fontSize=
        (12+Math.random()*10)+"px";
        sparkle.style.transition="1s";
        sparkle.style.zIndex="9999";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.style.transform=
            `translate(${Math.random()*120-60}px,
            ${Math.random()*120-60}px)
            scale(0)`;

            sparkle.style.opacity="0";

        },20);

        setTimeout(()=>{

            sparkle.remove();

        },1000);

    }

});

/* =========================================
DYNAMIC CSS ANIMATION
========================================= */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatHeart{

0%{
transform:translateY(0) rotate(0);
opacity:0;
}

20%{
opacity:1;
}

100%{
transform:translateY(-120vh)
rotate(360deg);
opacity:0;
}

}

@keyframes flowerFall{

0%{
transform:translateY(-60px)
rotate(0deg);
}

100%{
transform:translateY(120vh)
rotate(360deg);
}

}

`;

document.head.appendChild(style);
