// screens/StoryDisplay.tsx
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../constants/colors';
import { commonStyles } from '../styles/commonStyles';
import CustomButton from '../components/CustomButton';
import { parseStoryTemplate } from '../utils/storyUtils';

type StoryDisplayRouteProp = RouteProp<RootStackParamList, 'StoryDisplay'>;

// Placeholder stories for swiping
const placeholderStories = [
  {
    title: "La carte au trésor d’Oliver l’écureuil aventurier",
    content:
      "Il était une fois, au cœur d’une forêt vibrante, un écureuil curieux nommé Oliver. Oliver était pas comme les autres écureuils. Tandis que la plupart se contentaient de ramasser des noix, Oliver avait une soif insatiable d’aventure. Un matin ensoleillé, alors qu’il se précipitait sur un chêne habituel, il trébucha sur une vieille carte poussiéreuse cachée sous un tas de feuilles. La carte semblait mener à un trésor caché quelque part au fond de la forêt...",
  },
  {
    title: "The Treasure Map of Oliver the Adventurous Squirrel",
    content:
      "Once upon a time, in the heart of a vibrant forest, there lived a curious squirrel named Oliver. Oliver was not like the other squirrels. While most were content gathering nuts, Oliver had an insatiable thirst for adventure. One sunny morning, as he scurried up his usual path, he stumbled upon an old, dusty map tucked under a pile of leaves. The map seemed to lead to a hidden treasure somewhere deep within the forest...",
  },
  {
    title: "Le mystère de la forêt enchantée",
    content:
      "Dans une forêt enchantée, un mystère attendait d’être résolu. Les animaux de la forêt parlaient d’un vieux chêne magique qui pouvait exaucer un vœu par siècle. Une jeune renarde nommée Lila décida de partir à sa recherche, bravant les dangers et les énigmes de la forêt. Accompagnée d’un hibou sage et d’un lapin courageux, elle découvrit que le véritable trésor était l’amitié qu’ils avaient forgée en chemin.",
  },
  {
    title: "The Mystery of the Enchanted Forest",
    content:
      "In an enchanted forest, a mystery awaited to be solved. The animals of the forest spoke of an ancient oak tree that could grant one wish per century. A young fox named Lila decided to seek it out, braving the dangers and riddles of the forest. Joined by a wise owl and a brave rabbit, she discovered that the true treasure was the friendship they had forged along the way.",
  },
];

const StoryDisplay = () => {
  const route = useRoute<StoryDisplayRouteProp>();
  const { templateInput, plotInput } = route.params || {};

  // State to track the currently selected story in each FlatList
  const [topStoryIndex, setTopStoryIndex] = useState(0);
  const [bottomStoryIndex, setBottomStoryIndex] = useState(0);

  // Refs to access FlatList scroll position
  const topFlatListRef = useRef<FlatList>(null);
  const bottomFlatListRef = useRef<FlatList>(null);

  // Parse the template input
  let storyParams = { sourceLanguage: '', targetLanguage: '', wordCount: 0, difficulty: '' };
  try {
    if (templateInput) {
      storyParams = parseStoryTemplate(templateInput);
    }
  } catch (error) {
    console.error('Failed to parse template input:', error);
  }

  // Handle scroll to detect the visible story in the top FlatList
  const handleTopScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / (Dimensions.get('window').width - 60));
    setTopStoryIndex(newIndex);
  };

  // Handle scroll to detect the visible story in the bottom FlatList
  const handleBottomScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / (Dimensions.get('window').width - 60));
    setBottomStoryIndex(newIndex);
  };

  const renderStoryCard = ({ item }: { item: { title: string; content: string } }) => (
    <View style={[commonStyles.card, styles.storyCard]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.storyText}>{item.content}</Text>
    </View>
  );

  const handleShare = (position: 'top' | 'bottom') => {
    const storyIndex = position === 'top' ? topStoryIndex : bottomStoryIndex;
    const story = placeholderStories[position === 'top' ? storyIndex : storyIndex + 2];
    console.log(`Share clicked for ${position} story:`, story.title);
  };

  const handleSave = (position: 'top' | 'bottom') => {
    const storyIndex = position === 'top' ? topStoryIndex : bottomStoryIndex;
    const story = placeholderStories[position === 'top' ? storyIndex : storyIndex + 2];
    console.log(`Save clicked for ${position} story:`, story.title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={commonStyles.logo}>Story Display</Text>
        <Text style={styles.params}>
          {`Source: ${storyParams.sourceLanguage || 'N/A'}, Target: ${storyParams.targetLanguage || 'N/A'}, Words: ${storyParams.wordCount || 'N/A'}, Difficulty: ${storyParams.difficulty || 'N/A'}`}
        </Text>
        <Text style={styles.plot}>Plot: {plotInput || 'No plot provided.'}</Text>
      </View>
      <View style={styles.storiesContainer}>
        {/* Top Story Card with Swipe */}
        <FlatList
          ref={topFlatListRef}
          data={placeholderStories.slice(0, 2)}
          renderItem={renderStoryCard}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `top-${index}`}
          style={styles.storyList}
          onScroll={handleTopScroll}
          scrollEventThrottle={16}
        />
        {/* Bottom Story Card with Swipe */}
        <FlatList
          ref={bottomFlatListRef}
          data={placeholderStories.slice(2, 4)}
          renderItem={renderStoryCard}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `bottom-${index}`}
          style={styles.storyList}
          onScroll={handleBottomScroll}
          scrollEventThrottle={16}
        />
      </View>
      {/* Buttons at the bottom of the container view */}
      <View style={styles.bottomButtonContainer}>
        <View style={styles.buttonRow}>
          <Text style={styles.buttonLabel}>Top Story:</Text>
          <CustomButton
            title="share"
            onPress={() => handleShare('top')}
            buttonType="accent"
            style={styles.actionButton}
          />
          <CustomButton
            title="save"
            onPress={() => handleSave('top')}
            buttonType="accent"
            style={styles.actionButton}
          />
        </View>
        <View style={styles.buttonRow}>
          <Text style={styles.buttonLabel}>Bottom Story:</Text>
          <CustomButton
            title="share"
            onPress={() => handleShare('bottom')}
            buttonType="accent"
            style={styles.actionButton}
          />
          <CustomButton
            title="save"
            onPress={() => handleSave('bottom')}
            buttonType="accent"
            style={styles.actionButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.suntastic,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  params: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: colors.grayishBlue,
    textAlign: 'center',
    marginBottom: 10,
  },
  plot: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    color: colors.grayishBlue,
    textAlign: 'center',
  },
  storiesContainer: {
    flex: 1,
  },
  storyList: {
    flex: 1,
    marginVertical: 10,
  },
  storyCard: {
    width: Dimensions.get('window').width - 60,
    height: '90%',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'MajorMonoDisplay_400Regular',
    fontSize: 18,
    fontWeight: '400',
    color: colors.darknavy,
    textAlign: 'center',
    marginBottom: 10,
  },
  storyText: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 14,
    color: colors.grayishBlue,
    textAlign: 'justify',
  },
  bottomButtonContainer: {
    marginBottom: 20, // Space at the bottom of the screen
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonLabel: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 14,
    color: colors.darknavy,
    marginRight: 10,
  },
  actionButton: {
    width: '40%', // Slightly smaller buttons to fit with label
  },
});

export default StoryDisplay;