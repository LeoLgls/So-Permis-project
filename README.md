# So'Permis

So'Pemris est une auto école située au Havre. Dans le cadre d'un projet académique, nous avons réalisé un site pour cette entreprise en prenant en compte les besoins du client.
Dans ce texte, vous découvrirez comment lancer notre projet.

## Prérequis

Avant de commencer, assurez-vous d'avoir Node.js et npm installés sur votre machine. 
Si ce n'est pas le cas, vous pouvez les télécharger et les installer en suivant les instructions disponibles sur le site officiel de  [Node.js](https://nodejs.org).

## Installation

Clonez le dépôt depuis GitHub :
    
    
    git clone https://github.com/LeoLgls/So-Permis-project.git
    

## Lancez le projet

> [!NOTE]
> Pour lancer le projet localement, il vous faudra utiliser deux terminaux 

### Ouvrez le projet

1. Accédez au répertoire du projet :
    
    cd So-Permis-project

2. Installez les dépendances du front-end :

    cd frontend
    npm install

3. Depuis un second terminal, installez les dépendances du back-end :
    ```bash
    cd backend
    npm install```

6. Depuis le terminal de frontend, démarrez le serveur du front-end :
    ```bash
    npm run dev```
    
6. Depuis le terminal de backend, démarrez le serveur du back-end :
    ```bash
    node ace serve --watch```

### Accédez au projet

Dans votre navigateur, accédez à ce lien : https://localhost:5173/.

Vous devriez avoir accès au site sans problème !
