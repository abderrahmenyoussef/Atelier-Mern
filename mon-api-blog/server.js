const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())

//definnition d'une route pour la methode GET
app.get('/welcome', (req, res) => {
    res.status(200).send('<h1>Welcome to my first page!</h1>')
})

app.get('/api/welcome', (req, res) => {
    res.status(200).json({ message: 'Welcome to my Blog!' }) 
})

//definition d'une route pour la methode POST
app.post('/api/articles', (req, res) => {
    const articleData = req.body
    console.log('Données reçues:', articleData)
    res.status(201).json({ message: 'Article reçu avec succès', article: {id :Date.now(), ...articleData} })
})

//Ajoutez une route "À Propos" (GET /about)
app.get('/about', (req, res) => {
    res.status(200).json({ message: "API Blog est pas premiere application MERN" })
})

//Ajoutez une route d’API pour les "utilisateurs" (GET /api/users) qui renvoie un tableau JSON d’utilisateurs factices
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, nom: 'Abderrahmen', prenom: 'Youssef', email: 'youssef@example.com', adresse:"Sousse", numtlf:"123456789" },
        { id: 2, nom: 'Mounir', prenom: 'Bensalem', email: 'mounir@example.com', adresse:"Tunis", numtlf:"987654321" },
        { id: 3, nom: 'Ahmed', prenom: 'Soussi', email: 'ahmed@example.com', adresse:"Monastir", numtlf:"456789123" }
    ]
    res.status(200).json(users)
})

//La route de "contact" POST 
app.post('/contact', (req, res) => {
    const { email, message } = req.body
    res.status(200).json({ message: `Message reçu de ${email} !` })
})






        
//demarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})