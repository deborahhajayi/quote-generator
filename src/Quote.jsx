import {useState} from "react";
import quotes from "./quotes.json";

const Quote = ()=>{
  const [quote, setQuote] = useState(quotes[0]);
  const [copied, setCopied] = useState(false);

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text="${quote.Quote}"-${quote.Author}`;
    window.open(twitterUrl, "_blank");
  };

  const copyToClipboard = () => {
    const textToCopy = `"${quote.Quote}"-${quote.Author}`;
    navigator.clipboard.writeText(textToCopy)
    .then(()=>{
      setCopied(true);
      setTimeout(()=>setCopied(false),2000);
    })
    .catch((error)=>console.error("Error copying text: ",error));
  };

  return (
    <div className="quote-box">
      <h1>Quote of the Day</h1>
      <p className="quote-text">“{quote.Quote}”</p>
      <p className="quote-author">- {quote.Author}</p>
      <hr />
  
      <div className="control-container">
        <div className="icon-container">
          <div className="share-button x-icon" onClick={tweetQuote}>
            
            <svg alt="x" width="2em" height="2em" viewBox="0 0 300 300.251" xmlns="http://www.w3.org/2000/svg">
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" fill="#a02c79" />
            </svg>
          </div>
          
          <div className="share-button copy-icon" onClick={copyToClipboard}>
            <svg alt="copy" fill="#a02c79" height="2em" width="2em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M479.168,113.227c-0.537-1.284-1.319-2.451-2.304-3.435L370.197,3.125c-2.002-1.991-4.707-3.114-7.531-3.125h-192 C164.776,0,160,4.776,160,10.667V64H42.667C36.776,64,32,68.776,32,74.667v426.667C32,507.224,36.776,512,42.667,512h298.667 c5.891,0,10.667-4.776,10.667-10.667V448h117.333c5.891,0,10.667-4.776,10.667-10.667v-320 C479.997,115.923,479.714,114.527,479.168,113.227z M373.333,36.416l70.251,70.251h-70.251V36.416z M330.667,490.667H53.333 V85.333H224v96c0,5.891,4.776,10.667,10.667,10.667h96V490.667z M245.333,170.667v-70.251l70.251,70.251H245.333z M458.667,426.667H352V181.333c-0.009-2.827-1.132-5.537-3.125-7.541L242.208,67.125c-2.005-1.994-4.714-3.117-7.541-3.125 h-53.333V21.333H352v96c0,5.891,4.776,10.667,10.667,10.667h96V426.667z"></path> </g> </g> </g></svg>
          </div>
          
          {copied && <span className="copied-message">Copied!</span>}
        </div>
  
        <button onClick={fetchQuote} className="new-quote-button">New Quote</button>
      </div>
    </div>
  );
  
  
  
}


export default Quote;
