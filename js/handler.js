initialSlice = true

function onLoadHandler() {
    let preloader = document.querySelector('.preloader');
    preloader.querySelector('.triangle').style.display = "none";
    preloader.querySelector('.square').style.display = "none";
    var circle = preloader.querySelector('.circle');
    circle.style.animation = 'none';
    circle.style.opacity = 1;
    circle.style.transition = "transform 1.2s 0.8s";
    circle.style.transform = `translate(-50%, -50%) scale(${(1 / circle.getBoundingClientRect().width) * (window.innerHeight + window.innerWidth)})`;
    preloader.addEventListener('transitionend', preloaderEventHandler);
    preloader.style.opacity = 0;
    addEventListeners();
    setInterval(aliveTimeCalculation, 1000);
    playDontBlinkAnimationButtonFormation();
    workExperienceTimelineFormation();
}

function preloaderEventHandler(e) {
    if (e.target.className == "preloader") {
        let preloader = document.querySelector('.preloader');
        preloader.removeEventListener('transitionend', preloaderEventHandler);
        preloader.style.display = "none";
        document.getElementsByTagName('main')[0].style.opacity = 1;
        animateIntro();
    }
}

function animateIntro() {
    let delay = 0;
    document.querySelector('.code-block').querySelectorAll('.line-of-code').forEach(lineOfCode => {
        lineOfCode.style.animation = `horizontal-reveal 0.8s linear forwards ${delay}s`;
        delay += 0.2;
    });
    let mac = document.querySelector('.mac');
    mac.addEventListener('animationend', macEventHandler);
    mac.classList.add('glitch-outro');
}

function macEventHandler(e) {
    if (e.target.className.includes('mac')) {
        let mac = document.querySelector('.mac');
        mac.style.animation = 'none';
        mac.style.display = 'none';
        mac.removeEventListener('animationend', macEventHandler);
        dontBlinkAnimation();
    }
}

var dontBlinkContent = [
    { text: "DEEPAK", class: "glitch-intro-text", changeBackgroundColor: false, append: false }, { text: "Hello", class: "big-text-that-shortens-with-delay", changeBackgroundColor: true, append: false }, { text: ", world!", class: "nothing-to-normal-with-delay", changeBackgroundColor: true, append: true }, { text: "Try", class: "normal-transition-with-delay", changeBackgroundColor: true, append: false }, { text: "not", class: "normal-transition-with-delay", changeBackgroundColor: true, append: false }, { text: "to", class: "normal-transition-with-delay", changeBackgroundColor: true, append: false }, { text: "blink", class: "normal-transition-with-delay", changeBackgroundColor: true, append: false }, { text: "blink", class: "normal-transition-with-big-text", changeBackgroundColor: false, append: false }, { text: "blink", class: "normal-transition", changeBackgroundColor: true, append: false },
    { text: "I", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "am", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "that", class: "big-text-that-shortens", changeBackgroundColor: true, append: false }, { text: "software", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: " developer", class: "nothing-to-normal", changeBackgroundColor: true, append: true }, { text: "and", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "a", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: " technical", class: "nothing-to-normal", changeBackgroundColor: true, append: true }, { text: " blogger", class: "nothing-to-normal", changeBackgroundColor: true, append: true }, { text: "and", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "a", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: " technical", class: "nothing-to-normal", changeBackgroundColor: true, append: true }, { text: " speaker", class: "nothing-to-normal", changeBackgroundColor: true, append: true }, { text: "and", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "basically", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "everything", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "I", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "think", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "I", class: "big-text-that-shortens", changeBackgroundColor: true, append: false }, { text: "can", class: "big-text-that-shortens", changeBackgroundColor: true, append: false },
    { text: "do!", class: "big-text-that-shortens-with-post-delay", changeBackgroundColor: true, append: false }, { text: "Oh yeah", class: "slide-from-right-to-left", changeBackgroundColor: false, append: false }, { text: "I", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "can", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "turn", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "your", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "ideas", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "into", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "reality", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "given", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "a", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "chance.", class: "fade-out", changeBackgroundColor: true, append: false }, { text: "You", class: "normal-transition", changeBackgroundColor: true, append: false },
    { text: "are", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "still", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "here,", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "which", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "means", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "you", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "would", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "like", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "to", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "explore", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "more.", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "Yay!", class: "short-text-that-broadens", changeBackgroundColor: false, append: false }, { text: "This", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "means", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "it", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "is", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "now", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "okay", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "for", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "you", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "to", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "blink", class: "normal-transition", changeBackgroundColor: true, append: false }, { text: "and", class: "normal-transition", changeBackgroundColor: true, append: false }
];
var dontBlinkIndex = 0;
var dontBlinkSection;
var dontBlinkAnimationTriggeredAtleastOnce = false;

function dontBlinkAnimation() {
    dontBlinkSection = document.querySelector('.dont-blink-section');
    dontBlinkSection.style.display = 'block';
    dontBlinkSection.addEventListener('animationend', dontBlinkAnimationListener);
    startDontBlinkAnimation();
}

function startDontBlinkAnimation() {
    if (dontBlinkIndex < dontBlinkContent.length) {
        changeDontBlinkSectionBackgroundColor();
        dontBlinkSection.appendChild(createSpanElement());
        dontBlinkSection.classList.add(dontBlinkContent[dontBlinkIndex].class);
        dontBlinkIndex++;
        dontBlinkAnimationTriggeredAtleastOnce = true;
    }
    else
        endDontBlinkAnimation();
}

function createSpanElement() {
    let element = document.createElement('span');
    element.textContent = dontBlinkContent[dontBlinkIndex].text;
    return element;
}

function changeDontBlinkSectionBackgroundColor() {
    let introSection = document.getElementById('intro');
    if (dontBlinkContent[dontBlinkIndex].changeBackgroundColor) {
        introSection.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__secondary');
        introSection.style.color = window.getComputedStyle(document.documentElement).getPropertyValue('--color__secondary');
        document.documentElement.style.setProperty('--menu-color', window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__primary'));
    }
    else {
        introSection.style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__primary');
        introSection.style.color = window.getComputedStyle(document.documentElement).getPropertyValue('--color__primary');
        document.documentElement.style.setProperty('--menu-color', window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__secondary'));
    }
}

function dontBlinkAnimationListener() {
    if (dontBlinkIndex == dontBlinkContent.length || (!dontBlinkContent[dontBlinkIndex].append))
        dontBlinkSection.textContent = '';
    dontBlinkSection.classList.remove(dontBlinkSection.classList[dontBlinkSection.classList.length - 1]);
    setTimeout(startDontBlinkAnimation, 10);
}

function endDontBlinkAnimation() {
    dontBlinkSection.removeEventListener('animationend', dontBlinkAnimationListener);
    dontBlinkSection.style.display = 'none';
    dontBlinkIndex = 0;
    changeDontBlinkSectionBackgroundColor();
    playOrScrollIndication(false);
}

function addEventListeners() {
    window.addEventListener('scroll', handleScrollEvent);
    window.addEventListener('resize', handleScrollEvent);
}

function handleScrollEvent() {
    showHiddenElements();
    playOrScrollIndication();
    changeBackgroundColor();
    highlightWords();
    workExperienceTimelineFormation();
    animateWorkExperienceTimeline();
    animateEducationIntroIcons();
    animateSkillSectionIntro();
    animateSkillSectionInitialHeading();
    animateSkillsScroll();
}

function showHiddenElements() {
    let hiddenElements = document.querySelectorAll('.hideY');
    hiddenElements.forEach(hiddenElement => {
        if (hiddenElement.getBoundingClientRect().top <= (window.innerHeight / 100 * 75) && (!hiddenElement.classList.contains('show'))) {
            hiddenElement.classList.add('showY');
            hiddenElement.classList.remove('hideY');
        }
    });
    // No usage as of now
    // hiddenElements = document.querySelectorAll('.hideX');
    // hiddenElements.forEach(hiddenElement => {
    //     if (hiddenElement.getBoundingClientRect().top <= (window.innerHeight / 100 * 65) && (!hiddenElement.classList.contains('show'))) {
    //         hiddenElement.classList.add('showX');
    //         hiddenElement.classList.remove('hideX');
    //     }
    // });
}

function playOrScrollIndication(scrolled = true) {
    if (dontBlinkAnimationTriggeredAtleastOnce && dontBlinkIndex == 0) {
        if (document.getElementById('intro').getBoundingClientRect().bottom <= (window.innerHeight / 100 * 25)) {
            document.querySelector('.scroll-indication-wrapper').style.opacity = 0;
            document.querySelector('.play-dont-blink-animation-wrapper').style.display = 'block';
        }
        else if (!scrolled) {
            document.querySelector('.scroll-indication-wrapper').style.opacity = 1;
            document.querySelector('.play-dont-blink-animation-wrapper').style.display = 'none';
        }
    }
}

var elementIDsWithChangedBackgroundColor = ['educational-qualification', 'projects'];
function changeBackgroundColor() {
    let colorSet = false;
    elementIDsWithChangedBackgroundColor.forEach(elementID => {
        let element = document.getElementById(elementID);
        let boundingClientRect = element.getBoundingClientRect();
        if (boundingClientRect.top <= (window.innerHeight / 2) && boundingClientRect.bottom >= (window.innerHeight / 2)) {
            document.documentElement.style.setProperty('--background-color', window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__secondary'));
            document.documentElement.style.setProperty('--color', window.getComputedStyle(document.documentElement).getPropertyValue('--color__secondary'));
            document.documentElement.style.setProperty('--color__faded', window.getComputedStyle(document.documentElement).getPropertyValue('--color__faded__secondary'));
            colorSet = true;
        }
    });
    if (!colorSet) {
        document.documentElement.style.setProperty('--background-color', window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__primary'));
        document.documentElement.style.setProperty('--color', window.getComputedStyle(document.documentElement).getPropertyValue('--color__primary'));
        document.documentElement.style.setProperty('--color__faded', window.getComputedStyle(document.documentElement).getPropertyValue('--color__faded__primary'));
    }
}

function highlightWords() {
    let element = document.getElementById('about');
    let words = element.querySelector('.container').getElementsByTagName('span');
    let totalWords = words.length;

    let boundingClientRect = element.getBoundingClientRect();
    let elementTop = element.offsetTop - window.innerHeight / 2;
    let elementBottom = elementTop + boundingClientRect.height;

    if (window.scrollY >= elementTop && window.scrollY <= elementBottom) {
        let scrolledInside = window.scrollY - elementTop;
        let scrollPercentage = (100 / boundingClientRect.height) * scrolledInside;
        let totalWordsToHighlight = Math.ceil((totalWords / 100) * scrollPercentage);

        for (let wordCount = 1; wordCount <= totalWords; wordCount++) {
            if (wordCount <= totalWordsToHighlight)
                words[wordCount - 1].style.color = window.getComputedStyle(document.documentElement).getPropertyValue('--color');
            else
                words[wordCount - 1].style.color = window.getComputedStyle(document.documentElement).getPropertyValue('--color__faded');
        }
    }
    else if (window.scrollY < elementTop) {
        for (let wordCount = 1; wordCount <= totalWords; wordCount++) {
            words[wordCount - 1].style.color = window.getComputedStyle(document.documentElement).getPropertyValue('--color__faded');
        }
    }
}

function workExperienceTimelineFormation() {
    let experiences = document.querySelectorAll('.experience');
    let laps = document.querySelectorAll('.experience-lap');
    let pixels = 0;
    for (let index = 1; index < experiences.length; index++) {
        pixels += experiences[index - 1].getBoundingClientRect().height;
        laps[index].style.top = pixels + "px";
    }
}

function animateWorkExperienceTimeline() {
    let experienceWrapper = document.querySelector('.experience-wrapper');
    let boundingClientRect = experienceWrapper.getBoundingClientRect();
    let halfOfViewportHeight = window.innerHeight / 100 * 50;
    if (boundingClientRect.top <= halfOfViewportHeight && boundingClientRect.bottom > halfOfViewportHeight) {
        let car = document.querySelector('.timeline').querySelector('.car');
        let scrolled = (halfOfViewportHeight + boundingClientRect.height) - (boundingClientRect.top + boundingClientRect.height);
        if (scrolled + car.getBoundingClientRect().height <= boundingClientRect.height)
            car.style.transform = `rotate(180deg) translateY(-${scrolled}px)`;
    }
}

function animateEducationIntroIcons() {
    let icons = document.getElementById('education').querySelectorAll('.material-symbols-outlined');
    icons.forEach(icon => {
        if (icon.getBoundingClientRect().top <= (window.innerHeight / 100 * 65))
            icon.style.color = 'limegreen';
        else
            icon.style.color = window.getComputedStyle(document.documentElement).getPropertyValue('--color');
    });
}

function animateSkillSectionIntro() {
    let element = document.querySelector('.skills-intro');
    if (element.getBoundingClientRect().top <= (window.innerHeight / 100 * 50)) {
        if (!element.classList.contains('skills-intro-animation'))
            element.classList.add('skills-intro-animation');
    }
}

function animateSkillSectionInitialHeading() {
    let element = document.getElementById('front-end-skills-heading');
    if (initialSlice && element.getBoundingClientRect().top <= (window.innerHeight / 100 * 50)) {
        if (!element.classList.contains('slice')) {
            element.classList.add('slice');
            initialSlice = false;
        }
    }
}

function animateSkillsScroll() {
    let horizontalViewSection = document.getElementById('skills');
    let horizontalViewStickyViewport = document.querySelector('.horizontal-view-sticky-viewport')
    let horizontalViewElementWrapper = document.querySelector('.horizontal-view-element-wrapper');
    let horizontalViewSectionFromTop = horizontalViewSection.offsetTop;
    let horizontalViewElementWrapperWidth = horizontalViewElementWrapper.scrollWidth;
    let distanceFromTopToHorizontalViewElementWrapperEnd = horizontalViewSectionFromTop + horizontalViewElementWrapperWidth - window.innerWidth;

    horizontalViewSection.style.height = `${horizontalViewStickyViewport.getBoundingClientRect().height + horizontalViewElementWrapperWidth - window.innerWidth}px`;

    var windowScroll = window.scrollY;
    if (windowScroll >= horizontalViewSectionFromTop && windowScroll <= distanceFromTopToHorizontalViewElementWrapperEnd) {
        horizontalViewElementWrapper.style.transform = `translateX(-${windowScroll - horizontalViewSectionFromTop}px)`;
    }

    if ((document.getElementById('other-skills-start').getBoundingClientRect().left + document.getElementById('other-skills-start').getBoundingClientRect().width / 2) <= window.innerWidth) {
        if (document.getElementById('other-skills-heading').style.transform == "translateY(100%)") {
            document.getElementById('back-end-skills-heading').style.transform = "translateY(-100%)";
            document.getElementById('front-end-skills-heading').style.transform = "translateY(-100%)";
            document.getElementById('back-end-skills-heading').classList.remove("slice");
            document.getElementById('other-skills-heading').style.transform = "";
            document.getElementById('other-skills-heading').classList.add("slice");
        }
    }
    else if ((document.getElementById('back-end-skills-start').getBoundingClientRect().left + document.getElementById('back-end-skills-start').getBoundingClientRect().width / 2) <= window.innerWidth) {
        if (document.getElementById('back-end-skills-heading').style.transform == "translateY(-100%)") {
            document.getElementById('other-skills-heading').style.transform = "translateY(100%)";
            document.getElementById('front-end-skills-heading').style.transform = "translateY(-100%)";
            document.getElementById('other-skills-heading').classList.remove("slice");
            document.getElementById('front-end-skills-heading').classList.remove("slice");
            document.getElementById('back-end-skills-heading').style.transform = "";
            document.getElementById('back-end-skills-heading').classList.add("slice");
        }
        else if (document.getElementById('back-end-skills-heading').style.transform == "translateY(100%)") {
            document.getElementById('front-end-skills-heading').style.transform = "translateY(-100%)";
            document.getElementById('other-skills-heading').style.transform = "translateY(100%)";
            document.getElementById('front-end-skills-heading').classList.remove("slice");
            document.getElementById('other-skills-heading').classList.remove("slice");
            document.getElementById('back-end-skills-heading').style.transform = "";
            document.getElementById('back-end-skills-heading').classList.add("slice");
        }
    }
    else {
        if (document.getElementById('front-end-skills-heading').style.transform == "translateY(-100%)") {
            document.getElementById('back-end-skills-heading').style.transform = "translateY(100%)";
            document.getElementById('other-skills-heading').style.transform = "translateY(100%)";
            document.getElementById('back-end-skills-heading').classList.remove("slice");
            document.getElementById('other-skills-heading').classList.remove("slice");
            document.getElementById('front-end-skills-heading').style.transform = "";
            document.getElementById('front-end-skills-heading').classList.add("slice");
        }
    }
}

var seconds = 0;
function aliveTimeCalculation() {
    seconds++;
    if (seconds < 60)
        document.getElementById('alive-time').innerHTML = `${seconds} ${seconds <= 1 ? 'second' : 'seconds'}`;
    else
        document.getElementById('alive-time').innerHTML = `${Math.floor(seconds / 60)} ${Math.floor(seconds / 60) <= 1 ? 'minute' : 'minutes'} ${seconds % 60 == 0 ? '' : ((seconds % 60) == 1 ? seconds % 60 + ' second' : seconds % 60 + ' seconds')}`;
}

function playDontBlinkAnimationButtonFormation() {
    let characters = document.querySelector('.play-dont-blink-animation-button').getElementsByTagName('span');
    let rotateAngle = 360 / characters.length;
    for (let index = 0; index < characters.length; index++) {
        characters[index].style.transform = `rotate(${index * rotateAngle}deg)`;
    }
}

function toggleMenuButton() {
    let menuView = document.querySelector('.menu-view');
    if (menuView.style.left == '0%') {
        menuView.style.left = '100%';
        let menuIconElements = document.querySelector('.menu-icon').getElementsByTagName('div');
        for (let index = 0; index < menuIconElements.length; index++) {
            menuIconElements[index].style.transition = "background-color 1s ease-in, transform 0.3s ease-in, opacity 0.1s linear 0.3s";
            menuIconElements[index].style.backgroundColor = 'var(--menu-color)';
            if (index == 0) {
                menuIconElements[index].style.removeProperty('top');
                menuIconElements[index].style.transform = "rotate(0deg) translate(-50%, -50%)";
            }
            else if (index == 1) {
                menuIconElements[index].style.opacity = 1;
            }
            else {
                menuIconElements[index].style.removeProperty('top');
                menuIconElements[index].style.transform = "rotate(0deg) translate(-50%, -50%)";
            }
        }
        document.getElementsByTagName('main')[0].style.overflow = 'visible';
    }
    else if ((!menuView.style.left) || menuView.style.left == '100%') {
        menuView.style.left = '0%';
        let menuIconElements = document.querySelector('.menu-icon').getElementsByTagName('div');
        for (let index = 0; index < menuIconElements.length; index++) {
            menuIconElements[index].style.transition = "background-color 0.2s ease-in, transform 0.3s ease-in";
            menuIconElements[index].style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--background-color__primary');
            if (index == 0) {
                menuIconElements[index].style.top = "50%";
                menuIconElements[index].style.transform = "translate(-50%, -50%) rotate(45deg)";
            }
            else if (index == 1) {
                menuIconElements[index].style.opacity = 0;
            }
            else {
                menuIconElements[index].style.top = "50%";
                menuIconElements[index].style.transform = "translate(-50%, -50%) rotate(-45deg)";
            }
        }
        document.getElementsByTagName('main')[0].style.overflow = 'hidden';
    }
}

function scrollToElement(id) {
    toggleMenuButton();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function playDontBlinkAnimation() {
    document.querySelector('.play-dont-blink-animation-wrapper').style.display = 'none';
    dontBlinkAnimation();
}

// Deferred
// var swipeIndex = 0;
// function swipeSlide(right) {
//     swipeIndex = (right ? swipeIndex + 1 : swipeIndex - 1);
//     if (swipeIndex < 0)
//         swipeIndex = 2;
//     else if (swipeIndex > 2)
//         swipeIndex = 0;
//     document.getElementById("ed-slide-" + swipeIndex).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
// }

window.addEventListener('load', onLoadHandler);