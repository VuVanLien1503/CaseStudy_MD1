let current = 1;
let numIMG = 4;
let start = 0;
let stop = 5;
function switchImage() {
    current++;
    // Thay thế hình
    document.images['myimage'].src = '../img/imgSell/img_' + current + '.png';
    // Gọi lại hàm nếu thõa đk
    if (current < numIMG) {
        setTimeout("switchImage()", 2000);
    } else {
        current = 1;
        setTimeout("switchImage()", 2000);
    }
}
setTimeout("switchImage()", 2000);

function imgSell() {
    start++;
    document.images['row-life-dow'].src = '../img/imgSell/Advertisement/img' + start + '.jpg';
    if (start < stop) {
        setTimeout("imgSell()", 1000);
    } else {
        start = 0;
        setTimeout("imgSell()", 1000);
    }
}
setTimeout("imgSell()", 1000);