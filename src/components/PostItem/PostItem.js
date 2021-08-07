import "./PostItem.css";
function PostItem(props) {
  return (
    <div className="post-item">
      <div className="container">
        <p>UserId: {`${props.userId}`}</p>
        <p>Id: {`${props.id}`}</p>
        <p>Title: {props.title}</p>
        <p>Body: {props.body}</p>
      </div>
    </div>
  );
}
export default PostItem;
