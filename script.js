
let isLightTheme;
let isOpenExitButton = false;

if(!localStorage.getItem('check')) {
    isLightTheme = true;
} else {
    let isLightThemeValue = localStorage.getItem('check');
    if(isLightThemeValue === 'false') {
        isLightTheme = false;
    } else {
        isLightTheme = true;
    }
    getTheme();
}

if(!localStorage.getItem('auth')) {
    authLinks();
} else {
    document.querySelector('.nav-menu a:nth-child(4)').innerHTML = '<span>Kristina</span>'
    menuLinks();
}

function changeTheme() {
    isLightTheme = !isLightTheme;
    localStorage.setItem('check', isLightTheme);
    if(isLightTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme')

        document.querySelector('.exit-button').classList.remove('dark-theme-card');
        document.querySelector('.exit-button').classList.add('light-theme-card');

        const headerText = document.querySelectorAll('.nav-menu a');

        for(let element of headerText) {
            element.classList.remove('dark-footer-theme');
            element.classList.add('light-footer-theme');
        }

        const footerText = document.querySelectorAll('.footer-nav a');

        for(let element of footerText) {
            element.classList.remove('dark-footer-theme');
            element.classList.add('light-footer-theme');
        }
       

        const cardInfo = document.querySelectorAll('.card-info');
        const loadInfo = document.querySelectorAll('.load-info');
        const cardFile = document.querySelectorAll('.card-file');

        for(let element of cardInfo) {
            element.classList.remove('dark-theme-card');
            element.classList.add('light-theme-card');

            element.querySelector('.button-info-card').classList.remove('dark-theme-button');
            element.querySelector('.button-info-card').classList.add('light-theme-button');
        }

        for(let element of loadInfo) {
            element.classList.remove('dark-theme-card');
            element.classList.add('light-theme-card');

            element.querySelector('.button-info-card').classList.remove('dark-theme-button');
            element.querySelector('.button-info-card').classList.add('light-theme-button');
        }

        for(let element of cardFile) {
            element.classList.remove('dark-theme-card');
            element.classList.add('light-theme-card');
        }

        const svg = document.querySelectorAll('svg');

        for(let element of svg) {
            element.classList.remove('light-svg');
            element.classList.add('dark-svg');
        }

        if(document.querySelector('.kostra-img')) {
            document.querySelector('.kostra-img').src ='assets/img/kostra.png';
        }
        document.querySelector('.logo').src ='assets/img/logo.png';
        document.querySelector('.change-button').src ='assets/img/button-change-background-icon.png';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme')

        document.querySelector('.exit-button').classList.remove('light-theme-card');
        document.querySelector('.exit-button').classList.add('dark-theme-card');

        const headerText = document.querySelectorAll('.nav-menu a');

        for(let element of headerText) {
            element.classList.remove('light-footer-theme');
            element.classList.add('dark-footer-theme');
        }

        const footerText = document.querySelectorAll('.footer-nav a');

        for(let element of footerText) {
            element.classList.remove('light-footer-theme');
            element.classList.add('dark-footer-theme');
        }

        const cardInfo = document.querySelectorAll('.card-info');
        const loadInfo = document.querySelectorAll('.load-info');
        const cardFile = document.querySelectorAll('.card-file');

        for(let element of cardInfo) {
            element.classList.remove('light-theme-card');
            element.classList.add('dark-theme-card');

            element.querySelector('.button-info-card').classList.remove('light-theme-button');
            element.querySelector('.button-info-card').classList.add('dark-theme-button');
        }

        for(let element of loadInfo) {
            element.classList.remove('light-theme-card');
            element.classList.add('dark-theme-card');

            element.querySelector('.button-info-card').classList.remove('light-theme-button');
            element.querySelector('.button-info-card').classList.add('dark-theme-button');
        }

        for(let element of cardFile) {
            element.classList.remove('light-theme-card');
            element.classList.add('dark-theme-card');
        }

        const svg = document.querySelectorAll('svg');

        for(let element of svg) {
            element.classList.remove('dark-svg');
            element.classList.add('light-svg');
        }

        if(document.querySelector('.kostra-img')) {
            document.querySelector('.kostra-img').src ='assets/img/kostra-white.png';
        }
        document.querySelector('.logo').src ='assets/img/logo-white.png';
        document.querySelector('.change-button').src ='assets/img/button-change-background-icon-white.png';
    }
   
    
}

function getTheme() {
    if(isLightTheme) {
        console.log('hello', isLightTheme);
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme')

        const headerText = document.querySelectorAll('.nav-menu a');

        for(let element of headerText) {
            element.classList.remove('dark-footer-theme');
            element.classList.add('light-footer-theme');
        }

        const footerText = document.querySelectorAll('.footer-nav a');

        for(let element of footerText) {
            element.classList.remove('dark-footer-theme');
            element.classList.add('light-footer-theme');
        }
       

        const cardInfo = document.querySelectorAll('.card-info');
        const loadInfo = document.querySelectorAll('.load-info');
        const cardFile = document.querySelectorAll('.card-file');

        for(let element of cardInfo) {
            element.classList.remove('dark-theme-card');
            element.classList.add('light-theme-card');

            element.querySelector('.button-info-card').classList.remove('dark-theme-button');
            element.querySelector('.button-info-card').classList.add('light-theme-button');
        }

        for(let element of loadInfo) {
            element.classList.remove('dark-theme-card');
            element.classList.add('light-theme-card');

            element.querySelector('.button-info-card').classList.remove('dark-theme-button');
            element.querySelector('.button-info-card').classList.add('light-theme-button');
        }

        for(let element of cardFile) {
            element.classList.remove('dark-theme-card');
            element.classList.add('light-theme-card');
        }

        const svg = document.querySelectorAll('svg');

        for(let element of svg) {
            element.classList.remove('light-svg');
            element.classList.add('dark-svg');
        }

        if(document.querySelector('.kostra-img')) {
            document.querySelector('.kostra-img').src ='assets/img/kostra.png';
        }
        document.querySelector('.logo').src ='assets/img/logo.png';
        document.querySelector('.change-button').src ='assets/img/button-change-background-icon.png';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme')

        const headerText = document.querySelectorAll('.nav-menu a');

        for(let element of headerText) {
            element.classList.remove('light-footer-theme');
            element.classList.add('dark-footer-theme');
        }

        const footerText = document.querySelectorAll('.footer-nav a');

        for(let element of footerText) {
            element.classList.remove('light-footer-theme');
            element.classList.add('dark-footer-theme');
        }

        const cardInfo = document.querySelectorAll('.card-info');
        const loadInfo = document.querySelectorAll('.load-info');
        const cardFile = document.querySelectorAll('.card-file');

        for(let element of cardInfo) {
            element.classList.remove('light-theme-card');
            element.classList.add('dark-theme-card');

            element.querySelector('.button-info-card').classList.remove('light-theme-button');
            element.querySelector('.button-info-card').classList.add('dark-theme-button');
        }

        for(let element of loadInfo) {
            element.classList.remove('light-theme-card');
            element.classList.add('dark-theme-card');

            element.querySelector('.button-info-card').classList.remove('light-theme-button');
            element.querySelector('.button-info-card').classList.add('dark-theme-button');
        }

        for(let element of cardFile) {
            element.classList.remove('light-theme-card');
            element.classList.add('dark-theme-card');
        }

        const svg = document.querySelectorAll('svg');

        for(let element of svg) {
            element.classList.remove('dark-svg');
            element.classList.add('light-svg');
        }

        if(document.querySelector('.kostra-img')) {
            document.querySelector('.kostra-img').src ='assets/img/kostra-white.png';
        }
        document.querySelector('.logo').src ='assets/img/logo-white.png';
        document.querySelector('.change-button').src ='assets/img/button-change-background-icon-white.png';
    }
   
}

function authLinks() {
    const links = document.querySelectorAll('.nav-menu a');

    let i = 0;

    for(let element of links) {
        element.href = 'Poland/autorize.html';
        i++;
        if (i===4) break;
    }

    document.querySelector('.footer-nav a:last-child').href = 'Poland/autorize.html';
}

function menuLinks() {
    const headerLinks = ['Poland/kostry.html', 'Poland/open-api.html', 'Poland/rest-api.html'];

    let i = 0;

    const links = document.querySelectorAll('.nav-menu a');

    for(let element of links) {
        element.href = headerLinks[i];
        i++;
        if (i===2) break;
    }

    console.log(document.querySelectorAll('.nav-menu a'));
    document.querySelector('.footer-nav a:last-child').href = 'Poland/pomoc.html';
}

function authUser() {
    const email = document.querySelector('.email-input');
    const password = document.querySelector('.password-input');

    if(email.value && password.value) {
        localStorage.setItem('auth', {
            login:email.value,
            password: password.value
        })

        location.href = 'Poland/index.html';

    }
}

function openExitButton() {
    isOpenExitButton = !isOpenExitButton;
    if(isOpenExitButton && localStorage.getItem('auth')){
        document.querySelector('.exit-button').classList.add('visible-exit-button');
    } else {
        document.querySelector('.exit-button').classList.remove('visible-exit-button');
    }
}

function exitProfile() {
    localStorage.removeItem('auth');
    location.href = 'Poland/index.html';
}