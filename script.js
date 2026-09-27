const cards = [
    `<img src="sunflower.jpg" alt="Vibrant Sunflower" class="card-element">`,
    `<div class="text-card card-element">
        <p>I'm so so sorry Jaanuuu, yaar majha mule tujha avdta naakh nighala. mala yaar khup raag yetoi swatahch . Majha mule te jhala, maaf kar yaar mala Babuu. me yaar nehmi tula trasss deto, tula hurt karto, majha vagnya mule tula nehmi hurt hota. Me tujha yaar life madhe alya asun nusta chaos ch kartoy asa vattay yaar mala but mala tula nehmi khush thevaychay, tula hasat thevaychay.<br><br>
        <span class="highlight">SO SORRY BABUUU  😭🥺</span><br><br>
        But yaar i really really Love you and Hateeeeee youuuu 💗🫶🏻❣️</p>
    </div>`,
    `<div class="photo-card card-element">
        <div class="heart-waves-container">
            <div class="heart-wave" style="animation-delay: 0s"></div>
            <div class="heart-wave" style="animation-delay: 1s"></div>
            <div class="heart-wave" style="animation-delay: 2s"></div>
        </div>
        <img src="mine.jpg" alt="Us" class="couple-img">
        <div class="photo-text-box">
            Mala asch ya photo sarkh ch tujha sobat rahaych ahe FOREVER
        </div>
    </div>`,
    `<img src="pillu.jpeg" alt="Pillu" class="card-element" style="object-fit: cover; background: #fff;">`
];

let currentIndex = 0;
const slider = document.getElementById('cardSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let isAnimating = false;

function getAnimateEl() {
    return slider.querySelector('.card-element');
}

function changeCard(direction) {
    if (isAnimating) return;
    isAnimating = true;

    // Animate the slider container itself — works for ALL card types (img or div)
    const outClass = direction === 'next' ? 'swipe-left-out' : 'swipe-right-out';
    slider.classList.add(outClass);

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % cards.length;
    } else {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    setTimeout(() => {
        slider.innerHTML = cards[currentIndex];
        slider.classList.remove(outClass);
        slider.classList.add('swipe-in');

        setTimeout(() => {
            slider.classList.remove('swipe-in');
            isAnimating = false;
        }, 800);
    }, 400);
}

nextBtn.addEventListener('click', () => changeCard('next'));
prevBtn.addEventListener('click', () => changeCard('prev'));

// Touch support for swiping
let touchstartX = 0;
let touchendX = 0;

slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchendX < touchstartX - 50) changeCard('next'); // Swiped left
    if (touchendX > touchstartX + 50) changeCard('prev'); // Swiped right
}
