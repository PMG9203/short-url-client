import React from "react";

class LineUrl extends React.Component {
  render() {
    const { longUrl, shortUrl, counter, onCounterClick } = this.props;

    return (
      <li>
        <a href={longUrl} target="_blank" rel="noopener noreferrer">
          {longUrl}
        </a>
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
        <span>{counter}</span>
      </li>
    );
  }
}

export default LineUrl;
