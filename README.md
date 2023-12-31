# So'Permis

So'Pemris est une auto école située au Havre. Dans le cadre d'un projet académique, nous avons réalisé un site web pour cette entreprise en prenant en compte les besoins du client.
Nous sommes une équipe de 5 étudiants en 3ème année de BUT Informatique pour une durée de 3 semaines. Nous avons travaillé avec un groupe d'étudiant du département Techniques Commerciales qui ont démarché une entreprise pour faire un recueil de besoin. Nous avons reçu les besoins afin de les analyser et nous avons fait un cahier des charges techniques. Après avoir terminé une phase de conception, nous avons développé une solution web pour l'auto école.

Dans ce texte, vous découvrirez comment installer et lancer notre projet.


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
   
        cd backend
        npm install

4. Depuis le terminal de frontend, démarrez le serveur du front-end :
   
        npm run dev
    
5. Depuis le terminal de backend, démarrez le serveur du back-end :
   
        node ace serve --watch

### Accédez au projet

Dans votre navigateur, accédez à ce lien : https://localhost:5173/.

Vous devriez avoir accès au site sans problème !
