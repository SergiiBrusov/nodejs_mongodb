# NoSQL avec MongoDB

Installation et utilisation d'une base de donnée non relationnelle dans un projet nodeJS.
Le choix du type de base se porte sur MongoDB aussi très utilisée dans des projets Python (Django)
Alternatives : Redis,Cassendra

## Différences principales avec MySQL

1. Structure des données

MySQL : C'est une base de données relationnelle (SQL) qui stocke les données dans des tables organisées en lignes et colonnes, avec des relations définies entre elles. Les structures sont fixes et imposées par un schéma (ou modèle), ce qui signifie que chaque table doit suivre une structure bien définie.
MongoDB : C'est une base de données NoSQL de type document qui stocke les données sous forme de documents JSON (ou BSON, une version binaire de JSON). Les documents peuvent avoir une structure flexible, ce qui permet d'ajouter ou de supprimer des champs sans affecter les autres documents.

2. Schéma et Flexibilité

MySQL : Le schéma est rigide. Toute modification nécessite de redéfinir le schéma et, potentiellement, de migrer les données. Cela garantit une structure cohérente mais rend plus difficile la gestion de données changeantes.
MongoDB : Le schéma est flexible, ce qui facilite les changements structurels et permet de stocker des données non uniformes. Il est donc adapté aux applications évolutives, où la structure des données peut varier.

3. Relations entre les données

MySQL : Supporte les relations entre tables (relations 1:1, 1 , et N ) grâce aux clés étrangères et aux jointures, ce qui est idéal pour les applications nécessitant une grande cohérence et des relations complexes entre les données.
MongoDB : Les relations ne sont pas aussi strictes. MongoDB favorise le modèle de "dénormalisation" en stockant des données liées dans le même document ou en utilisant des références simples, ce qui peut simplifier la récupération de données dans certains cas, mais limite la complexité des relations.

4. Langage de requêtes

MySQL : Utilise le langage SQL (Structured Query Language) pour manipuler les données et exécuter des requêtes. SQL est standardisé et puissant, avec des capacités avancées de filtrage et d'agrégation.
MongoDB : Utilise un système de requêtes en JSON pour interroger les documents. Ce langage est plus adapté aux données non structurées, mais moins standardisé que SQL.

5. Scalabilité

MySQL : Principalement conçu pour la scalabilité verticale (ajouter plus de puissance à un seul serveur). Bien qu’il soit possible d'implémenter une scalabilité horizontale (ajouter plus de serveurs), cela peut être plus complexe.
MongoDB : Conçu pour la scalabilité horizontale grâce au sharding, où les données sont réparties sur plusieurs serveurs. Ceci est plus adapté aux applications à grande échelle, avec de gros volumes de données.

6. Cas d'utilisation

MySQL : Convient aux applications nécessitant des transactions complexes et une grande cohérence, comme les systèmes bancaires, les ERP, et les sites de commerce électronique.
MongoDB : Adapté aux applications nécessitant des structures de données flexibles et un haut degré de scalabilité, comme les réseaux sociaux, les applications mobiles, et les systèmes de gestion de contenu.

En résumé :

| Aspect | MySQL|	MongoDB |
|---|---|---|
| Structure | Relationnelle (tables) | Documents (JSON/BSON)|
| Schéma | Rigide | Flexible|
| Relations | Complexes (jointures) | Relations simples ou dénormalisées|
| Langage de requêtes | SQL | Requêtes en JSON|
| Scalabilité | Verticale principalement | Horizontale (sharding)|
| Cas d'utilisation | Systèmes complexes et transactionnels | Applications flexibles et évolutives|

## Installations 

### Installation en local !plus complexe! notammen
Solution plus complexe. Vous devez avoir un compte microsoft parametré sur l'ordinateur local.
Liens pour l'installation de :

Le community server avec installation optionnelle de Compass
(https://www.mongodb.com/try/download/community)

Mongo Shell
(https://www.mongodb.com/try/download/shell)

### Installation en cloud

(https://cloud.mongodb.com/)

## nodeJS

Pour la suite nous allons creer un petit projet NodeJS qui nous permettra 
de comprendre la manipulation de bases , de collections et de données MongoDB.

- creation d'un dossier qui contiendra notre nouveau projet
- ouvrir ce dossier avec VSCode

creation d'un nouveau projet NodeJS
```npm init -y```
creation du fichier d'entrée ici index.JSON

... la suite dans notre fichier index.js ... 🫶

## Documentation

(https://www.mongodb.com/docs/)
(https://www.mongodb.com/developer/products/mongodb/cheat-sheet/)
(https://www.w3schools.com/mongodb/)

