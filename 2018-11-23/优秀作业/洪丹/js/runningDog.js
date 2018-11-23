(function() {
    let box =  document.getElementsByClassName('box')[0];
    let runningDog = document.getElementById('runningDog');
    let x = 0, y = 128,
        left = 10, sign = true;
        allWidth = box.clientWidth - runningDog.clientWidth - 10;
    setInterval(function() {
        if(sign) {
            x = (++x) % 4;
            y = 128;
            left += 10;
        } else {
            x = (++x) % 4;
            y = 64;
            left -= 10;
        }
        if(left < 10 || left > allWidth) sign = !sign;
        runningDog.style.backgroundPosition = `-${x * 64}px -${y}px`;
        runningDog.style.left = left + 'px';
    }, 185);
})();