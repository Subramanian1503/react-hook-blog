import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Get all the post documents from firestore DB
    db.collection('posts')
      .get()
      .then((docRefs) => {
        // Convert the document into post with id
        const posts = docRefs.docs.map((docRef) => {
          return {
            id: docRef.id,
            ...docRef.data(),
          };
        });

        // set the posts to the state of the component
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      {/* heading for tech blog */}
      <h1>Tech Blog</h1>

      {/* author name */}
      <div id="blog-by">Subramanian</div>

      {/* list of posts created  */}
      {posts.map((post, index) => (
        // creating post with the data
        <div className="post" key={`post-${index}`}>
          {/* heading of the post which links to the post detail */}
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          {/* subtitle of the post */}
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
