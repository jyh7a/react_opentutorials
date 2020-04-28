import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "read",
      subject: { title: "WEB", sub: "World Wide Web!!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for informaiton" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }

  render() {
    console.log("App Render");
    var _title,
      _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    console.log("render", this); // App class

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            console.log("this is : ", this);
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />

        <TOC data={this.state.contents} />

        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
