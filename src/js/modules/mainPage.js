function mainPage() {
    const burgerBtn = document.querySelector('.header_burger')
    const burgerMenu = document.querySelector('.header_nav')
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        burgerMenu.classList.toggle('active')
    })
}

export default mainPage;
