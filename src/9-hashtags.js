export const hashtags = (text) => {
  // Split the text into an array of words
  const words = text.split(' ');

  // Filter out words that contain hashtags
  return words.filter(word => word.includes('#'));
};
