import axios from "axios";

const KEY = "AIzaSyB58aN1JNAtPdZShuRaoow_eB_Rm-uUxCU";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
