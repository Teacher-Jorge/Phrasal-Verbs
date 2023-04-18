const put = document.getElementById('put')
const putz = document.getElementById('putz')
const pan = document.getElementById('pan')

let translate = document.getElementById('translate')

putz.addEventListener('click', function() {
    let right = document.getElementById('right')
    right.play()
    translate.style.visibility = 'visible'
    let click1 = document.getElementById('click1')
    click1.play()
    let sentence = document.getElementById('sentence')
    sentence.innerText = 'putzing around.'
    putz.style.backgroundColor = 'lime'
    putz.style.color = 'green'
    put.disabled = 'true'
    pan.disabled = 'true'
    putz.disabled = 'true'
})

put.addEventListener('click', function() {
    let click2 = document.getElementById('click2')
    click2.play()
    let oops1 = document.getElementById('oops1')
    oops1.play()
    let img1 = document.getElementById('img1')
    img1.style.opacity = '0'
    let img2 = document.getElementById('img2')
    img2.style.opacity = '1'
    setTimeout(() => {
        img1.style.opacity = '1'
        img2.style.opacity = '0'
    }, 500);
    put.style.backgroundColor = 'red'
    put.style.color = 'yellow'
    put.disabled = 'true'
})

pan.addEventListener('click', function() {
    let click3 = document.getElementById('click3')
    click3.play()
    let oops2 = document.getElementById('oops2')
    oops2.play()
    let img1 = document.getElementById('img1')
    img1.style.opacity = '0'
    let img2 = document.getElementById('img2')
    img2.style.opacity = '1'
    img2.style.opacity = '1'
    setTimeout(() => {
        img1.style.opacity = '1'
        img2.style.opacity = '0'
    }, 500);
    pan.style.backgroundColor = 'red'
    pan.style.color = 'yellow'
    pan.disabled = 'true'
})

translate.addEventListener('click', function() {
    let audio = document.getElementById('audio')
    audio.play()
    let click2 = document.getElementById('click2')
    click2.play()
    let sentence = document.getElementById('sentence')
    translate.innerText = 'Ela tá afim de não fazer nada.'
    setTimeout(() => {
        translate.innerHTML = 'Translate and Listen'
    }, 2000);
})

