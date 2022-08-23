let div=document.createElement("div");
div.setAttribute("id","box");
div.style.textAlign="center";

let input=document.createElement("input");
input.setAttribute("type","input");
input.setAttribute("id","text");
input.setAttribute("placeholder","type any word");

let brr=document.createElement("br")

let button=document.createElement("button");
button.setAttribute("type","button");
button.addEventListener("click",foo);
button.innerHTML="search";

let content=document.createElement("div");
content.setAttribute("id","content");
content.style.textAlign="left"

let para=document.createElement("p");
div.append(input,brr,button,content,para);
document.body.append(div);

async function foo(){
    try{
    let res=document.getElementById("text").value;
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`
    // console.log(url)

    let result=await fetch(url);
    let result1=await result.json();
    console.log(result1[0].meanings[0].definitions[0].definition);
    console.log(result1[0].meanings[0].synonyms[0]);
    console.log(result1[0].meanings[0].antonyms[0]);
    console.log(result1[0].meanings[0].partOfSpeech);
    console.log(result1[0].phonetics[0].text);

    content.innerHTML=`<div class="card">
    <div class="card-body">
    <mark>${res}</mark><br>Definition:${result1[0].meanings[0].definitions[0].definition}<br>
    Synonym:${result1[0].meanings[0].synonyms[0]}<br>
    Antonym:${result1[0].meanings[0].antonyms[0]}<br>
    Partsofspeech:${result1[0].meanings[0].partOfSpeech}<br>
    Pronunciation:${result1[0].phonetics[0].text}
    </div>
    </div>
      `
    }
    catch(error){
        console.log("Enter the correct word");
   }

}
