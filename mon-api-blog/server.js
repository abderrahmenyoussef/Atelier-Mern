const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())
const articleRoutes = require('./routes/articleRoutes')
const userRoutes = require('./routes/userRoutes')


// Initial route pour tester l'API
app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil de mon API Blog!')
})

// Utilisation des routes pour les articles

app.use('/api/articles', articleRoutes);

// Utilisation des routes pour les utilisateurs
app.use('/api/users', userRoutes);








        
//demarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})