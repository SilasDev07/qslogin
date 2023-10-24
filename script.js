let img = document.querySelector('img')
let nav = document.querySelector('nav')
function aparece() {
    nav.style.width = '300px'
    nav.style.height = '100vh'
}
function fecha() {
    nav.style.width = '0px'
}


 let imagens = document.querySelectorAll('.image')
 console.log(imagens)

let flag = true;

function mostraSenha() {
    let input = document.getElementById('senha')
    if (flag == true) {
        imagens[0].style.display = 'none'
        imagens[1].style.display = 'block'
        input.type = 'text'
        flag = false
    } else {
        imagens[0].style.display = 'block'
        imagens[1].style.display = 'none'
        input.type = 'password'
        flag = true;
    }
}
