function Article({ title , author , content}) {
    return (
        <article style ={{
            border: '1px solid #ddd',
            padding: '20px',
            backgroundColor: 'purple',
            marginBottom: '20px',
            borderRadius: '14px'
        }}>
            <h2>{title}</h2>
            <p style={{
                color: '#666',
                fontSize: '14px',
            }}>
                realisé par {author}
            </p>
            <p>
                {content}
            </p>
        </article>
    )
}
export default Article;