import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './App.css';

const App: React.FC = () => {

  useEffect(() => {
    const commonOptions = {
      typeSpeed: 50,
      showCursor: false,
    };

    const options1 = {
      ...commonOptions,
      strings: ["The famous equation by Einstein is: ^1000 \\( E = mc^2 \\) ^1000 and it's revolutionary! ^2000"],
      onComplete: function() {
        window.MathJax.typesetPromise();
        new Typed("#line2", options2);
      }
    };

    const options2 = {
      ...commonOptions,
      strings: ["Another important equation is: ^1000 \\( F = ma \\) ^1000 which defines Newton's second law. ^2000"],
      onComplete: function() {
        window.MathJax.typesetPromise();
        new Typed("#line3", options3);
      }
    };

    const options3 = {
      ...commonOptions,
      strings: ["Below is a geometric object representing a circle: ^2000"],
      onComplete: function() {
        if (!document.querySelector('.circle')) {
          const circleDiv = document.createElement('div');
          circleDiv.className = 'centered circle';
          document.getElementById('line3')?.appendChild(circleDiv);
          new Typed("#line4", options4);
        }
      }
    };

    const options4 = {
      ...commonOptions,
      strings: ["And here's another equation: ^1000"],
      onComplete: function() {
        if (!document.querySelector('.equation')) {
          const equationDiv = document.createElement('div');
          equationDiv.className = 'centered equation';
          equationDiv.innerHTML = "\\( x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} \\)";
          document.getElementById('line4')?.appendChild(equationDiv);
          window.MathJax.typesetPromise();
          new Typed("#line5", options5);
        }
      }
    };


    const options5 = {
      ...commonOptions,
      strings: ["Mathematics is the language of the universe! ^2000"]
    };

    new Typed("#line1", options1);
  }, []);

  return (
      <div className="App">
        <div id="output">
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
          <div className="line" id="line4"></div>
          <div className="line" id="line5"></div>
        </div>
      </div>
  );
}

export default App;
