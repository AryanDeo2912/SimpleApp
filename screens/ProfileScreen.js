import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const dummyPosts = [
  { id: 1, image: 'https://via.placeholder.com/100' },
  { id: 2, image: 'https://via.placeholder.com/100' },
  { id: 3, image: 'https://via.placeholder.com/100' },
];

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <Text style={styles.text}>Followers: 100</Text>
        <Text style={styles.text}>Following: 50</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Posts: {dummyPosts.length}</Text>
      </View>
      <ScrollView horizontal style={styles.postsSection}>
        {dummyPosts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <Image source={{ uri: post.image }} style={styles.postImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postsSection: {
    flexDirection: 'row',
  },
  postCard: {
    marginRight: 16,
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default ProfileScreen;
