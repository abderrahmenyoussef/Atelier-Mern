function ArticleProps(Props) {
    return (
        <article style ={{
            border: '1px solid #ddd',
            padding: '20px',
            backgroundColor: 'purple',
            marginBottom: '20px',
            borderRadius: '14px'
        }}>
            <h2>{Props.title}</h2>
            <p style={{
                color: '#666',
                fontSize: '14px',
            }}>
                realisé par {Props.author}
            </p>
            <p>
                {Props.content}
            </p>
        </article>
    )
}
export default ArticleProps;