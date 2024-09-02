function speak() {
    const utterance = new SpeechSynthesisUtterance("Welcome to this tutorial!");
  
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];
    speechSynthesis.speak(utterance);
  } 



// const synth = window.speechSynthesis;
// let text = "Hello everybody!!!!"
// const utterThis = new SpeechSynthesisUtterance(text);

// synth.speak(utterThis);

// const synth = window.speechSynthesis;
// const utterThis = new SpeechSynthesisUtterance('I speak in Spanish');
// utterThis.lang = 'es-ES';
// synth.speak(utterThis);


// const synth = window.speechSynthesis;
// const utterThis = new SpeechSynthesisUtterance('I have a deep voice');
// utterThis.pitch = 0.2;
// synth.speak(utterThis);


const synth = window.speechSynthesis;
const utterThis = new SpeechSynthesisUtterance('Lorem ipsum...');

onTextChange = (newText) => {
    synth.cancel();
    utterThis.text = newText;
    synth.speak(utterThis);
}