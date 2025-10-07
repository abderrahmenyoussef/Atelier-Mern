const getAllUsers = (req, res) => {
    const users = [
        { id: 1, nom: 'Abderrahmen', prenom: 'Youssef', email: 'youssef@example.com', adresse:"Sousse", numtlf:"123456789" },
        { id: 2, nom: 'Mounir', prenom: 'Bensalem', email: 'mounir@example.com', adresse:"Tunis", numtlf:"987654321" },
        { id: 3, nom: 'Ahmed', prenom: 'Soussi', email: 'ahmed@example.com', adresse:"Monastir", numtlf:"456789123" }
    ]
    res.status(200).json(users)
}

const createUser = (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Le corps de la requête est manquant' });
    }
    const { nom, prenom, email, adresse, numtlf } = req.body;
    if (!nom || !prenom || !email || !adresse || !numtlf) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
    }
    const newUser = { id: Date.now(), nom, prenom, email, adresse, numtlf };
    res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
}

module.exports = { getAllUsers, createUser };