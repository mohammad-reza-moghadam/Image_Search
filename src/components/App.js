import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 10 },
      headers: {
        Authorization: "Client-ID lanuL0x-bBalV0grDNHCf0Urps4p_1vBH9vPrRxJQ3g",
      },
    });
    this.setState({ images: response.data.results });
    console.log(response);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
