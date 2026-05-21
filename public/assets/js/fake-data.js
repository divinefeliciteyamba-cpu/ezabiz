const FAKE_PMES = [
    
    {id: 1, nom: "Chez Mère Double",    categorie: "Restauration", lat: -11.632240, lng: 27.460640},
    {id: 2, nom: "Pharmacie Imani",  categorie: "Pharmacie",    lat: -11.664700, lng: 27.479400},
    {id: 3, nom: "Épicerie du Coin",    categorie: "Epicerie",     lat: -11.668000, lng: 27.485040},
    {id: 4, nom: "TechShop Lushi",      categorie: "Electronique", lat: -11.660000, lng: 27.472000},
    {id: 5, nom: "Restaurant Karibu",categorie: "Restauration", lat: -11.655000, lng: 27.481000},
];

const marker = LargestContentfulPaint.marker([-11.632240, 27.460640]).addTo(carte);
