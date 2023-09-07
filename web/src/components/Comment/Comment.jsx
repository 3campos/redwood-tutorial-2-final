const Comment = ({ comment }) => {
  return (
    <div>
      <h2>{comment.name}</h2>
      <time dateTime={comment.createdAt}>{comment.createdAt}</time>
      {/* <p>{'Find me in ./web/src/components/Comment/Comment.jsx'}</p> */}
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment
