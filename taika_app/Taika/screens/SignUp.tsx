// screens/SignUp.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../constants/colors';
import { commonStyles } from '../styles/commonStyles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SignUp = () => {
  const navigation = useNavigation<NavigationProp>();
  const [yourName, setYourName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign up attempted with:', { yourName, surname, username, email, password });
    navigation.navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.white, colors.white, colors.pinkred]}
        locations={[0, 0.6, 1]}
        style={styles.gradientOverlay}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={commonStyles.logo}>Create New Account</Text>
          <Text style={[commonStyles.tagline, { color: colors.pinkred }]}>
            sign up to continue
          </Text>
        </View>
        <CustomInput
          placeholder="Your name"
          value={yourName}
          onChangeText={(text) => setYourName(text)}
        />
        <CustomInput
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
        <CustomInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <CustomButton
          title="sign up"
          onPress={handleSignUp}
          buttonType="accent"
        />
        <View style={styles.socialMediaContainer}>
          <Text style={styles.socialMediaLabel}>Or sign up with:</Text>
          <View style={styles.socialMediaButtons}>
            <CustomButton
              title="X.com"
              onPress={() => console.log('Sign up with X.com')}
              style={styles.socialMediaButton}
              textColor={colors.darknavy}
            />
            <CustomButton
              title="Reddit"
              onPress={() => console.log('Sign up with Reddit')}
              style={styles.socialMediaButton}
              textColor={colors.darknavy}
            />
            <CustomButton
              title="Google"
              onPress={() => console.log('Sign up with Google')}
              style={styles.socialMediaButton}
              textColor={colors.darknavy}
            />
            <CustomButton
              title="Instagram"
              onPress={() => console.log('Sign up with Instagram')}
              style={styles.socialMediaButton}
              textColor={colors.darknavy}
            />
            <CustomButton
              title="TikTok"
              onPress={() => console.log('Sign up with TikTok')}
              style={styles.socialMediaButton}
              textColor={colors.darknavy}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30, // Updated to use flexible margins
    marginVertical: 20,
  },
  header: {
    marginBottom: 20,
  },
  socialMediaContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialMediaLabel: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    color: colors.darknavy,
    marginBottom: 10,
  },
  socialMediaButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  socialMediaButton: {
    backgroundColor: colors.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 5,
  },
  socialMediaButtonText: {
    fontFamily: 'NotoSansDisplay_400Regular',
    fontSize: 16,
  },
});

export default SignUp;