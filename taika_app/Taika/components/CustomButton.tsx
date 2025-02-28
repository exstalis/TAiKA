// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Define the props interface for CustomButton
interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // For custom button container styles
  textColor?: string; // For the text color
  backgroundColor?: string; // For the button background color
  textStyle?: StyleProp<TextStyle>; // Optional: For additional text styling
}

// Define local styles for the button
const styles = {
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  } as ViewStyle,
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  } as TextStyle,
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textColor,
  backgroundColor,
  textStyle,
}) => {
  console.log(`CustomButton pressed: ${title}`);

  // Merge the backgroundColor into the button style
  const buttonStyles: StyleProp<ViewStyle> = [
    styles.button,
    backgroundColor && { backgroundColor }, // Apply backgroundColor if provided
    style, // Apply custom style last to allow overriding
  ];

  // Merge the text color into the text style
  const textStyles: StyleProp<TextStyle> = [
    styles.buttonText,
    textColor && { color: textColor }, // Apply textColor if provided
    textStyle, // Apply custom textStyle last to allow overriding
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define default props (optional)
CustomButton.defaultProps = {
  textColor: 'white', // Default text color
  backgroundColor: '#007AFF', // Default background color (same as your original)
};

export default CustomButton;