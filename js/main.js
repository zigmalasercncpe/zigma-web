// ===== ZIGMA LASER - Interactividad =====

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Header con sombra al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.style.borderBottomColor = window.scrollY > 40 ? 'rgba(255,159,28,0.35)' : 'rgba(255,159,28,0.15)';
});

// Formulario de cotización -> abre WhatsApp con el mensaje
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const f = new FormData(this);
  const mensaje =
    'Hola Zigma Laser, quiero una cotización:\n' +
    'Nombre: ' + f.get('nombre') + '\n' +
    'WhatsApp: ' + f.get('telefono') + '\n' +
    'Correo: ' + (f.get('email') || '-') + '\n' +
    'Producto: ' + (f.get('tipo') || '-') + '\n' +
    'Detalle: ' + f.get('mensaje');
  const url = 'https://wa.me/51999999999?text=' + encodeURIComponent(mensaje);
  window.open(url, '_blank');
  this.reset();
  alert('¡Gracias! Te redirigimos a WhatsApp para continuar. 📲');
});