// Applique le thème saauvegardé dès que possible (avant l'affichage)
(function() {
    const themeSauvegarde = localStorage.getItem('ezabiz_theme') || 'light';
    if(themeSauvegarde === 'dark') {
        document.documentElement.setAttribute('data-theme','data');
    }
})();

function basculerTheme() {
    const themeActuel = document.documentElement.getAttribute('data-theme');
    const nouveauTheme = themeActuel === 'dark' ? 'light' : 'dark';

    if(nouveauTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    localStorage.setItem('ezabiz_theme', nouveauTheme);
    mettreAJourIconeBouton(nouveauTheme);
}

function mettreAJourIconeBouton(theme) {
    const bouton = document.getElementById('theme-toggle');
    if(bouton) {
        bouton.textContent = theme === 'dark'?'☀️':'🌙';
    }
}

// Création du bouton flottant automatiquement si la page n'en a pas déjà un
document.addEventListener('DOMContentLoaded', function() {
    let bouton = document.getElementById('theme-toggle');

    if(!bouton) {
        bouton = document.createElement('button');
        bouton.id = 'theme-toggle';
        bouton.className = 'theme-toggle'
        bouton.setAttribute('aria-label','Basculer le mode clais/sombre');
        document.body.appendChild(bouton);
    }

    bouton.addEventListener('click', basculerTheme);

    const themeActuel = document.documentElement.getAttribute('data-theme') === 'dark'?'dark':'light';
    mettreAJourIconeBouton(themeActuel);
})
