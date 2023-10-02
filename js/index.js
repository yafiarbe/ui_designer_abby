'use strict'
console.log("Код загружен");


const musicBlockLoader = document.querySelector('.music_block__loader');
console.log(musicBlockLoader);
const musicBlockStroke = document.querySelectorAll('.music_block__stroke');
console.log(musicBlockStroke);
const music = document.querySelector('#start-music');
console.log(music);

music.onloadeddata = function () {

};

musicBlockLoader.onclick = () => {
    toggleMusic(music)
}




/* Запус музыки на сайте */
function toggleMusic(soundTrack) {
    checkMusic(soundTrack);
    function checkMusic(currentMusic) {
        if (check(currentMusic)) {
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
    function check(check) {
        return !check.paused
    };
}