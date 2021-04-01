window.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btn'),
        modal = document.querySelector('.modal'), 
        close = document.querySelector('.modal-times');



    btn.addEventListener('click', function() {
        modal.style.display = 'block';
        this.style.display = 'none'; 
        document.body.style.overflow = 'hidden'; 
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none'; 
        btn.style.display = 'block'; 
        document.body.style.overflow = ''; 
    });
});