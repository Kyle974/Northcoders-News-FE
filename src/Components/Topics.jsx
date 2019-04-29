import React, { Component } from 'react';
import Axios from 'axios';

class Topics extends Component {
  state = { topics: null };
  render() {
    console.log(this.state.topics);
    return (
      <div>
        <h1>Topics</h1>
        {this.state.topics && (
          <div>
            {this.state.topics.map((topic) => (
              <div key={topic.slug}>
                <h2>{topic.slug}</h2>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    Axios.get('https://ncn2019.herokuapp.com/api/topics').then(({ data }) =>
      this.setState({ topics: data.topics })
    );
  }
}

export default Topics;
