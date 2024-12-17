document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagen-modal');
    const cerrar = document.getElementById('cerrar');

    // Todas las miniaturas
    document.querySelectorAll('.certificado').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            imagenModal.src = img.src; // Usamos la misma imagen
        });
    });

    // Cerrar el modal
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// Certificado laboral
const galeriaLaboral = document.querySelector("#galeria-laboral img");
const modalLaboral = document.querySelector("#modal-laboral");
const imagenModalLaboral = document.querySelector("#imagen-modal-laboral");
const cerrarLaboral = document.querySelector("#cerrar-laboral");

galeriaLaboral.addEventListener("click", () => {
    imagenModalLaboral.src = galeriaLaboral.src;
    modalLaboral.classList.add("visible");
});

cerrarLaboral.addEventListener("click", () => {
    modalLaboral.classList.remove("visible");
});


//// Alternar Estrellas
document.querySelectorAll('.tecnologia').forEach(tecnologia => {
    tecnologia.addEventListener('click', () => {
        const estrellas = tecnologia.querySelector('.estrellas');
        // Alternar visibilidad de las estrellas
        if (estrellas.style.display === 'none' || estrellas.style.display === '') {
            estrellas.style.display = 'block';
        } else {
            estrellas.style.display = 'none';
        }
    });
});
