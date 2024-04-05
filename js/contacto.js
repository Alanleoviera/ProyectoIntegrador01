function start() {
    console.warn( document.querySelector('title').innerText )
}

  document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('contact-form');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });
