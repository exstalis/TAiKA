// styles/commonStyles.ts
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export const commonStyles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30, // Flexible horizontal margin
    marginVertical: 20, // Flexible vertical margin
  },
  logo: {
    fontFamily: 'MajorMonoDisplay_400Regular',
    fontSize: 48,
    fontWeight: '400',
    color: colors.darknavy,
    marginBottom: 8,
    textAlign: 'center', // Center title horizontally
  },
  tagline: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: colors.darknavy,
    marginBottom: 40,
    textAlign: 'center', // Center subtitle horizontally
  },
  accentButton: {
    backgroundColor: colors.pinkred,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: 252,
    height: 50,
    marginVertical: 17,
  },
  accentButtonText: {
    fontFamily: 'Nunito_600SemiBold',
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
  grayButton: {
    backgroundColor: colors.grayishBlue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: 252,
    height: 50  ,
    marginVertical: 17,
  },
  grayButtonText: {
    fontFamily: 'Nunito_600SemiBold',
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  whiteButton: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: 252,
    height: 50  ,
    marginVertical: 17,
  },
  whiteButtonText: {
    fontFamily: 'Nunito_600SemiBold',
    color: colors.darknavy,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    fontFamily: 'NotoSans_400Regular',
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
    color: colors.darknavy,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});