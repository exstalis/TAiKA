// types/navigation.ts
export type RootStackParamList = {
    StartStoryView: undefined;
    Landing: undefined;
    SignUp: undefined;
    SearchStory: undefined;
    StoryDisplay: { templateInput?: string; plotInput?: string; storyId?: string };
    WriteAboutStory: { templateInput?: string };
    CreateStoryTemplate: undefined;
  };