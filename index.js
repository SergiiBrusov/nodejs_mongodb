/* pour recuperer les variables d'environnement importer la library : npm i dotenv */
/* creation du fichier .env qui contiendra le lien de connexion et le userName et password du compte */
/* pour github creer immediatement le fichier .gitignore qui contiendra le fichier .env */
require('dotenv').config();
/* pour vous connecter à MongoDB Cloud ou local : npm i mongodb */
const { MongoClient } = require('mongodb');
/* creation du client qui se connectera à la base */
const client = new MongoClient(process.env.MONGO_URL);

/* Creation d'un jeu de données qui decrira mes users */
const users = [
    { name: "Bob", password: "azerty", age: 9 },
    { name: "Patrick", password: "ytreza", age: 10 },
    { name: "Crabe", password: "poiuyt", age: 92 }
]


/* le role des mots cle async et await permet d'attendre que la connection soit etablie avant
d'effectuer quelque manipulation que ce soit */
const main = async () => {
    await client.connect();
    // creation d'une base de donnée sur le cluster connecté
    // si la bdd existe dejà sert simplement à se connecter
    const db = client.db("chat");
    // creation d'une collection (table en mysql)
    // si la collection existe dejà sert simplement à se connecter
    const collection = db.collection('users');

    ///////////// CREATE //////////////////////////

    /*/ // insertions des données utilisateur dans ma collection user avec await 
    // qui permet d'attendre que la collection soit crée
    const insertUsers = await collection.insertMany(users) */

    /* // insertion d'un nouvel utilisateur qui n'aura qu'une entrée name
    const insertUser = await collection.insertOne({name:"Sandy"}) */

    ///////////// READ //////////////////////////

    /* // recuperation des information d'une entrée par son parametre name
    const findOne = await collection.findOne({name:"Bob"});
    console.log(findOne);
    // exemple de la recuperation d'une entree de mon resultat (password)
    console.log(findOne.password); */

    /* // recuperation de plusieurs entrées par parametre identique et valeurs egales
    const findAllByAge10 = await collection.find({age:10});
    // la recuperation de données se fait cette fois sous forme de tableau (toArray)
    // et devra etre "attendu"(await)
    console.log(await findAllByAge10.toArray()); */

    ///////////// UPDATE //////////////////////////

    /* // modification d'un ou plusieurs parametres d'un entrée de ma collection
    const updateSandy = collection.updateOne({name:'Sandy'},{
        $set:{name:"Sandy l'Ecureuil",age:22}
    })
    console.log(await updateSandy); */

    /* // modification d'un ou plusieurs parametres de plusieurs entrée de ma collection
    const updateAllPassword = collection.updateMany({ age: 10 }, {
        $set: { password: "croustycrabe" }
    })
    console.log(await updateAllPassword); */

    ///////////// DELETE //////////////////////////

    /* // suppression d'une entrée
    const adieuMCrabe = await collection.deleteOne({name:"Crabe"});
    console.log(await adieuMCrabe); */

    // suppression d'entrées multiple
    const bobEtPatrick = await collection.deleteMany({age:10});
    console.log(await bobEtPatrick);

    console.log('connection ok');
    return 'cest fait'
}
/* lancement de la fonction de connection */
main()
    .then(console.log)//le console.log contiendra le return de la fonction appelée
    .catch(console.error)// retourne l'erreur le cas echeant
    .finally(() => {
        client.close()//a la fin de l'execution de la console on deconnecte le client
    })