// screens/StartStoryView.tsx
import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { commonStyles } from '../styles/commonStyles';
import CustomButton from '../components/CustomButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StartStoryView = () => {
  const navigation = useNavigation<NavigationProp>();
  console.log('StartStoryView rendered');

  return (
    <View style={commonStyles.fullScreenContainer}>
      <CustomButton
        title="Go to Landing"
        onPress={() => {
          console.log('Navigating to Landing');
          navigation.navigate('Landing');
        }}
        buttonType="accent"
      />
    </View>
  );
};

export default StartStoryView;