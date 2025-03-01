// components/CustomInput.tsx
import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const adjustedLineHeight = height > 800 ? 28 : 24; // Adjust based on screen height

interface CustomInputProps extends TextInputProps {
  placeholder: string;
  isMultiline?: boolean; // New prop to indicate multiline input
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, isMultiline = false, ...props }) => {
  console.log(`CustomInput rendered with placeholder: ${placeholder}`);

  return (
    <TextInput
      style={[
        styles.input,
        isMultiline && styles.multilineInput, // Apply multiline styles if needed
        props.style, // Allow overriding styles
      ]}
      placeholder={placeholder}
      placeholderTextColor={colors.grayishBlue}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'NotoSans_400Regular',
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: colors.darknavy,
    borderColor: colors.lightGray, // Border color
    borderWidth: 1, // Add border
    marginHorizontal: '5%', // 5% left and right margins
    marginVertical: 8 * 1.1, // 10% increase over default (8 * 1.1 ≈ 8.8)
    lineHeight: adjustedLineHeight,
  },
  multilineInput: {
    height: 32 * 2, // Double the height of a single line (assuming fontSize 16 + padding)
    textAlignVertical: 'top', // Align text to top for multiline
  },
});

export default CustomInput;