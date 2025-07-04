import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCharacterCount(count: number, max: number): string {
  return `${count.toLocaleString()}/${max.toLocaleString()}`;
}

export function calculateReadingTime(
  text: string,
  wordsPerMinute: number = 200,
): number {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
