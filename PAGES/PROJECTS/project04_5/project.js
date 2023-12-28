"use strict";

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for(let i = 0; i < phrases.length; ++i)
{
      phrases[i].onclick = () =>{
            let phrase = document.createElement('h1');
            phrase.textContent = phrases[i].textContent;
            
            let footnote = document.createElement('p');
            footnote.textContent = footnotes[i];
            footnote.style = "font-style: italic; font-size: 1.2em;";

            let closeButton = document.createElement('input');
            closeButton.type = "button";
            closeButton.value = "Close Footnote";
            closeButton.style = "display: block; margin: 10px auto;";

            const windowFeatures = "width=300, height=200, top=100, left=100";
            let popup = window.open("", 'footnote', windowFeatures);
            popup.document.body.style = "background-color: ivory; font-size: 16px; padding: 10px;";
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);

            closeButton.onclick = () =>{
                  popup.close();
            }
      }
}