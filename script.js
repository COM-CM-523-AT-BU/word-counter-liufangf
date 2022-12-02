// put your globals here - hint: select elements from the HTML
const countBtn = document.getElementById('countBtn');
const textInput = document.getElementById('text-area');
const getWordBtn = document.getElementById('findBtn');
const wordIput = document.getElementById('wordFoundInput');
const findWord = document.getElementById('findWordInput');
const wordFound = document.getElementById('wordFoundInput');
const wordCount = document.getElementById('wordCountInput');

countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);
// dont' forget to add event listeners to teh buttons

function countWords() {
  let words = textInput.value.split(' ');
  let total = 0;
  for(i=0; i<words.length; i++){
    total +=1;
  }
  printData(total,wordCount);
}

function findWords() {
  let foundwords=0;
  textInput.value.split(' ').forEach(function(i){
      if(i===findWord.value){
        foundwords +=1;
      }
  });
  printData(foundwords,wordFound);
}

// change param1 and param2 to identifiers that make sense
function printData(data, dom) {
    dom.value = data;
}
function printData(data,dom) {
  dom.value = data;
}