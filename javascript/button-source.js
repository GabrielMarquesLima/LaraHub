let standardSizeText = 24;

function moreText() {
    standardSizeText++;
    adjustFontSize();
}

function smallText() {
    standardSizeText--;
    adjustFontSize();
}

function adjustFontSize() {
    let textElements = document.getElementsByClassName('text');
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.fontSize = standardSizeText + 'px';
    }
}

document.getElementById('more-text').onclick = moreText;
document.getElementById('small-text').onclick = smallText;