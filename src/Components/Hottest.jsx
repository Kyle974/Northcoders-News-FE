import React from "react";
import ArticleList from "./ArticleList";

const Hottest = () => {
  return (
    <div>
      <header>
        <div style={{ padding: "12px" }}>
          <h1>Hottest</h1>
          <p>The most dicussed articles on NC-News.</p>
        </div>
      </header>
      <ArticleList urlPath="?sort_by=comment_count" />
    </div>
  );
};

export default Hottest;
