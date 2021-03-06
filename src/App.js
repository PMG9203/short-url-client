import React from "react";
import "./App.css";
import axios from "axios";
import LineUrl from "./Component/LineUrl";

export default class App extends React.Component {
  state = { longUrl: "", urls: [], isLoading: true };

  async componentDidMount() {
    const response = await axios.get(
      "https://short-url-server-pm.herokuapp.com/"
    );
    this.setState({
      urls: response.data,
      isLoading: false
    });
  }

  renderListUrls = () => {
    if (this.state.isLoading === true) {
      return <p>En cours de chargement ...</p>;
    } else {
      return (
        <ul className="block-li-url">
          {this.state.urls.map(url => {
            const index = this.state.urls.indexOf(url);
            return (
              <LineUrl
                key={url._id}
                longUrl={url.longUrl}
                shortUrl={url.shortUrl}
                counter={url.counter}
                // UPDATE COUNTER IN STATE
                onCounterClick={() => {
                  const nextCounter = [...this.state.urls];
                  nextCounter[index] = { ...nextCounter[index] };
                  nextCounter[index].counter = nextCounter[index].counter + 1;
                  this.setState({ urls: nextCounter });
                }}
              />
            );
          })}
        </ul>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Simplify your links</h1>
          <div className="App-Form">
            <input
              className="input"
              placeholder="http://www.votreurl.ici"
              value={this.state.longUrl}
              onChange={event => {
                this.setState({ longUrl: event.target.value });
              }}
            />
            <button
              className="btt-shorten"
              onClick={async event => {
                await axios
                  .post("https://short-url-server-pm.herokuapp.com/create", {
                    longUrl: this.state.longUrl
                  })
                  .then(res => {
                    console.log(res.data);
                    alert(res.data);
                  });
                const response = await axios.get(
                  "https://short-url-server-pm.herokuapp.com/"
                );
                this.setState({
                  urls: response.data,
                  isLoading: false,
                  longUrl: ""
                });
              }}
            >
              SHORTEN URL
            </button>
          </div>
        </header>
        <div>
          <div className="bloc-legende-url">
            <span className="origin-url">Original URL</span>
            <span className="short-url">Short URL</span>
            <span className="visits-url">Visits</span>
          </div>
          {this.renderListUrls()}
        </div>
      </div>
    );
  }
}
