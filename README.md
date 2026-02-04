\# Mon Jardin - Application de suivi de potager
Application web pour gérer et suivre son jardin potager.

\## Technologies
\- \*\*Backend\*\* : Java avec Maven
\- \*\*Frontend\*\* : React avec Vite

\## Structure du projet
```
mon-jardin/
├── backend/          # API Java/Maven
└── frontend/         # Application React
```

\## Installation

\### Prérequis

\- Java JDK 11+
\- Maven 3.6+
\- Node.js 18+
\- npm

\### Backend
```bash

cd backend

mvn clean install

mvn exec:java

```

\### Frontend
```bash

cd frontend

npm install

npm run dev

```

\## Utilisation

1\. Démarrer le backend (port 8080 par défaut)
2\. Démarrer le frontend (port 5173 par défaut)
3\. Ouvrir http://localhost:5173 dans votre navigateur


\## Fonctionnalités


\- 🌱 Suivi des fruits et légumes (calendrier de semis, plantation, récolte)
\- 🛠️ Gestion du matériel et maintenance
\- 🛒 Liste d'achats de graines (magasins, marques, prix)
\- 📅 Planning et calendrier des tâches
\- 🗺️ Plan du potager interactif
\- 📔 Journal de jardinage et observations
\- 💡 Ressources et conseils de jardinage
\- 📊 Statistiques et analyses (rendements, budget)


\## Développement


\### Lancer en mode développement

\*\*Backend :\*\*
```bash

cd backend

mvn compile

mvn exec:java -Dexec.mainClass="com.jardin.App"

```

\*\*Frontend :\*\*
```bash

cd frontend

npm run dev

```

\## Auteur

    \[Votre nom]

\## Licence



\[Votre choix de licence]

