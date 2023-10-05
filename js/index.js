'use strict'
console.log("!---->The code has been uploaded!<----!");





document.addEventListener('DOMContentLoaded', function () {

    /* ============== FIXED MENU ============== */
    function fixedMenu(menuBlock, topBlock) {
        const heightHero = document.querySelector(topBlock).getBoundingClientRect().height;
        const heightMenu = document.querySelector(menuBlock).getBoundingClientRect().height;
        const mainBlock = document.querySelector('body');
        const navbar = document.querySelector(menuBlock).classList;

        window.addEventListener('scroll', function () {
            const activeClass = "menu__scrolled";

            if (scrollY > heightHero) {
                navbar.add(activeClass);
                mainBlock.style.paddingTop = heightMenu + 'px';

            } else {
                navbar.remove(activeClass);
                mainBlock.removeAttribute("style");
            };
        });
    };

    fixedMenu('#menu', '.hero');



    /* ============== HUMBURGER MENU ============== */
    function hamburger() {
        const hamburgerButton = document.querySelector('#hamburger-btn');
        const hamburgerLines = document.querySelectorAll('.hamburger__line');
        let animationLast = '';
        const pageBody = document.querySelector('.body');
        const mainMenuNav = document.querySelector('.menu__nav');

        // EVENTS
        hamburgerLines[0].addEventListener("animationstart", function () {
            hamburgerButton.classList.add('_animated');
        });

        hamburgerLines[0].addEventListener("animationend", function () {
            hamburgerButton.classList.remove('_animated');
            hamburgerButton.classList.remove('closeAnimation');
            hamburgerButton.classList.remove('openAnimation');
            hamburgerButton.classList.toggle('_open');
        });

        hamburgerButton.onclick = () => {
            scrollFixTopScroll();
            if (hamburgerButton.classList.contains('_open') && !hamburgerButton.classList.contains('_animated')) {
                hamburgerClose();
            } else if (!hamburgerButton.classList.contains('_open') && !hamburgerButton.classList.contains('_animated')) {
                hamburgerOpen();
            };
        };

        function scrollFixTopScroll() {
            const heightHero = document.querySelector('.hero').getBoundingClientRect().height;

            if (scrollY < heightHero && !hamburgerButton.classList.contains('_open')) {
                window.scrollTo({
                    top: heightHero,
                    behavior: "smooth",
                });
            };
        };


        function hamburgerOpen() {
            hamburgerButton.classList.add('openAnimation');
            pageBody.classList.add('_overflow_hidden')
            animationLast = "isOpen";
            mainMenuNav.classList.add('_top-0')
        };

        function hamburgerClose() {
            hamburgerButton.classList.add('closeAnimation');
            pageBody.classList.remove('_overflow_hidden')
            animationLast = "isClose";
            mainMenuNav.classList.remove('_top-0')
        };

        function onMenuLinkClick(e) {
            const mainMenuLinks = document.querySelectorAll('.menu__link');

            for (const iterator of mainMenuLinks) {
                iterator.addEventListener('click', function () {
                    hamburgerClose()
                })
            }
        }

        onMenuLinkClick()

    };

    hamburger();



    /* ============== Music player on the site. ============== */
    function musicPlayer() {
        const musicBlockLoader = document.querySelector('.music_block__loader');
        const musicBlockStroke = document.querySelectorAll('.music_block__stroke');
        const music = document.querySelector('#start-music');
        const musicTitle = document.querySelector('.music__text');
        console.log(musicTitle.style);

        musicBlockLoader.onclick = () => {
            toggleMusic(music)
        }

        function toggleMusic(soundTrack) {
            checkMusic(soundTrack);
            function checkMusic(currentMusic) {
                if (checker(currentMusic)) {
                    music.pause()
                    musicTitle.style.opacity = 1;
                    console.log('Is Paused');
                    for (const iterator of musicBlockStroke) {
                        iterator.classList.remove('music_is_play');
                    }
                } else {
                    console.log('Is Play');
                    music.play();
                    musicTitle.style.opacity = 0;
                    for (const iterator of musicBlockStroke) {
                        iterator.classList.add('music_is_play');
                    }
                }
            };
            function checker(check) {
                return !check.paused
            };
        }
    };

    musicPlayer();

});
