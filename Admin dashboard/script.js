document.addEventListener('DOMContentLoaded', () => {
    // Configuration du graphique des ventes
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
            datasets: [{
                label: 'Ventes',
                data: [120, 190, 150, 250, 210, 300, 280],
                borderColor: '#2563eb',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.1)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#666'
                    }
                },
                x: {
                    ticks: {
                        color: '#666'
                    }
                }
            }
        }
    });

    // Fonction pour mettre à jour les statistiques
    function updateStats() {
        // Ici vous pouvez ajouter la logique pour mettre à jour les statistiques en temps réel
        // Par exemple, en utilisant des API pour récupérer les données
    }

    // Mettre à jour les statistiques toutes les 5 minutes
    setInterval(updateStats, 300000);

    // Gestionnaire de clic pour les liens du menu
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
