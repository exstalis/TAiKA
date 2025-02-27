// utils/storyUtils.ts
interface StoryTemplate {
    sourceLanguage: string;
    targetLanguage: string;
    wordCount: number;
    difficulty: 'easy' | 'moderate' | 'advanced';
  }
  
  export const parseStoryTemplate = (input: string): StoryTemplate => {
    console.log(`Parsing story template input: ${input}`);
  
    // Split the input by commas (e.g., "Italian, Spanish, 1000, moderate")
    const parts = input.replace('type:', '').trim().split(',').map(part => part.trim());
  
    if (parts.length !== 4) {
      throw new Error('Invalid story template format. Expected: type: source, target, wordCount, difficulty');
    }
  
    const wordCount = parseInt(parts[2], 10);
    const difficulty = parts[3].toLowerCase() as 'easy' | 'moderate' | 'advanced';
  
    // Validate word count (between 1000 and 8000, inclusive)
    if (isNaN(wordCount) || wordCount < 1000 || wordCount > 8000) {
      throw new Error('Invalid word count. Must be between 1000 and 8000 (inclusive).');
    }
  
    // Validate difficulty
    const validDifficulties = ['easy', 'moderate', 'advanced'];
    if (!validDifficulties.includes(difficulty)) {
      throw new Error(`Invalid difficulty. Must be one of: ${validDifficulties.join(', ')}`);
    }
  
    return {
      sourceLanguage: parts[0],
      targetLanguage: parts[1],
      wordCount,
      difficulty,
    };
  };