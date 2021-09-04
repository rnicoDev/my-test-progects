function readMoreLess() {
    let dots = document.getElementById('dots')
    let more = document.getElementById('moreText')
    let readBtn = document.getElementById('readMore-btn')


    if(dots.style.display === 'none') {
       dots.style.display = 'inline';
       more.style.display = 'none';
       readBtn.innerHTML = "Read More";
    }else{
        dots.style.display = 'none';
        more.style.display = 'inline';
        readBtn.innerHTML = "Read Less";
    }
}