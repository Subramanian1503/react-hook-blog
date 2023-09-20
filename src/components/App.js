import { Routes, Route } from 'react-router-dom';
import { Home, CreatePost, PostDetail, NavBar } from './index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/create-post" Component={CreatePost} />
        <Route exact path="/post/:postId" Component={PostDetail} />
      </Routes>
    </div>
  );
}

export default App;
