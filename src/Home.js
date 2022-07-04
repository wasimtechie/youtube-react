import React from "react";
import App from "./App";

const Home = () => {
  const name = localStorage.getItem("name");
  console.log(name);
  return (
    <div>
      <p>{JSON.parse(name)}</p>
      <App />
    </div>
  );
};

export default Home;

// import React from "react";
// import SearchBar from "./components/searchBar/SearchBar";
// import VideoDetail from "./components/videoDetail/VideoDetail";
// import VideoList from "./components/videoList/VideoList";

// import Youtube from "./apis/Youtube";

// class Home extends React.Component() {
//   state = { videos: [], selectedVideo: null };
//   onTermSubmit = async (term) => {
//     const response = await Youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({ videos: response.data.items });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ SelectedVideo: video });
//   };
//   render() {
//     return (
//       <div>
//         <div className="row">
//           <SearchBar afterSubmit={this.onTermSubmit} />
//           <div className="col-lg-8">
//             <VideoDetail video={this.state.SelectedVideo} />
//           </div>
//           <div className="col-lg-4">
//             <VideoList
//               onVideoSelect={this.onVideoSelect}
//               videos={this.state.videos}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
