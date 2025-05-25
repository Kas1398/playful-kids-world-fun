
export const speakText = (text: string) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    utterance.volume = 0.8;
    
    // Try to use a child-friendly voice
    const voices = speechSynthesis.getVoices();
    const childVoice = voices.find(voice => 
      voice.name.includes('Female') || 
      voice.name.includes('Woman') ||
      voice.name.includes('Karen') ||
      voice.name.includes('Samantha')
    );
    
    if (childVoice) {
      utterance.voice = childVoice;
    }
    
    speechSynthesis.speak(utterance);
  }
};

// Initialize voices when they become available
if ('speechSynthesis' in window) {
  speechSynthesis.addEventListener('voiceschanged', () => {
    speechSynthesis.getVoices();
  });
}
