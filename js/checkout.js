// Fonction pour mettre à jour le total de la commande
function updateOrderTotal() {
    // Récupérer la valeur de livraison
    let shippingCost = 0;
    if (document.getElementById('express').checked) {
        shippingCost = 10;
    }

    // Mettre à jour l'affichage de la livraison
    document.querySelector('.shipping').textContent = shippingCost + '€';

    // Calculer le nouveau total
    const subtotal = parseFloat(document.querySelector('.subtotal').textContent);
    const total = subtotal + shippingCost;
    document.querySelector('.total').textContent = total + '€';
}

// Écouter les changements de méthode de livraison
document.querySelectorAll('input[name="shipping"]').forEach(radio => {
    radio.addEventListener('change', updateOrderTotal);
});

// Fonction pour valider la commande
function validateOrder() {
    // Vérifier si tous les champs obligatoires sont remplis
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'address',
        'city',
        'postalCode',
        'phone'
    ];

    let isValid = true;
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });

    // Vérifier si une méthode de paiement est sélectionnée
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        alert('Veuillez sélectionner une méthode de paiement');
        isValid = false;
    }

    if (isValid) {
        // Ici vous pouvez ajouter la logique pour envoyer les données au serveur
        alert('Commande validée avec succès !');
        // Redirection vers la page de confirmation
        window.location.href = 'confirmation.html';
    }
}

// Fonction pour valider la commande
function validateOrder() {
    // Enregistrer les informations de livraison
    const shippingInfo = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        phone: document.getElementById('phone').value
    };

    // Vérifier si tous les champs sont remplis
    const requiredFields = Object.values(shippingInfo);
    if (requiredFields.some(field => !field.trim())) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    // Stocker les informations dans le localStorage
    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));

    // Vérifier si une méthode de paiement est sélectionnée
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        alert('Veuillez sélectionner une méthode de paiement');
        return;
    }

    // Ici vous pouvez ajouter la logique pour envoyer les données au serveur
    alert('Commande validée avec succès !');
    // Redirection vers la page de confirmation
    window.location.href = 'confirmation.html';
}

// Initialiser le total au chargement de la page
window.addEventListener('load', updateOrderTotal);
