// screens/StartStoryView.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { commonStyles } from '../styles/commonStyles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StartStoryView = () => {
  const navigation = useNavigation<NavigationProp>();
  console.log('StartStoryView rendered');

  return (
    <View style={commonStyles.centeredContainer}>
      <TouchableOpacity
        style={commonStyles.accentButton}
        onPress={() => {
          console.log('Navigating to Landing');
          navigation.navigate('Landing');
        }}
      >
        <Text style={commonStyles.accentButtonText}>Go to Landing</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartStoryView;