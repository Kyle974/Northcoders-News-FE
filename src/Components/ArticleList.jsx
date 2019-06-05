import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import { Card } from "@material-ui/core";
import { fetchArticles } from "../utilities";
import moment from "moment";

class ArticleList extends Component {
  state = { articles: null };

  render() {
    return (
      <div>
        {this.state.articles && (
          <div>
            {this.state.articles.map((article) => (
              <Card key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h2>{article.title}</h2>
                  <p>
                    <strong>topic: </strong> {article.topic}
                  </p>
                  <p>
                    <strong> author: </strong>
                    {article.author}
                    <strong> created: </strong>
                    {moment(article.created_at)
                      .startOf("day")
                      .fromNow()}
                  </p>

                  <p>
                    <strong>votes: </strong> {article.votes}
                    <strong> comments: </strong> {article.comment_count}
                  </p>
                  <p />
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchArticles(this.props.urlPath)
      .then(({ data }) => this.setState({ articles: data.articles }))
      .catch(({ response: { data, status } }) => {
        navigate("/error", {
          replace: true,
          state: { from: "/", msg: data.msg, status }
        });
      });
  }
}

export default ArticleList;
