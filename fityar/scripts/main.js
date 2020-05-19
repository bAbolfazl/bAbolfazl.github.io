$(document).ready(function () {
    console.log('running main js')

    // vars
    const hamberger = document.querySelector('#hambergerBtn')
    const mobileOverlay = document.querySelector('#mobileOverlay')
    const mobileSlidingMenu = document.querySelector('#mobileSlidingMenu')
    const mobileCallMenuBtn = document.querySelector('#mobile-call-menu__btn')

    let mobileSlidingMenu_open = false

    // funcs
    const handle_hamberger_click = () => {
        console.log(handle_hamberger_click)
        mobileSlidingMenu_open = true
        mobileSlidingMenu.classList.add('show')
        mobileOverlay.classList.add('show')
    }
    const handle_outsideSlidingMenu_click = (e) => {
        if (!mobileSlidingMenu_open) return

        console.log(handle_outsideSlidingMenu_click)
        console.log(mobileSlidingMenu_open)
        const inside = mobileSlidingMenu.contains(e.target) || hamberger.contains(e.target)
        if (!inside) {
            mobileSlidingMenu.classList.remove('show')
            mobileOverlay.classList.remove('show')
            mobileSlidingMenu_open = false

        }
    }
    const handle_mobileCallMenuBtn_click = () => {
        console.log(handle_mobileCallMenuBtn_click)
        const mobileCallMenuHidden = document.querySelector('#mobile-call-menu__hidden')
        mobileCallMenuHidden.classList.toggle('show')
    }

    // events
    hamberger.addEventListener('click', handle_hamberger_click)
    document.addEventListener('click', handle_outsideSlidingMenu_click)
    mobileCallMenuBtn.addEventListener('click', handle_mobileCallMenuBtn_click)
})