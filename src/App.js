import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import Youtube from "./apis/Youtube";
import VideoList from "./components/videoList/VideoList";
import VideoDetail from "./components/videoDetail/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ SelectedVideo: video });
  };

  render() {
    return (
      <div className="row">
        <SearchBar afterSubmit={this.onTermSubmit} />
        <div className="col-lg-8">
          <VideoDetail video={this.state.SelectedVideo} />
        </div>
        <div className="col-lg-4">
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
