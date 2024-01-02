import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Post.css';

function Post() {
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    Axios.get('http://localhost:3001/api')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const submitComment = (postId) => {
    // นี่คือตัวอย่างฟังก์ชันในการจัดการการส่งความคิดเห็น
    // คุณจะต้องแก้ไขตามโลจิกของแอปพลิเคชันของคุณ
    Axios.post('http://localhost:3001/api/addComment', {
      postId: postId,
      comment: newComment
    }).then((response) => {
      // อัปเดต UI หลังจากส่งความคิดเห็นสำเร็จ
    }).catch((error) => {
      console.error("Error posting comment: ", error);
    });
  };
  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2 className="post-title">{post.title}</h2>
          <img src={post.img} alt={post.title} className="post-image"/>
          <h3 className="post-name">{post.name}</h3>
          <p className="post-description">{post.des}</p>

          {/* แสดงความคิดเห็น */}
          <div className="post-comments">
            {post.comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>

          {/* เพิ่มความคิดเห็น */}
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
          />
          <button onClick={() => submitComment(post.id)}>แสดงความคิดเห็น</button>

          {/* ปุ่มไลค์ */}
          <p className="post-likes">{post.likes} ไลค์</p>
          <button onClick={() => likePost(post.id)}>ไลค์</button>
        </div>
      ))}
    </div>
  );
}

export default Post;
