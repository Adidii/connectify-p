// src/components/VideoContent.jsx
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const VideoPost = styled.div`
  border: 2px solid #298d08;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);

  video {
    width: 100%;
    height: auto;
  }
`;

const VideoContent = ({ userData }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!userData) return;

    const fetchVideos = async () => {
      const userEmail = getAuth().currentUser.email;
      let userAndFriendsEmails = [userEmail];

      if (userData.friends) {
        userAndFriendsEmails = [
          ...userAndFriendsEmails,
          ...userData.friends.map(friend => friend.email)
        ];
      }

      const unsubscribe = db.collection('videos')
        .where('user', 'in', userAndFriendsEmails)
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          const videosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setVideos(videosData);
        });

      return () => unsubscribe();
    };

    fetchVideos();
  }, [userData]);

  return (
    <VideoContainer>
      {videos.map((video) => (
        <VideoPost key={video.id}>
          <video controls src={video.url}></video>
        </VideoPost>
      ))}
    </VideoContainer>
  );
};

export default VideoContent;
