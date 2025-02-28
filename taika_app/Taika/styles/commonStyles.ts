// styles/commonStyles.ts
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export const commonStyles = StyleSheet.create({
  // Full-screen container
  fullScreenContainer: {
    flex: 1,
  },
  // Centered container
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Logo style (for "TAIKA")
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.darknavy,
    marginBottom: 8,
  },
  // Tagline style (e.g., "generate/share bilingual stories")
  tagline: {
    fontSize: 16,
    color: colors.darknavy,
    marginBottom: 40,
  },
  // Button styles
  accentButton: {
    backgroundColor: colors.pinkred,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: 252,
    height: 42,
    marginVertical: 17,
  },
  accentButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  grayButton: {
    backgroundColor: colors.grayishBlue,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: 252,
    height: 42,
    marginVertical: 17,
  },
  grayButtonText: {
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
    height: 42,
    marginVertical: 17,
  },
  whiteButtonText: {
    color: colors.darknavy,
    fontSize: 16,
    fontWeight: '600',
  },
});