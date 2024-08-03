let speech=new SpeechSynthesisUtterance();

let btn=document.querySelector("button");

let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{

    voices=window.speechSynthesis.getVoices();

    speech.voice=voices[0];

    voices.forEach((voice,i)=>{

       const option=document.createElement("option");

       option.value=i;

       option.textContent=`${voice.name}(${voice.lang})`;

       voiceSelect.appendChild(option);

    })

    voiceSelect.selectedIndex=0;

};

voiceSelect.addEventListener("change",()=>{

    speech.voice=voices[voiceSelect.value];

})

btn.addEventListener("click",()=>{

   speech.text=document.querySelector("textarea").value;

   window.speechSynthesis.speak(speech);

})