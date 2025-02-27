// components/CustomInput.tsx
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { commonStyles } from '../styles/commonStyles';

interface CustomInputProps extends TextInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, ...props }) => {
  console.log(`CustomInput rendered with placeholder: ${placeholder}`);

  return (
    <TextInput
      style={commonStyles.input}
      placeholder={placeholder}
      placeholderTextColor="#64748b"
      {...props}
    />
  );
};

export default CustomInput;