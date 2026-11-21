/* Configuration Tailwind de la vitrine.

   Le fichier styles.css (à côté de index.html) est GÉNÉRÉ à partir de ce fichier
   et des classes présentes dans index.html. Il ne se modifie pas à la main.

   Après avoir ajouté ou changé des classes Tailwind dans index.html, régénérez-le
   en lançant cette commande depuis le dossier « Ma vitrine » :

     npx tailwindcss@3.4.17 -c outils/tailwind.config.js -i outils/tailwind.css -o styles.css --minify

   Changer un texte, un numéro ou un lien ne demande aucune régénération. */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'] },
      colors: {
        ink: '#09090B',
        surface: '#121216',
        raised: '#17171C',
        line: 'rgba(255,255,255,0.08)',
        brand: { 400: '#60A5FA', 500: '#3B82F6', 600: '#6366F1' },
        go: { 400: '#34D399', 500: '#10B981' },
        gold: '#E3BD76'
      }
    }
  }
};
