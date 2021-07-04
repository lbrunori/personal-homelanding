import "./Introduction.css";
import java from "./java.svg";

import React from "react";

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
    };
  }

  componentDidMount() {
    this.typeSentence("<Lucas />");
  }

  async typeSentence(sentence, delay = 120) {
    const letters = sentence.split("");
    let id = 0;
    while (id < letters.length) {
      await this.waitForMs(delay);
      const newName = this.state.author + letters[id];
      this.setState({ author: newName });
      id++;
    }
    return null;
  }

  waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  render() {
    return (
      <div className="Introduction">
        <article>
          <div className="greeting">Hello there! I'm</div>
          <div className="name">
            <div class="typing-container">
              <span id="sentence" class="sentence">
                {this.state.author}
              </span>
              <span class="input-cursor"></span>
            </div>
          </div>
          <div className="position">a software developer</div>
          <div className="java-logo-container">
            <img
              src={java}
              className="java-logo"
              alt="intro-logo"
              width="150"
              height="150"
            />
          </div>
        </article>
      </div>
    );
  }
}
