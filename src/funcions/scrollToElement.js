// scrollSmooth.js

/**
 * Desplaza la página suavemente hasta el elemento con el id especificado.
 * @param {string} targetId - El id del elemento al que deseas desplazarte.
 */
export function scrollToElement(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
