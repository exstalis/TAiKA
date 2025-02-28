// screens/Landing.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';
import CustomButton from '../components/CustomButton';

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
          <CustomButton
            title="search a story"
            onPress={() => navigation.navigate('SearchStory')}
            buttonType="gray"
          />
          <CustomButton
            title="sign up/in"
            onPress={() => navigation.navigate('SignUp')}
            buttonType="white"
          />
          <CustomButton
            title="try"
            onPress={() => navigation.navigate('CreateStoryTemplate')}
            buttonType="accent"
          />
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
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Landing;