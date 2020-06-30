import React from 'react';
import './App.module.css';
import s from './App.module.css';
import HumanQualities from "./components/HumanQuailities/HumanQualities";
import MessageBody from "./components/MessageBody/MessageBody";
import Counter from "./components/Counter/Counter";

function App() {
  return (
      <div className={s.App}>
        <div>
            <MessageBody/>
        </div>
        <div>
          <HumanQualities/>
        </div>
          <div>
            <Counter/>
          </div>

      </div>
  );
}

export default App;
