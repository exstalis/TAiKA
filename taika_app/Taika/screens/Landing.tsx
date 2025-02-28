// screens/Landing.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Landing = () => {
  const navigation = useNavigation<NavigationProp>();
  console.log('LandingScreen rendered');

  return (
    <LinearGradient
      colors={[colors.pinkRedGradientStart, colors.peachOrangeGradientEnd]}
      style={commonStyles.fullScreenContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={commonStyles.logo}>TAIKA</Text>
          <Text style={commonStyles.tagline}>generate/share bilingual stories</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={commonStyles.grayButton}
            onPress={() => navigation.navigate('SearchStory')}
          >
            <Text style={commonStyles.grayButtonText}>search a story</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={commonStyles.whiteButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={commonStyles.whiteButtonText}>sign up/in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={commonStyles.accentButton}
            onPress={() => navigation.navigate('CreateStoryTemplate')}
          >
            <Text style={commonStyles.accentButtonText}>try</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  header: {
    marginBottom: 40, // Adjust spacing between header and buttons
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Landing;