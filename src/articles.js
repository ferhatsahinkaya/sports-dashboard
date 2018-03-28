import React from 'react'
import Article from './article'

export default class Articles extends React.Component {
  render() {
    return (
      <div class="card-columns">
        { this.props.articles
            .map(article => <Article author={article.author}
                                     title={article.title}
                                     description={article.description}
                                     url={article.url}
                                     urlToImage={article.urlToImage}
                                     publishedAt={article.publishedAt}/>) }
      </div>
    )
  }
}