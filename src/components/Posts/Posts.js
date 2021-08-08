import "./Posts.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "../PostItem/PostItem";
function Posts() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPostList(response.data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  console.log(postList);
  return (
    <div className="posts">
      {postList.map((item, index) => {
        return (
          <PostItem
            key={item.id}
            id={item.id}
            userId={item.userId}
            title={item.title}
            body={item.body}
          ></PostItem>
        );
      })}
    </div>
  );
}

export default Posts;
