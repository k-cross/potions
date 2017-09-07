import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./github/profile";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              GH Viewer
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "k-cross",
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }

  getUserData = () => {
    const gituri =
      "https://api.github.com/users/" +
      this.state.username +
      "?clientId=" +
      this.props.clientId +
      "&client_secret=" +
      this.props.clientSecret;
    const jsonHeader = () => {
      const h = new Headers();
      h.append("Content-Type", "application/json");
      return h;
    };
    const options = { headers: jsonHeader() };

    return fetch(new Request(gituri, options)).then(
      res => {
        return res.json();
      },
      rej => {
        console.log(rej);
      }
    );
  };

  componentDidMount() {
    this.getUserData().then(
      res => {
        this.setState({ userData: res });
        console.log(this.state.userData);
      },
      reject => {
        console.log(reject);
      }
    );
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div className="container">
          <Profile userData = {this.state.userData} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

App.defaultProps = {
  clientId: "Iv1.a30d272027969e75",
  clientSecret: "e53fb3ad1fafd36666d45db7c4ed8a08a1342260"
};

export default App;
