const articles = [
  {
    id: 1,
    title: "Restez motivé pendant les périodes difficiles",
    date: "10-05-2025",
    image: "image/motivation.jpg",
    content: "Découvrez des stratégies pour maintenir votre motivation élevée, même après des échecs."
  },
  {
    id: 2,
    title: "Les bienfaits d'une bonne alimentation pour les sportifs",
    date: "10-05-2025",
    image: "image/alimentation.jpg",
    content: "Découvrez les éléments essentiels à intégrer dans votre alimentation pour améliorer vos performances sportives."
  },
 {
    id: 3,
    title: "Les bienfaits d'une bonne alimentation pour les sportifs",
    date: "10-05-2025",
    image: "image/alimentation.jpg",
    content: "Découvrez les éléments essentiels à intégrer dans votre alimentation pour améliorer vos performances sportives."
  },
  {
    id: 4,
    title: "Les bienfaits d'une bonne alimentation pour les sportifs",
    date: "10-05-2025",
    image: "image/alimentation.jpg",
    content: "Découvrez les éléments essentiels à intégrer dans votre alimentation pour améliorer vos performances sportives."
  },
  {
    id: 5,
    title: "Les bienfaits d'une bonne alimentation pour les sportifs",
    date: "10-05-2025",
    image: "image/alimentation.jpg",
    content: "Découvrez les éléments essentiels à intégrer dans votre alimentation pour améliorer vos performances sportives."
  },
  {
    id: 6,
    title: "Les bienfaits d'une bonne alimentation pour les sportifs",
    date: "10-05-2025",
    image: "image/alimentation.jpg",
    content: "Découvrez les éléments essentiels à intégrer dans votre alimentation pour améliorer vos performances sportives."
  },
];

const params = new URLSearchParams(window.location.search);
const articleId = parseInt(params.get("id"));

const article = articles.find(a => a.id === articleId);

if (article) {
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-date").textContent = "Ajouté le : " + article.date;
  document.getElementById("article-image").src = article.image;
  document.getElementById("article-image").alt = article.title;
  document.getElementById("article-content").textContent = article.content;
} else {
  document.body.innerHTML = "<div class='container'><h2>Article non trouvé</h2><a href='news.html'>← Retour aux articles</a></div>";
}
