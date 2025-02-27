import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// screens/Landin gScreen.tsx
import { commonStyles } from '../styles/commonStyles';
import { colors } from '../constants/colors';
import CustomButton from '../components/CustomButton';


const Landing = () => {
  const navigation = useNavigation();
  console.log('LandingScreen rendered with background color:', colors.suntastic);


//   return (
//     <View style={styles.buttonContainer}>
//       <Text>Landing Page</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.title}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

  return (
    <View>
      <View>
        <Text style={styles.title}>TAIKA</Text> 
        <Text style={styles.subtitle}> generate/share bilingual stories</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="search a story"
          onPress={() => console.log('Search a story button pressed!')}
          style={[styles.button, { backgroundColor: colors.grayishBlue }]}
          textColor={colors.white}
        />
        <CustomButton
          title="sign up/in"
          onPress= {() => navigation.navigate('SignUp')}
          style={[styles.button, { backgroundColor: colors.white }]}
          textColor={colors.grayishBlue}
           // Updated to use grayishBlue for better contrast
        />
        <CustomButton
          title="try"
          onPress={() => console.log('Try button pressed!')}
          style={[styles.button, { backgroundColor: colors.pinkred }]}
          textColor={colors.white}
        />
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
    // Add styles for title here
  },
  subtitle: {
    // Add styles for subtitle here
  },
});

export default Landing;