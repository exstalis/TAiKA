// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { commonStyles } from '../styles/commonStyles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  console.log(`CustomButton pressed: ${title}`);

  return (
    <TouchableOpacity style={[commonStyles.accentButton, style]} onPress={onPress}>
      <Text style={commonStyles.accentButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;