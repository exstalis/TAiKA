// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  buttonType?: 'accent' | 'gray' | 'white'; // Different button styles
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textColor,
  buttonType = 'accent',
}) => {
  console.log(`CustomButton rendered: ${title}`);

  const getButtonStyle = () => {
    switch (buttonType) {
      case 'gray':
        return commonStyles.grayButton;
      case 'white':
        return commonStyles.whiteButton;
      case 'accent':
      default:
        return commonStyles.accentButton;
    }
  };

  const getTextStyle = () => {
    switch (buttonType) {
      case 'gray':
        return commonStyles.grayButtonText;
      case 'white':
        return commonStyles.whiteButtonText;
      case 'accent':
      default:
        return commonStyles.accentButtonText;
    }
  };

  return (
    <TouchableOpacity style={[getButtonStyle(), style]} onPress={onPress}>
      <Text style={[getTextStyle(), textColor ? { color: textColor } : {}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;