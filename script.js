
const contents = document.querySelectorAll('.content');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top;

        if (contentTop < triggerBottom) {
            console.log('Adicionando show'); 
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

showOnScroll();
