import React from "react";
import "./LineUrl.css";

class LineUrl extends React.Component {
  render() {
    const { longUrl, shortUrl, counter, onCounterClick } = this.props;

    return (
      <li className="line-url">
        <div className="text-origin-url">
          <a href={longUrl} target="_blank" rel="noopener noreferrer">
            {longUrl}
          </a>
        </div>
        <div className="text-short-url">
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onCounterClick();
            }}
          >
            {shortUrl}
          </a>
        </div>
        <div className="text-counter">{counter}</div>
      </li>
    );
  }
}

export default LineUrl;
