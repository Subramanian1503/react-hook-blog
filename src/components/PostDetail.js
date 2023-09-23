import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import db from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});

  // Get the post Id from the path param
  const { postId } = useParams();

  useEffect(() => {
    // Get the post with postId from the firestore db
    db.collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        setPost(snapshot.data());
      });

    // Set state post with this data retrieved from the db
  });

  return (
    <div className="post-detail">
      {/* post title */}
      <h1>{post.title}</h1>

      {/* post content */}
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
