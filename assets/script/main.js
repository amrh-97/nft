'use strict';

const navLinks = document.querySelectorAll('#main__nav ul li a');
const faqBox = document.querySelectorAll('.faq__box');
const faqAnswer = document.querySelectorAll('.faq__ques p');
const faqIcon = document.querySelectorAll('.faq__ques span i:nth-child(2)');
const resNav = document.querySelector('.header__nav');
const navShowBtn = document.querySelector('.nav__icon i:first-child');
const navHideBtn = document.querySelector('.nav__icon i:last-child');

//  Nav Active

navLinks[0].classList.add('active');
navLinks.forEach(li => {
    li.addEventListener('click', () => {
        resetlinks();
        li.classList.add('active');
    })
});

function resetlinks() {
    navLinks.forEach(li => {
        li.classList.remove('active');
    })
};

// Responsive Nav

function resNavShow() {
    resNav.classList.add('active')
    navShowBtn.style.display = 'none';
    navHideBtn.style.display = 'block';
}

function resNavHide() {
    resNav.classList.remove('active')
    navShowBtn.style.display = 'block';
    navHideBtn.style.display = 'none';
}

navLinks.forEach(navli => {
    resNav.classList.remove('active')
    navli.addEventListener('click', () => {
        resNavHide()
    })
})

navShowBtn.addEventListener('click', resNavShow);
navHideBtn.addEventListener('click', resNavHide)

// FAQs Function

function removeActive(element) {
    element.forEach(el => {
        el.classList.remove('active');
    });
}

function faqShow() {
    faqBox.forEach((fbox, index) => {
        fbox.addEventListener('click', () => {
            removeActive(faqAnswer);
            removeActive(faqBox);
            removeActive(faqIcon);
            faqAnswer[index].classList.add('active');
            faqBox[index].classList.add('active');
            faqIcon[index].classList.add('active');
        })
    })
}

faqShow();