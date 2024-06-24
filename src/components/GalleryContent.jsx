// src/components/GalleryContent.jsx
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

const Photo = styled.div`
  border: 2px solid #298d08;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 200px;
    height: 200px;
  }
`;

const GalleryContent = ({ userData }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!userData) return;

    const fetchPhotos = async () => {
      const userEmail = getAuth().currentUser.email;
      let userAndFriendsEmails = [userEmail];

      if (userData.friends) {
        userAndFriendsEmails = [
          ...userAndFriendsEmails,
          ...userData.friends.map(friend => friend.email)
        ];
      }

      const unsubscribe = db.collection('gallery')
        .where('user', 'in', userAndFriendsEmails)
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          const photosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPhotos(photosData);
        });

      return () => unsubscribe();
    };

    fetchPhotos();
  }, [userData]);

  return (
    <GalleryContainer>
      {photos.map((photo) => (
        <Photo key={photo.id}>
          <img src={photo.url} alt="Photo" />
        </Photo>
      ))}
    </GalleryContainer>
  );
};

export default GalleryContent;
