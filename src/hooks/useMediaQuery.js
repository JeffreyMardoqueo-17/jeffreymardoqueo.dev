import { useState, useEffect } from 'react';

// Hook personalizado para detectar cambios en una media query
const useMediaQuery = (query) => {
    // Estado para almacenar si la media query se cumple o no
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Función que se ejecutará cuando la media query cambie
        const handler = (event) => setMatches(event.matches);

        // Se crea un objeto MediaQueryList para evaluar la media query
        const mediaQuery = window.matchMedia(query);
        
        // Se establece el estado inicial de matches
        setMatches(mediaQuery.matches);

        // Se añade un event listener para detectar cambios en la media query
        mediaQuery.addEventListener('change', handler);

        // Se retorna una función de limpieza para remover el event listener
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]); // La media query se pasa como dependencia para reevaluar el efecto cuando cambie

    // Retorna el estado actual de la media query (true si se cumple, false si no)
    return matches;
};

export default useMediaQuery;
