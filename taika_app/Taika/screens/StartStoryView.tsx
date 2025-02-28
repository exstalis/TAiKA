// screens/StartStoryView.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
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
    <View style={commonStyles.centeredContainer}>
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


const styles = StyleSheet.create({
  container: {
    flex: 1, // 100% flex screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for simplicity
  },
  button: {
    backgroundColor: '#f80446', // Using pinkred for the button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StartStoryView;