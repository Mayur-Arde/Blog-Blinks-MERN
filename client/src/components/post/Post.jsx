import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        <img
          className="postImg"
          src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=1"
          alt="blog-img"
        />
        <div className="postInfo">
          <span className="postTitle">{post.title}</span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
}
