'use strict'
console.log("!---->The code has been uploaded!<----!");





document.addEventListener('DOMContentLoaded', function () {



    function fixedMenu(menuBlock, topBlock) {
        const menuPositionY = document.querySelector(menuBlock).getBoundingClientRect().top;
        console.log('menuPositionY');
        console.log(menuPositionY);

        const heightHero = document.querySelector(topBlock).getBoundingClientRect().height;
        console.log('heightHero');
        console.log(heightHero);
        const heightMenu = document.querySelector(menuBlock).getBoundingClientRect().height;




        window.addEventListener('scroll', function () {
            const navbar = document.querySelector(menuBlock).classList;
            const activeClass = "menu__scrolled";


            console.log('Положение Меню');
            console.log(document.querySelector(menuBlock).getBoundingClientRect());
            console.log(menuPositionY);

            if (scrollY > heightHero) {
                navbar.add(activeClass)

                const mainBlock = document.querySelector('.main');
                mainBlock.style.paddingTop = heightMenu + 'px';

                console.log('mainBlock');
                console.log(mainBlock);
            } else {
                const mainBlock = document.querySelector('.main');
                navbar.remove(activeClass)
                mainBlock.removeAttribute("style")
            }
            // 674
            console.log(scrollY);
        })
    };

    fixedMenu('#menu', '.hero');



    /* HUMBURGER MENU */
    function hamburger() {
        const hamburgerButton = document.querySelector('#hamburger-btn');
        const hamburgerLines = document.querySelectorAll('.hamburger__line')
        let animationLast = '';
        console.log(hamburgerLines);


        // EVENTS
        hamburgerLines[0].addEventListener("animationstart", function () {
            console.log('START ANIMATION');
            hamburgerButton.classList.add('_animated')
        });

        hamburgerLines[0].addEventListener("animationend", function () {
            console.log('END ANIMATION');
            hamburgerButton.classList.remove('_animated')
            hamburgerButton.classList.remove('closeAnimation')
            hamburgerButton.classList.remove('openAnimation')
            hamburgerButton.classList.toggle('_open');
        });

        hamburgerButton.onclick = () => {

            if (hamburgerButton.classList.contains('_open') && !hamburgerButton.classList.contains('_animated')) {
                console.log('CLOSED');
                hamburgerClose();
            } else if (!hamburgerButton.classList.contains('_open') && !hamburgerButton.classList.contains('_animated')) {
                console.log('OPENED');
                hamburgerOpen();
            }
        }

        function hamburgerOpen() {
            hamburgerButton.classList.add('openAnimation');
            animationLast = "isOpen";
        }

        function hamburgerClose() {
            hamburgerButton.classList.add('closeAnimation');
            animationLast = "isClose";
        }
















    };
    /* Music player on the site. */
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
    }

    /* Launch functions. */
    hamburger()
    musicPlayer()










});






/* 
let hamburgerOpened = hamburgerButton.classList.contains('openAnimation');
            hamburgerButton.classList.remove('closeAnimation');
            if (!hamburgerOpened) {
                hamburgerButton.classList.add('openAnimation');
            } else {
                hamburgerButton.classList.remove('openAnimation');
            }


            for (let i = 0; i < hamburgerLines.length; i++) {
                const spanLine = hamburgerLines[i];
                spanLine.addEventListener("animationend", function (event) {
                    console.log(this);
                    if (this.classList.contains('hamburger__line--1')) {
                        console.log('1');
                        // this.style.transform = "translateY(8px) rotate(45deg)";
                    } else if (this.classList.contains('hamburger__line--2')) {
                        console.log('2');
                        // this.style.opacity = 0;
                    } else if (this.classList.contains('hamburger__line--3')) {
                        console.log('3');
                        // this.style.transform = "translateY(-8px) rotate(-45deg)";
                    }

                    hamburgerButton.classList.add('_open')
                })
            } */
