import React from "react";
import SeachBar from "./SeachBar";
import youtube from "../APIs/youtube";

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SeachBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
