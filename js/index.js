'use strict'
console.log("!---->The code has been uploaded!<----!");

document.addEventListener('DOMContentLoaded', function () {

    /* Music player on the site. */
    function musicPlayer() {
        const musicBlockLoader = document.querySelector('.music_block__loader');
        const musicBlockStroke = document.querySelectorAll('.music_block__stroke');
        const music = document.querySelector('#start-music');

        musicBlockLoader.onclick = () => {
            toggleMusic(music)
        }

        function toggleMusic(soundTrack) {
            checkMusic(soundTrack);
            function checkMusic(currentMusic) {
                if (checker(currentMusic)) {
                    music.pause()
                    console.log('Is Paused');
                    for (const iterator of musicBlockStroke) {
                        iterator.classList.remove('music_is_play')
                    }
                } else {
                    console.log('Is Play');
                    music.play();
                    for (const iterator of musicBlockStroke) {
                        iterator.classList.add('music_is_play')
                    }
                }
            };
            function checker(check) {
                return !check.paused
            };
        }
    }

    /* Launch functions. */
    musicPlayer()

});