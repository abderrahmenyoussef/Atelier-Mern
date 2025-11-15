const Article = require('../models/article');

const apiTest =  (req, res) => {
    res.status(200).json({ message: 'Welcome to my Blog!' }) 
}


const apiArticleCreate = async (req, res) => {

    if(!req.body || Object.keys(req.body).length === 0){
         return res.status(400).json({ message: 'Le corps de la requête est manquant' })
    }
    try{    const newArticle= new Article({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });

    const saveArticle = await newArticle.save();
    res.status(201).json(saveArticle);
    } catch(err){
        res.status(400).json({message: "Erreur lors de la création de l'article", error :err.message});
    }
}

const listeArticles = (req, res) => {
    const articles = [
        { id: 1, title: 'Premier Article', content: 'Ceci est le contenu du premier article.', author: 'Youssef' },
        { id: 2, title: 'Deuxième Article', content: 'Ceci est le contenu du deuxième article.', author: 'Mounir' },
        { id: 3, title: 'Troisième Article', content: 'Ceci est le contenu du troisième article.', author: 'Ahmed' }
    ]
    res.status(200).json(articles)
}

const deleteArticle = (req, res) => {
    const articleId = req.body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Le corps de la requête est manquant' })
    }
    if (!articleId) {
        return res.status(400).json({ message: 'ID de l\'article manquant' })
    }
    console.log(`Article avec ID ${articleId.id} supprimé`)
    res.status(200).json({ message: `Article avec ID ${articleId.id} supprimé` })
}

module.exports = {
    apiTest,
    apiArticleCreate,
    listeArticles,
    deleteArticle
}