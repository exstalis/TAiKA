// screens/StoryDisplay.tsx
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../constants/colors';
import { commonStyles } from '../styles/commonStyles';
import CustomButton from '../components/CustomButton';
import { parseStoryTemplate } from '../utils/storyUtils';

type StoryDisplayRouteProp = RouteProp<RootStackParamList, 'StoryDisplay'>;

// Placeholder stories split into pages
const sourcePages = [
  "Il était une fois, au cœur d’une forêt vibrante, un écureuil curieux nommé Oliver. Oliver était pas comme les autres écureuils. Tandis que la plupart se contentaient de ramasser des noix, Oliver avait une soif insatiable d’aventure.",
  "Un matin ensoleillé, alors qu’il se précipitait sur un chêne habituel, il trébucha sur une vieille carte poussiéreuse cachée sous un tas de feuilles. La carte semblait mener à un trésor caché quelque part au fond de la forêt...",
];

const targetPages = [
  "Once upon a time, in the heart of a vibrant forest, there lived a curious squirrel named Oliver. Oliver was not like the other squirrels. While most were content gathering nuts, Oliver had an insatiable thirst for adventure.",
  "One sunny morning, as he scurried up his usual path, he stumbled upon an old, dusty map tucked under a pile of leaves. The map seemed to lead to a hidden treasure somewhere deep within the forest...",
];

const StoryDisplay = () => {
  const route = useRoute<StoryDisplayRouteProp>();
  const { templateInput, plotInput } = route.params || {};

  // State to track the currently selected page in each FlatList
  const [sourcePageIndex, setSourcePageIndex] = useState(0);
  const [targetPageIndex, setTargetPageIndex] = useState(0);

  // Refs to access FlatList scroll position
  const sourceFlatListRef = useRef<FlatList>(null);
  const targetFlatListRef = useRef<FlatList>(null);

  // Parse the template input
  let storyParams = { sourceLanguage: '', targetLanguage: '', wordCount: 0, difficulty: '' };
  try {
    if (templateInput) {
      storyParams = parseStoryTemplate(templateInput);
    }
  } catch (error) {
    console.error('Failed to parse template input:', error);
  }

  // Handle scroll to detect the visible page in the source FlatList
  const handleSourceScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / (Dimensions.get('window').width));
    setSourcePageIndex(newIndex);
  };

  // Handle scroll to detect the visible page in the target FlatList
  const handleTargetScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / (Dimensions.get('window').width));
    setTargetPageIndex(newIndex);
  };

  // Navigate to previous page
  const handlePreviousPage = (position: 'source' | 'target') => {
    if (position === 'source' && sourcePageIndex > 0) {
      const newIndex = sourcePageIndex - 1;
      setSourcePageIndex(newIndex);
      sourceFlatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      console.log(`Navigated to previous source page: ${newIndex}`);
    } else if (position === 'target' && targetPageIndex > 0) {
      const newIndex = targetPageIndex - 1;
      setTargetPageIndex(newIndex);
      targetFlatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      console.log(`Navigated to previous target page: ${newIndex}`);
    }
  };

  // Navigate to next page
  const handleNextPage = (position: 'source' | 'target') => {
    if (position === 'source' && sourcePageIndex < sourcePages.length - 1) {
      const newIndex = sourcePageIndex + 1;
      setSourcePageIndex(newIndex);
      sourceFlatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      console.log(`Navigated to next source page: ${newIndex}`);
    } else if (position === 'target' && targetPageIndex < targetPages.length - 1) {
      const newIndex = targetPageIndex + 1;
      setTargetPageIndex(newIndex);
      targetFlatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      console.log(`Navigated to next target page: ${newIndex}`);
    }
  };

  const renderStoryPage = ({ item }: { item: string }) => (
    <View style={styles.storyContent}>
      <Text style={styles.storyText}>{item}</Text>
    </View>
  );

  const handleShare = (position: 'source' | 'target') => {
    const pageIndex = position === 'source' ? sourcePageIndex : targetPageIndex;
    const story = position === 'source' ? sourcePages[pageIndex] : targetPages[pageIndex];
    console.log(`Share clicked for ${position} story page:`, story.substring(0, 50) + '...');
  };

  const handleSave = (position: 'source' | 'target') => {
    const pageIndex = position === 'source' ? sourcePageIndex : targetPageIndex;
    const story = position === 'source' ? sourcePages[pageIndex] : targetPages[pageIndex];
    console.log(`Save clicked for ${position} story page:`, story.substring(0, 50) + '...');
  };

  return (
    <View style={styles.container}>
      {/* Source Language View */}
      <View style={styles.storyView}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>
            {`TITLE: ${storyParams.sourceLanguage.toUpperCase() || 'SOURCE LANGUAGE'}`}
          </Text>
        </View>
        <FlatList
          ref={sourceFlatListRef}
          data={sourcePages}
          renderItem={renderStoryPage}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `source-${index}`}
          style={styles.storyList}
          onScroll={handleSourceScroll}
          scrollEventThrottle={16}
        />
        <View style={styles.navIndicators}>
          <TouchableOpacity
            style={[
              styles.navButton,
              sourcePageIndex === 0 && styles.navButtonDisabled,
            ]}
            onPress={() => handlePreviousPage('source')}
            disabled={sourcePageIndex === 0}
          >
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navButton,
              sourcePageIndex === sourcePages.length - 1 && styles.navButtonDisabled,
            ]}
            onPress={() => handleNextPage('source')}
            disabled={sourcePageIndex === sourcePages.length - 1}
          >
            <Text style={styles.navButtonText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Target Language View */}
      <View style={styles.storyView}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>
            {`TITLE: ${storyParams.targetLanguage.toUpperCase() || 'TARGET LANGUAGE'}`}
          </Text>
        </View>
        <FlatList
          ref={targetFlatListRef}
          data={targetPages}
          renderItem={renderStoryPage}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `target-${index}`}
          style={styles.storyList}
          onScroll={handleTargetScroll}
          scrollEventThrottle={16}
        />
        <View style={styles.navIndicators}>
          <TouchableOpacity
            style={[
              styles.navButton,
              targetPageIndex === 0 && styles.navButtonDisabled,
            ]}
            onPress={() => handlePreviousPage('target')}
            disabled={targetPageIndex === 0}
          >
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navButton,
              targetPageIndex === targetPages.length - 1 && styles.navButtonDisabled,
            ]}
            onPress={() => handleNextPage('target')}
            disabled={targetPageIndex === targetPages.length - 1}
          >
            <Text style={styles.navButtonText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons at the bottom of the container view */}
      <View style={styles.bottomButtonContainer}>
        <View style={styles.buttonRow}>
          <Text style={styles.buttonLabel}>Source Story:</Text>
          <CustomButton
            title="share"
            onPress={() => handleShare('source')}
            buttonType="accent"
            style={styles.actionButton}
          />
          <CustomButton
            title="save"
            onPress={() => handleSave('source')}
            buttonType="accent"
            style={styles.actionButton}
          />
        </View>
        <View style={styles.buttonRow}>
          <Text style={styles.buttonLabel}>Target Story:</Text>
          <CustomButton
            title="share"
            onPress={() => handleShare('target')}
            buttonType="accent"
            style={styles.actionButton}
          />
          <CustomButton
            title="save"
            onPress={() => handleSave('target')}
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
    // Removed margins to make it full-screen
  },
  storyView: {
    flex: 1,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.darknavy,
    borderRadius: 10,
    overflow: 'hidden', // Ensure content stays within rounded corners
  },
  titleBar: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.darknavy,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'MajorMonoDisplay_400Regular',
    fontSize: 16,
    fontWeight: '400',
    color: colors.darknavy,
    textAlign: 'center',
  },
  storyList: {
    flex: 1,
  },
  storyContent: {
    width: Dimensions.get('window').width, // Full width of the screen
    padding: 15,
    flex: 1,
    justifyContent: 'flex-start',
  },
  storyText: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 14,
    color: colors.grayishBlue,
    textAlign: 'justify',
  },
  navIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.darknavy,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.darknavy,
    borderRadius: 5,
  },
  navButtonDisabled: {
    backgroundColor: colors.grayishBlue,
    opacity: 0.5,
  },
  navButtonText: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    color: colors.white,
  },
  bottomButtonContainer: {
    marginBottom: 20,
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
    width: '40%',
  },
});

export default StoryDisplay;