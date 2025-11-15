import Article from "./components/Article"
import ArticleProps from "./components/ArticleProps"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
   const articles = [
      {
        id: 1,
        title: "Article 1",
        author: "Auteur 1",
        content: "Contenu de l'article 1."
      },
      {
        id: 2,
        title: "Article 2",
        author: "Auteur 2",
        content: "Contenu de l'article 2."
      },
      {
        id: 3,
        title: "Article 3",
        author: "Auteur 3",
        content: "Contenu de l'article 3."
      }
    ];
    
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          flex: 1
        }}
      >
        <Header
          title="Mon Blog React"
          subtitle="Apprendre React avec des exemples pratiques"
        />

        {/* statique */}
        <Article
          title="Introduction à React"
          author="Abdou"
          content="Ceci est le contenu de mon premier article."
        />
        <ArticleProps
          title="Introduction à React avec Props"
          author="Abdou"
          content="Ceci est le contenu de mon deuxième article utilisant Props."
        />
        {/* dynamique */}
        <hr />
        <p style={{color: '#666'}}>
          {articles.length} articles disponibles.
        </p>
        {articles.map((article) => (
          <Article 
            key={article.id}
            title={article.title}
            author={article.author}
            content={article.content}        
          />
        ))}
      </div>

      <Footer
        author="Ecole Polytechnique Sousse"
        year={currentYear}
      />
    </div>
  )
}
export default App;