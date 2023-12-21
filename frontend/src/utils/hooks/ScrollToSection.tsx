import { useEffect } from 'react';

const useScrollToSection = () => {
    useEffect(() => {
        // Récupérez l'ancrage depuis l'URL et faites défiler vers la section correspondante
        const hash = (window.location.hash.substr(1) || '') as string;
        if (hash) {
            ScrollToSection(hash);
        }
    }, []);

    const ScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView();
        }
    };

    return ScrollToSection; // Retournez directement la fonction
};

export default useScrollToSection;
