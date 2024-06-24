// src/addTestData.js
import firebase from './firebase'; // Assurez-vous que ce chemin est correct

const db = firebase.firestore();

const addTestData = async () => {
  try {
    // Ajouter des documents à la collection "walls"
    const wallsCollection = db.collection('walls');
    await wallsCollection.add({
      text: 'This is a test wall post',
      imageUrl: 'https://firebasestorage.googleapis.com/.../image.jpg', // Remplacez par une URL réelle
      user: 'user@example.com',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Ajouter des documents à la collection "gallery"
    const galleryCollection = db.collection('gallery');
    await galleryCollection.add({
      url: 'https://firebasestorage.googleapis.com/.../photo.jpg', // Remplacez par une URL réelle
      user: 'user@example.com',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Ajouter des documents à la collection "videos"
    const videosCollection = db.collection('videos');
    await videosCollection.add({
      url: 'https://firebasestorage.googleapis.com/.../video.mp4', // Remplacez par une URL réelle
      user: 'user@example.com',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Ajouter des documents à la collection "music"
    const musicCollection = db.collection('music');
    await musicCollection.add({
      musicUrl: 'https://firebasestorage.googleapis.com/.../music.mp3', // Remplacez par une URL réelle
      coverUrl: 'https://firebasestorage.googleapis.com/.../cover.jpg', // Remplacez par une URL réelle
      title: 'Song Title',
      artist: 'Artist Name',
      user: 'user@example.com',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    console.log('Test data added to collections');
  } catch (error) {
    console.error('Error adding test data: ', error);
  }
};

export default addTestData;
