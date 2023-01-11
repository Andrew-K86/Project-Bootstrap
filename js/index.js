document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('#navbar')
    function addBackground() {
        if (window.scrollY >= 100) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addBackground)
})

const collapse = () => {
    const burgerBar = document.querySelector('.collapse')
    if (burgerBar.classList.contains('show')) {
        burgerBar.classList.remove('show')
    }
}
document.addEventListener('click', collapse);

