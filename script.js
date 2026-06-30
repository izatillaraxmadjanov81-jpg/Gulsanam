// ===== LETTER =====

const startBtn = document.getElementById("startBtn");

const letter = document.getElementById("letter");

const nextBtn = document.getElementById("nextBtn");

const letterText = document.getElementById("letterText");

const message =
`Ba'zi insonlar bilan uchrashish tasodifdek tuyuladi, ammo ular hayotga kirib kelgach, hamma narsa biroz boshqacharoq va chiroyliroq bo'lib qoladi. Sen ham shunday insonsan.

Sening samimiyliging, mehring va nafis fe'ling seni boshqalardan ajratib turadi. Eng go'zal fazilatlaring esa ko'z bilan emas, qalb bilan ko'riladi.

Doim kulib yur! Chunki sen baxtga ham, eng chiroyli tabassumlarga ham munosib insonsan. 🌹✨`;

startBtn.onclick = ()=>{

    letter.classList.add("show");

    letterText.innerHTML="";

    let i=0;

    function type(){

        if(i<message.length){

            letterText.innerHTML+=message.charAt(i);

            i++;

            setTimeout(type,22);

        }

    }

    type();

}

const videoPage = document.getElementById("videoPage");

const goldenVideo = document.getElementById("goldenVideo");

const closeVideo = document.getElementById("closeVideo");

const showGallery = document.getElementById("showGallery");

const photoPage = document.getElementById("photoPage");

const goldenBrown = document.getElementById("goldenBrown");

const continueBtn = document.getElementById("continueBtn");

const lovePage = document.getElementById("lovePage");

const loveNext = document.getElementById("loveNext");

const loveVideoPage = document.getElementById("loveVideoPage");

const loveVideo = document.getElementById("loveVideo");

const closeLoveVideo = document.getElementById("closeLoveVideo");

const nextAfterLove = document.getElementById("nextAfterLove");

const memoryPage = document.getElementById("memoryPage");

const memoryVideo = document.getElementById("memoryVideo");

const closeMemoryVideo = document.getElementById("closeMemoryVideo");

const memoryContinue = document.getElementById("memoryContinue");

const finalPage = document.getElementById("finalPage");

const finalVideo = document.getElementById("finalVideo");

const closeFinalVideo = document.getElementById("closeFinalVideo");

const finalMessage = document.getElementById("finalMessage");

nextBtn.onclick = ()=>{

    // Maktub yopiladi

    letter.classList.remove("show");

    // Yarim soniyadan keyin video sahifasi ochiladi

setTimeout(() => {

    videoPage.classList.add("show");

    goldenVideo.style.display = "block";

    goldenVideo.load();

    setTimeout(()=>{
        goldenVideo.play().catch(()=>{});
    },300);

    closeVideo.style.display = "none";

    showGallery.style.display = "none";

}, 700);
}

// ===== Video tugaganda =====

goldenVideo.onended = () => {

    closeVideo.style.display = "block";

}

// ===== X tugmasi =====

closeVideo.onclick = () => {

    goldenVideo.pause();

    goldenVideo.style.display = "none";

    closeVideo.style.display = "none";

    showGallery.style.display = "block";

}

// ===== Davom etish =====

showGallery.onclick = () => {

    showGallery.style.display = "none";

    videoPage.classList.remove("show");

    goldenVideo.style.display = "block";

    photoPage.classList.add("show");

}

// ==========================
// PHOTO PAGE -> LOVE PAGE
// ==========================

continueBtn.onclick = () => {

    photoPage.classList.remove("show");

    setTimeout(() => {

        lovePage.classList.add("show");

    },600);

};


// ==========================
// LOVE PAGE -> LOVE VIDEO
// ==========================

loveNext.onclick = () => {

    lovePage.classList.remove("show");

    loveVideo.style.display = "block";
    loveVideo.load();

    closeLoveVideo.style.display = "none";

    nextAfterLove.style.display = "none";

    setTimeout(() => {

        loveVideoPage.classList.add("show");

    },600);

};

// ==========================
// LOVE VIDEO TUGAGANDA
// ==========================

loveVideo.onended = () => {

    closeLoveVideo.style.display = "block";

}

// ==========================
// X BOSILGANDA
// ==========================

closeLoveVideo.onclick = () => {

    loveVideo.pause();

    loveVideo.style.display = "none";

    closeLoveVideo.style.display = "none";

    nextAfterLove.style.display = "block";

}

// ==========================
// DAVOM ETISH BOSILGANDA
// ==========================

nextAfterLove.onclick = () => {

    nextAfterLove.style.display = "none";

    loveVideoPage.classList.remove("show");

    setTimeout(()=>{

        memoryPage.classList.add("show");

        memoryVideo.style.display="block";
        memoryVideo.load();

        closeMemoryVideo.style.display="none";

        memoryContinue.style.display="none";

    },600);

}

// ==========================
// MEMORY VIDEO TUGAGANDA
// ==========================

memoryVideo.onended = () => {

    closeMemoryVideo.style.display = "block";

}

// ==========================
// X BOSILGANDA
// ==========================

closeMemoryVideo.onclick = () => {

    memoryVideo.pause();

    memoryVideo.style.display = "none";

    closeMemoryVideo.style.display = "none";

    memoryContinue.style.display = "block";

}

// ==========================
// DAVOM ETISH
// ==========================

memoryContinue.onclick = () => {

    memoryContinue.style.display = "none";

    memoryPage.classList.remove("show");

    setTimeout(()=>{

        finalPage.classList.add("show");

        finalVideo.style.display="block";
        finalVideo.load();

        closeFinalVideo.style.display="none";

        finalMessage.classList.remove("show");

    },600);

}

// ==========================
// FINAL VIDEO TUGAGANDA
// ==========================

finalVideo.onended = ()=>{

    closeFinalVideo.style.display="block";

}

// ==========================
// X BOSILGANDA
// ==========================

closeFinalVideo.onclick = ()=>{

    finalVideo.pause();

    finalVideo.style.display="none";

    closeFinalVideo.style.display="none";

    setTimeout(()=>{

        finalMessage.classList.add("show");

    },300);

}