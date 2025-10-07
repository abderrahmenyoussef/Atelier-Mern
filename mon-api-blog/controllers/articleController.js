const apiTest =  (req, res) => {
    res.status(200).json({ message: 'Welcome to my Blog!' }) 
}


const apiArticleCreate = (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Le corps de la requête est manquant' })
    }
    const {title , content, author} = req.body
    if (!title || !content || !author) {    
        return res.status(400).json({ message: 'Tous les champs sont requis : title, content, author' })
    }
    else {
        console.log('Données reçues:', {title , content, author})
        res.status(201).json({ message: 'Article reçu avec succès', article: { title , content, author} })
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