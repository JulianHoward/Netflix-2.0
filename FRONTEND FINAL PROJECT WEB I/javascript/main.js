
const fila = document.querySelector('.contenedor-carrusel');
const series = document.querySelectorAll('.serie');

const flechaIzq = document.getElementById('arrow-left');
const flechaDer = document.getElementById('arrow-right');

// Listener para flechas: izquierda y derecha 
flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

flechaIzq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// Calculando el número de pestañas del carrusel
const numeroPestanhas = Math.ceil(series.length / 5);

for(let i = 0; i < numeroPestanhas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}


// Opción hover de cada imagen
series.forEach((serie) => {
    serie.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            series.forEach(serie => serie.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    series.forEach(serie => serie.classList.remove('hover'));
});
