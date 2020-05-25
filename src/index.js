/**
 * Wrap a SpeechSynthesisUtterance in a promise
 * to make it possible to await the synthesis.
 * 
 * @param {SpeechSynthesisUtterance|string} utter 
 * @return {Promise<SpeechSynthesisUtterance>} 
 */
export default (ssu) => new Promise(resolve => {
  if (typeof ssu === `string`) ssu = new SpeechSynthesisUtterance(ssu);
  const end = () => {
    ssu.removeEventListener('end', end);
    resolve(ssu);
  };
  ssu.addEventListener('end', end);
  window.speechSynthesis.speak(ssu);
});