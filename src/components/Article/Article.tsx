import React from 'react';
import './article.css'

interface ArticleProps {
    title?: string;
    children?: string;
}

interface ArticleState {

}

class Article extends React.Component<ArticleProps, ArticleState> {
    ////state = { :  }
    render() {
        return (
            <div className="article">
                <h2>{this.props.title}</h2>
                <p>{this.props.children}</p>
            </div>);
    }
}

export default Article;