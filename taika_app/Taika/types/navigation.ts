// types/navigation.ts
export type RootStackParamList = {
    StartStoryView: undefined; // Add StartStoryView
    Landing: undefined;
    SignUp: undefined;
    SearchStory: undefined;
    StoryDisplay: { storyId?: string };
    WriteAboutStory: undefined;
    CreateStoryTemplate: undefined;
  };