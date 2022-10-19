// import "!style-loader!css-loader!sass-loader!@asm/apple-ui" // !style-loader!css-loader!sass-loader!
import "!style-loader!css-loader!sass-loader!@asm/base-ui" // !style-loader!css-loader!sass-loader!
// import "@asm/apple-ui/dist/style.css"
// import "!style-loader!css-loader!sass-loader!../src/style.scss"
// import "../src/styles/apple.css"
// import "../src/styles/style.scss"
import {useState} from 'react';

export const decorators = [
  (Story) => {
  const [styleSheet, setStyleSheet] = useState("");

  console.log("styleSheet", styleSheet)

  return (
    <>
      {/* <div>
          <link rel="stylesheet" type="text/css" href={styleSheet} />
          <button type="button" onClick={() => setStyleSheet('')}>Click to update stylesheet</button>
      </div> */}

      <div>
        <Story />
      </div>
    </>
  )},
];
