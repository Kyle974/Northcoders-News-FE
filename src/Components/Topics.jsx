import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import { fetchTopics } from "../utilities";
import { Card } from "@material-ui/core";

class Topics extends Component {
  state = { topics: null };

  render() {
    return (
      <div>
        <div style={{ padding: "12px" }}>
          <h1>Topics</h1>
        </div>
        {this.state.topics && (
          <div>
            {this.state.topics.map((topic) => (
              <Card key={topic.slug}>
                <Link slug={topic.slug} to={`/topics/${topic.slug}`}>
                  <div style={{ padding: "12px" }}>
                    <h2>{topic.slug}</h2>
                    <p>{topic.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchTopics()
      .then(({ data }) => this.setState({ topics: data.topics }))
      .catch(({ response: { data, status } }) => {
        navigate("/error", {
          replace: true,
          state: { from: "/", msg: data.msg, status }
        });
      });
  }
}

export default Topics;
