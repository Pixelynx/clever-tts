// Core application types
export interface TTSConfig {
  voice?: SpeechSynthesisVoice;
  rate: number;
  pitch: number;
  volume: number;
}

export interface TextProcessingResult {
  originalText: string;
  cleanedText: string;
  charactersRemoved: number;
  filteringApplied: string[];
}

export interface AudioControls {
  isPlaying: boolean;
  isPaused: boolean;
  currentPosition: number;
  duration: number;
}

// Component prop types
export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassName {
  className?: string;
}
