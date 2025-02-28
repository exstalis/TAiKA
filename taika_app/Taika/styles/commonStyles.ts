// styles/commonStyles.ts
import { StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export const commonStyles = StyleSheet.create({
  // Container for centering content
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Common title style
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.darknavy,
  },
  // Subtitle style (e.g., "story template", "a story")
  subtitle: {
    fontSize: 16,
    color: colors.pinkred,
    marginBottom: 20,
  },
  // Accent button style (e.g., "next", "generate", "sign up")
  accentButton: {
    backgroundColor: colors.pinkred,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 20,
  },
  accentButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  // Input field style
  input: {
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
    color: colors.darknavy,
  },
  // Card style for story display
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
});