// screens/CreateStoryTemplate.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from './@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../constants/colors';
import { commonStyles } from '../styles/commonStyles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CreateStoryTemplate = () => {
  const navigation = useNavigation<NavigationProp>();
  const [templateInput, setTemplateInput] = useState('');

  const handleNext = () => {
    console.log('Story template input:', templateInput);
    // Navigate to WriteAboutStory with the input (we'll parse it later)
    navigation.navigate('WriteAboutStory', { templateInput });
  };

  return (
    <LinearGradient
      colors={[colors.pinkRedGradientStart, colors.peachOrangeGradientEnd]}
      style={commonStyles.fullScreenContainer}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={[commonStyles.logo, { fontSize: 24 , color: colors.white}]}>create</Text>
            <Text style={[commonStyles.tagline, { color: colors.suntastic, marginBottom: 20, fontSize: 16 }]}>
              story template
            </Text>
          </View>
          <CustomInput
            placeholder="type:<language to>,<word count>,<easy/moderate/advanced>"
            value={templateInput}
            onChangeText={(text) => setTemplateInput(text)}
            maxLength={50} // Max 50 characters as per design
          />
          <Text style={styles.charLimit}>max:50</Text>
          <CustomButton
            title="next"
            onPress={handleNext}
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
    marginHorizontal: 20,
    marginVertical: 20,
  },
  card: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
  },
  charLimit: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 12,
    color: colors.grayishBlue,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

export default CreateStoryTemplate;