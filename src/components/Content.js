import React, { Component } from "react";

class Content extends Component {
  render() {
    console.log("Content Render");
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </article>
    );
  }
}

export default Content;
