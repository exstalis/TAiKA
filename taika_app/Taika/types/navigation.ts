// types/navigation.ts
export type RootStackParamList = {
    Landing: undefined;
    SignUp: undefined;
    SearchStory: undefined;
    Try: undefined;
    StoryDisplay: { storyId?: string };
    GenerateStory: undefined;
    StartStoryView: undefined; // Added
    WriteAboutStory: undefined; // Added
    CreateStoryTemplate: undefined; // Added
  };