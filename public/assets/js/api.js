// Fonctionss partagées pour parler à l'api
// Utilisé par le dev 3 pour le dashboard et moi (dev 4) pour le client

const API_URL = 'https://ezabiz-production.up.railway.app';
 // PME

 function getPMEs() {
    return fetch(API_URL + 'api/pme')
    .then(function(response) {
        return response.json();
    })
 }

 function getPMEById(id) {
    return fetch(API_URL + '/api/produits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
 }

 function supprimerProduit(id) {
    const token = localStorage.getItem('token');
    return fetch(API_URL + '/api/produits/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(function(response) {
        return response.json();
    })
 }

 function mettreAJourStock(id, stock) {
    const token = localStorage.getItem('token');
    return fetch(API_URL + '/api/produits/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token 
        },
        body: JSON.stringify({stock:stock})
    })
    .then(function(response) {
        return response.json();
    })
 }

 // Commandes

 function creerCommandes(data) {
    const token = localStorage.getItem('token');
    return fetch(API_URL + '/api/commandes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token 
        },
        body:JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
 }

 function getCommandesByPME(pmeId) {
    const token = localStorage.getItem('token');
    return fetch(API_URL + '/api/commandes?pme_id=' + pmeId, {
         headers: {
            'Authorization': 'Bearer ' + token 
        }
    })
    .then(function(response) {
        return response.json();
    })
 }

function getCommandeById(id) {
    return fetch(API_URL + '/api/commandes/' + id)
    .then(function(response) {
        return response.json();
    })
}

function changerStatutCommande(id, statut) {
    const token = localStorage.getItem('token');
    return fetch(API_URL + '/api/commandes/' + id, {
        method: 'PATCH',
        headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + token  
        },
        body:JSON.stringify({statut:statut})
    })
    .then(function(response) {
        return response.json();
    })
}

// CRM 

function getClientsByPME(pmeId) {
    const token = localStorage.getItem('token');
    return fetch(API_URL + '/api/clients?pme_id=' + pmeId, {
        headers: {
            'Authorization': 'Bearer ' + token 
        }
    })
    .then(function(response) {
        return response.json();
    })
}