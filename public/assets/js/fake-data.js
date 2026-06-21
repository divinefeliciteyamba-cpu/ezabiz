// Création des fausses pmes
const FAKE_PMES = [
    {
        id: 1, 
        nom: "Chez Mère Double",     
        categorie: "Restauration", 
        lat: -11.632240,
        lng: 27.460640,
        telephone: "+243 812 245 678", 
        horaires: "Lun-Sam : 8h00-20h00", 
        photo: "assets/images/chez-mere-double.jpg",
        slogan : "La vraie cuisine congolaise au coeur de Lubumbashi",
        produits: [
            {id: 1, nom: "Poulet à la moambe", prix: 8000, photo: "moambe.jpg"},
            {id: 2, nom: "Riz gras", prix: 5000, photo: "riz.jpg"},
            {id: 3, nom: "Jus de bissap", prix: 1500, photo: "bissap.jpg"}
        ]
    },

    {
        id: 2, nom: "Pharmacie Imani",     
        categorie: "Pharmacie",    
        lat: -11.664700, 
        lng: 27.419400,
        telephone: "+243 999 464 936", 
        horaires: "Lun-Dim : 24h/24, 7j/7", 
        photo: "assets/images/pharmacie.jpg",
        slogan : "Votre santé est un investissement, pas une dépense.",
         produits: [
            {id: 1, nom: "IBUCAP Forte", prix: 7000, photo: "IBUCAP.jpg"},
            {id: 2, nom: "TOUGRIP", prix: 11000, photo: "TOUGRIP.jpg"},
            {id: 3, nom: "FLAGYL", prix: 12500, photo: "FLAGYL.jpg"}
        ]
    },

    {
        id: 3, 
        nom: "Épicerie du Coin",     
        categorie: "Epicerie",     
        lat: -11.648000, 
        lng: 27.485040,
        telephone: "+243 902 100 078", 
        horaires: "Lun-Ven : 8h00-18h00 , Sam : 11h00-17h30", 
        photo: "assets/images/epicerie-du-coin.jpg",
        slogan : " Frais, Locaux et de saison.",
         produits: [
            {id: 1, nom: "Clou de girofle", prix: 2000, photo: "girofle.jpg"},
            {id: 2, nom: "Romarin", prix: 100, photo: "romarin.jpg"},
            {id: 3, nom: "Canelle en poudre", prix: 2500, photo: "bissap.jpg"}
        ]
    },

    {
        id: 4, 
        nom: "TechShop Lushi",      
        categorie: "Electronique", 
        lat: -11.610000, 
        lng: 27.46000,
        telephone: "+243 827 405 000", 
        horaires: "Lun-Sam : 8h00-19h30", 
        photo: "assets/images/technoshop-lushi .jpg",
        slogan : "Restez connecté !",
         produits: [
            {id: 1, nom: "Imprimante 3D", prix: 520000, photo: "moambe.jpg"},
            {id: 2, nom: "Câble RJ45 50m", prix: 230000, photo: "riz.jpg"},
            {id: 3, nom: "Samsung S25 Ultra", prix: 2500000, photo: "bissap.jpg"}
        ]
    },

    {
        id: 5, 
        nom: "Restaurant Karibu",    
        categorie: "Restauration", 
        lat: -11.655000, 
        lng: 27.441000,
        telephone: "+243 843 745 568 , +243 995 120 457", 
        horaires: "Lun-Ven : 8h00-20h30, Sam : 14h30-21h00", 
        photo: "assets/images/restaurant-karibu.jpg",
        slogan : "Manger est une nécessité, savourer c'est de l'art",
         produits: [
            {id: 1, nom: "Poisson braisé", prix: 10000, photo: "moambe.jpg"},
            {id: 2, nom: "Buffet à la congolaise", prix: 50000, photo: "riz.jpg"},
            {id: 3, nom: "Jus de fruits frais", prix: 5000, photo: "bissap.jpg"}
        ]
    },
];
    
