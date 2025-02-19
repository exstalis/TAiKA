import React from 'react';
import { View, StyleSheet, ViewStyle, Image, Text, Button, ImageSourcePropType } from 'react-native';

interface CardProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  imageSource?: ImageSourcePropType;
  bodyText?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

const Card: React.FC<CardProps> = ({ children, style, imageSource, bodyText, buttonText, onButtonPress }) => {
  return (
    <View style={[styles.card, style]}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      {bodyText && <Text style={styles.bodyText}>{bodyText}</Text>}
      {children}
      {buttonText && <Button title={buttonText} onPress={onButtonPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default Card;