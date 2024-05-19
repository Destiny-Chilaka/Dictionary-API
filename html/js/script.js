const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');

btn.addEventListener("click", ()=> {
let inpWord = document.getElementById("inp-word").value
    fetch(url+inpWord)
    .then((response) => response.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML = `<div class="flex justify-between">
        <div class="mb-3 ">
            <h4 class="mb-1 font-semibold text-xl">${inpWord}</h4>
            <p class="text-violet-300">${data[0].meanings[0].partOfSpeech}</p>
            <span class="text-violet-300 inline">${data[0].phonetic}</span>
        </div>
        <div><i class="fa-solid fa-volume-high text-violet-600 cursor-pointer" id="sound"></i></div>
    </div>
    <div class="details">
        <p class="mb-4">${data[0].meanings[0].definitions[0].definition}</p>
        <p class="p-4 sentence">${data[0].meanings[0].definitions[0].example || ""}</p>
    </div>`;
    })
    .catch(() => {
        result.innerHTML = `<h3> Couldn't Find The word </h3>`
    })
    
});

