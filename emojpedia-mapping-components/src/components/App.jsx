import React from "react";
import Entry from "./Entry";
import emojis from "../emojipedia";

function emojilist(eachemoji) {
  return (
    <Entry
      key={eachemoji.id}
      name={eachemoji.name}
      emoji={eachemoji.emoji}
      meaning={eachemoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(emojilist)}</dl>
      {/* 

      
      <dl className="dictionary">
        <Entry />
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div>
      </dl> */}
    </div>
  );
}

export default App;
