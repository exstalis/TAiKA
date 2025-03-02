// screens/StoryDisplay.tsx
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, Share } from 'react-native';
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

  // Share both stories using the native share sheet (YouTube-style)
  const handleShare = async () => {
    try {
      const sourceStory = sourcePages[sourcePageIndex];
      const targetStory = targetPages[targetPageIndex];
      const shareContent = `Source Story (${storyParams.sourceLanguage}):\n${sourceStory}\n\nTarget Story (${storyParams.targetLanguage}):\n${targetStory}`;

      const result = await Share.share({
        message: shareContent,
        title: 'Share Story from TAIKA',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared via ${result.activityType}`);
        } else {
          console.log('Story shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share sheet dismissed');
      }
    } catch (error) {
      console.error('Error sharing story:', error);
    }
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

      {/* Single Share Button */}
      <View style={styles.bottomButtonContainer}>
        <CustomButton
          title="share"
          onPress={handleShare}
          style={styles.actionButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.suntastic,
  },
  storyView: {
    flex: 1,
    marginVertical: 10,
    borderWidth: 0, // No borders
    borderRadius: 10,
    overflow: 'hidden',
  },
  titleBar: {
    backgroundColor: colors.white,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.darknavy,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.darknavy,
    textAlign: 'center',
  },
  storyList: {
    flex: 1,
  },
  storyContent: {
    width: Dimensions.get('window').width,
    padding: 15,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5', // Secondary white for card background
  },
  storyText: {
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
    fontSize: 16,
    color: colors.white,
  },
  bottomButtonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  actionButton: {
    width: '40%',
  },
});

export default StoryDisplay;