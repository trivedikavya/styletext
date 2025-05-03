// Unicode character ranges for different styles
const unicodeMappings = {
  bold: {
    uppercase: { start: 0x1D400, end: 0x1D419 },
    lowercase: { start: 0x1D41A, end: 0x1D433 },
    digits: { start: 0x1D7CE, end: 0x1D7D7 }
  },
  italic: {
    uppercase: { start: 0x1D434, end: 0x1D44D },
    lowercase: { start: 0x1D44E, end: 0x1D467 }
  },
  bolditalic: {
    uppercase: { start: 0x1D468, end: 0x1D481 },
    lowercase: { start: 0x1D482, end: 0x1D49B }
  },
  script: {
    uppercase: { start: 0x1D49C, end: 0x1D4B5 },
    lowercase: { start: 0x1D4B6, end: 0x1D4CF }
  },
  double: {
    uppercase: { start: 0x1D538, end: 0x1D551 },
    lowercase: { start: 0x1D552, end: 0x1D56B },
    digits: { start: 0x1D7D8, end: 0x1D7E1 }
  },
  fraktur: {
    uppercase: { start: 0x1D504, end: 0x1D51D },
    lowercase: { start: 0x1D51E, end: 0x1D537 }
  },
  sans: {
    uppercase: { start: 0x1D5A0, end: 0x1D5B9 },
    lowercase: { start: 0x1D5BA, end: 0x1D5D3 },
    digits: { start: 0x1D7E2, end: 0x1D7EB }
  },
  monospace: {
    uppercase: { start: 0x1D670, end: 0x1D689 },
    lowercase: { start: 0x1D68A, end: 0x1D6A3 },
    digits: { start: 0x1D7F6, end: 0x1D7FF }
  }
};

// Special cases for characters that are not in the standard unicode range
const specialCases: Record<string, Record<string, string>> = {
  bold: {
    'h': 'h', // Bold h has issues, use regular h
  },
  script: {
    'B': 'ℬ',
    'E': 'ℰ',
    'F': 'ℱ',
    'H': 'ℋ',
    'I': 'ℐ',
    'L': 'ℒ',
    'M': 'ℳ',
    'R': 'ℛ',
    'e': 'ℯ',
    'g': 'ℊ',
    'o': 'ℴ',
  }
};

// Transform functions

// Generic transform function
const transformText = (
  text: string, 
  style: 'bold' | 'italic' | 'bolditalic' | 'script' | 'double' | 'fraktur' | 'sans' | 'monospace'
): string => {
  const mapping = unicodeMappings[style];
  
  return text.split('').map(char => {
    // Check if it's a special case
    if (specialCases[style]?.[char]) {
      return specialCases[style][char];
    }
    
    const code = char.charCodeAt(0);
    
    // Check if uppercase letter (A-Z)
    if (code >= 65 && code <= 90 && mapping.uppercase) {
      return String.fromCodePoint(mapping.uppercase.start + (code - 65));
    }
    
    // Check if lowercase letter (a-z)
    if (code >= 97 && code <= 122 && mapping.lowercase) {
      return String.fromCodePoint(mapping.lowercase.start + (code - 97));
    }
    
    // Check if digit (0-9)
    if (code >= 48 && code <= 57 && mapping.digits) {
      return String.fromCodePoint(mapping.digits.start + (code - 48));
    }
    
    // Return original character if no mapping
    return char;
  }).join('');
};

// Specific transform functions
export const transformToBold = (text: string): string => {
  return transformText(text, 'bold');
};

export const transformToItalic = (text: string): string => {
  return transformText(text, 'italic');
};

export const transformToBoldItalic = (text: string): string => {
  return transformText(text, 'bolditalic');
};

export const transformToScript = (text: string): string => {
  return transformText(text, 'script');
};

export const transformToDouble = (text: string): string => {
  return transformText(text, 'double');
};

export const transformToFraktur = (text: string): string => {
  return transformText(text, 'fraktur');
};

export const transformToSans = (text: string): string => {
  return transformText(text, 'sans');
};

export const transformToMonospace = (text: string): string => {
  return transformText(text, 'monospace');
};