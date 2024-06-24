// src/components/MurContent.jsx
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import styled from 'styled-components';

const WallContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Post = styled.div`
  border: 2px solid #298d08;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
`;

const MurContent = ({ userData }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!userData) return;

    const fetchPosts = async () => {
      const userEmail = getAuth().currentUser.email;
      let userAndFriendsEmails = [userEmail];

      if (userData.friends) {
        userAndFriendsEmails = [
          ...userAndFriendsEmails,
          ...userData.friends.map(friend => friend.email)
        ];
      }

      const unsubscribe = db.collection('walls')
        .where('user', 'in', userAndFriendsEmails)
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPosts(postsData);
        });

      return () => unsubscribe();
    };

    fetchPosts();
  }, [userData]);

  return (
    <WallContainer>
      {posts.map((post) => (
        <Post key={post.id}>
          <p>{post.text}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" />}
          {post.videoUrl && <video controls src={post.videoUrl}></video>}
        </Post>
      ))}
    </WallContainer>
  );
};

export default MurContent;
