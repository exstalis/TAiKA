// screens/LandingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';
import CustomButton from '../components/CustomButton';
import { RootStackParamList } from '../types/navigation';

// Type the navigation prop using RootStackParamList
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Landing = () => {
  const navigation = useNavigation<NavigationProp>();
  console.log('LandingScreen rendered with background color:', colors.suntastic);

  return (
    <View style={[commonStyles.centeredContainer, { backgroundColor: colors.white }]}>
      <View>
        <Text style={commonStyles.title}>TAIKA</Text>
        <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>
          generate/share bilingual stories
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="search a story"
            onPress={() => navigation.navigate('SearchStory')} // Now TypeScript knows this is valid
            style={[commonStyles.accentButton, { backgroundColor: colors.grayishBlue }]}
            textColor={colors.white}
          />
          <CustomButton
            title="sign up/in"
            onPress={() => navigation.navigate('SignUp')} // Now TypeScript knows this is valid
            style={[commonStyles.accentButton, { backgroundColor: colors.white }]}
            textColor={colors.grayishBlue}
          />
          <CustomButton
            title="try"
            onPress={() => navigation.navigate('Try')} // Now TypeScript knows this is valid
            style={[commonStyles.accentButton, { backgroundColor: colors.pinkred }]}
            textColor={colors.white}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 252,
    height: 42,
    marginTop: 123,
    marginBottom: 17,
    marginLeft: 78,
    marginRight: 83,
  },
  title: {
    // Add styles for title here if needed
  },
  subtitle: {
    // Add styles for subtitle here if needed
  },
});

export default Landing;