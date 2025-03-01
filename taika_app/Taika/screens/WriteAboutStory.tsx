// screens/WriteAboutStory.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../constants/colors';
import { commonStyles } from '../styles/commonStyles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'WriteAboutStory'>;
type RoutePropType = RouteProp<RootStackParamList, 'WriteAboutStory'>;

const WriteAboutStory = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const [plotInput, setPlotInput] = useState('');

  const { templateInput } = route.params || {};

  const handleGenerate = () => {
    console.log('Story plot input:', plotInput);
    navigation.navigate('StoryDisplay', { templateInput, plotInput });
  };

  return (
    <LinearGradient
      colors={[colors.pinkRedGradientStart, colors.peachOrangeGradientEnd]}
      style={commonStyles.fullScreenContainer}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={[commonStyles.logo, { fontSize: 24 }]}>write about</Text>
            <Text style={[commonStyles.tagline, { color: colors.pinkred, marginBottom: 20, fontSize: 20 }]}>
              a story
            </Text>
          </View>
          <CustomInput
            placeholder="write a plot... or simply what would you like to hear..."
            value={plotInput}
            onChangeText={(text) => setPlotInput(text)}
            multiline
            isMultiline={true} // Indicate multiline input
            numberOfLines={4}
            maxLength={300}
          />
          <Text style={styles.charLimit}>max:300</Text>
          <CustomButton
            title="generate"
            onPress={handleGenerate}
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
    fontSize: 24,
  },
  charLimit: {
    fontFamily: 'NotoSans_400Regular',
    fontSize: 12,
    color: colors.grayishBlue,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

export default WriteAboutStory;