// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  buttonType?: 'accent' | 'gray' | 'white';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textColor,
  buttonType,
}) => {
  console.log(`CustomButton rendered: ${title}`);

  const getButtonStyle = () => {
    switch (buttonType) {
      case 'gray':
        return commonStyles.grayButton;
      case 'white':
        return commonStyles.whiteButton;
      case 'accent':
        return commonStyles.accentButton;
      default:
        return {};
    }
  };

  const getTextStyle = () => {
    switch (buttonType) {
      case 'gray':
        return [commonStyles.grayButtonText, styles.buttonText];
      case 'white':
        return [commonStyles.whiteButtonText, styles.buttonText];
      case 'accent':
        return [commonStyles.accentButtonText, styles.buttonText];
      default:
        return [styles.defaultButtonText];
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

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center', // Align text horizontally
    alignItems: 'center',
    lineHeight: 20, // Adjust line height for vertical alignment
    fontFamily: 'NotoSansDisplay_400Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  defaultButtonText: {
    fontFamily: 'NotoSansDisplay_400Regular',
    fontSize: 16,
    textAlign: 'center', // Align text horizontally
    lineHeight: 20,
  },
});

export default CustomButton;