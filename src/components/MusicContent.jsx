import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db, storage } from '../firebase';
import styled from 'styled-components';

const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;
  width: 100%;
  max-width: 720px;
  margin-top: -1450px;
  height: 400px;

  @media (max-width: 932px) {
    display: flex;
    flex-direction: column;
    margin-left: -333px;
    width: 50%;
    max-width: 320px;
    margin-top: -150px;
    height: 400px;
  }
`;

const MusicPost = styled.div`
  border: 4px solid #298d08;
  margin-bottom: 20px;
  padding: 10px;
  color: #0c0808;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
`;

const MusicTitle = styled.h2`
  color: #e9981f;
  font-size: 20px;
  font-family: 'Gravitas One', cursive;
`;

const MusicPlayer = styled.audio`
  width: 100%;
  margin-top: 10px;
`;

const Music = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const userEmail = getAuth().currentUser.email;

      let userAndFriendsEmails = [userEmail];

      const unsubscribe = db.collection('music')
        .where('user', 'in', userAndFriendsEmails)
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          const musicData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setMusicList(musicData);
        });

      return () => unsubscribe();
    };

    fetchMusic();
  }, []);

  return (
    <MusicContainer>
      {musicList.map((music) => (
        <MusicPost key={music.id}>
          <img src={music.coverUrl} alt={music.title} />
          <MusicTitle>{music.title} - {music.artist}</MusicTitle>
          <MusicPlayer controls>
            <source src={music.musicUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </MusicPlayer>
        </MusicPost>
      ))}
    </MusicContainer>
  );
};

export default Music;
