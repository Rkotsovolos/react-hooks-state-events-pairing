import {useState} from 'react';
import CommentCard from './CommentCard'



function Comments ({num, comments}) {
  const [commentList, setCommentList] = useState(comments)

  const displayComments = commentList.map(comment => <CommentCard user={comment.user}  comment={comment.comment}key={comment.id}/>);

  const commentDisplay = () => {
    if(commentList.length === 0) {
      setCommentList(comments)
    } else {
      setCommentList([])
    }
  }
    return (
      <>
        <button onClick={commentDisplay}>Hide Comments</button>
        <br></br>
        <h2>{num} Comments</h2>
        {displayComments}
      </>
    );
}


export default Comments;