import React, { Component } from 'react';
import { Link } from '@reach/router';
import { fetchTopics } from '../utilities';

class Topics extends Component {
  state = { topics: null };

  render() {
    return (
      <div>
        <h1>Topics</h1>
        {this.state.topics && (
          <div>
            {this.state.topics.map((topic) => (
              <Link
                key={topic.slug}
                slug={topic.slug}
                to={`/topics/${topic.slug}`}
              >
                <div className="topic">
                  <h2>{topic.slug}</h2>
                  <p>{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchTopics().then(({ data }) => this.setState({ topics: data.topics }));
  }
}

export default Topics;
