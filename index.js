let btn = document.querySelector('.button');
btn.addEventListener('click', function(){
    const btnFrase = btn.querySelector('.button__pokakat');
    btn.classList.toggle('button_active');
    btnFrase.remove();
});

