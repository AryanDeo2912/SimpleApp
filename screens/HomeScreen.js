import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const dummyStories = [
  { id: 1, name: 'User1', image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'User2', image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'User3', image: 'https://via.placeholder.com/50' },
];

const dummyPosts = [
  { id: 1, username: 'User1', image: 'https://via.placeholder.com/300' },
  { id: 2, username: 'User2', image: 'https://via.placeholder.com/300' },
];

const dummySuggestions = [
  { id: 1, name: 'Suggested1', image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Suggested2', image: 'https://via.placeholder.com/50' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Stories</Text>
        <ScrollView horizontal>
          {dummyStories.map((story) => (
            <View key={story.id} style={styles.story}>
              <Image source={{ uri: story.image }} style={styles.storyImage} />
              <Text>{story.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Posts</Text>
        {dummyPosts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text>{post.username}</Text>
            <Image source={{ uri: post.image }} style={styles.postImage} />
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Suggestions</Text>
        {dummySuggestions.map((suggestion) => (
          <View key={suggestion.id} style={styles.suggestion}>
            <Image source={{ uri: suggestion.image }} style={styles.suggestionImage} />
            <Text>{suggestion.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  story: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  post: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginTop: 8,
  },
  suggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  suggestionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
});

export default HomeScreen;
