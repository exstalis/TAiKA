// screens/CreateStoryTemplate.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../constants/colors';
import { commonStyles } from '../styles/commonStyles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { BlurView } from '@react-native-community/blur';


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CreateStoryTemplate = () => {
  const navigation = useNavigation<NavigationProp>();
  const [templateInput, setTemplateInput] = useState('');

  const handleNext = () => {
    console.log('Story template input:', templateInput);
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
            <Text style={[commonStyles.logo, { color: colors.suntastic, fontSize: 32 }]}>create</Text>
            <Text style={[commonStyles.tagline, { color: colors.secondwhite, marginBottom: 20 }]}>
              story template
            </Text>
          </View>
          <CustomInput
            placeholder="type:<language to>,<word count>,<easy/moderate/advanced>"
            value={templateInput}
            onChangeText={(text) => setTemplateInput(text)}
            maxLength={50}
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
    marginHorizontal: 30,
  },
  card: {
    backgroundColor: colors.secondarywhite, // Semi-transparent white
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden', // Needed for BlurView
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8, // For Android
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