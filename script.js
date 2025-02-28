let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Fechar o menu ao clicar em um link (para mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Função para rolar os projetos horizontalmente
function scrollProjects(direction) {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const scrollAmount = 300; // Ajuste conforme necessário
    projectsWrapper.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Adicionar classe 'active' ao link da seção visível
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const targetLink = document.querySelector(`header nav a[href*=${id}]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });
};

// Alternar o menu mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};