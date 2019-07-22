import style from '../css/main.scss';
import '../img/vijay.jpg';
import '../img/webpack_1.png';
import { button, para, image2, para2 } from './dom';
const img_ = require('../img/webpack_1.png');
button.addEventListener('click', change_image);

function change_image() {
    // image.src = 'img/webpack_1.png';
    para.textContent = "Hi Vijay!";
    para.style.color = white;
    image2.style.display = block;
    para2.style.display = block;
}