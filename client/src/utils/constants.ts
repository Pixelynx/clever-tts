export const APP_CONFIG = {
  name: "Clever Text-to-Speech",
  version: "1.0.0",
  description: "Intelligent text-to-speech with smart character filtering",
} as const;

export const TTS_DEFAULTS = {
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0,
} as const;

export const CHARACTER_LIMITS = {
  maxInputLength: 5000,
  warningThreshold: 4000,
} as const;
