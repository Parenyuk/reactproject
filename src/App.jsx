import React from 'react';
import './App.module.css';
import Message from "./components/MessageBody/Message/Message";
import s from './App.module.css';
import UserIcon from "./components/MessageBody/UserIcon/UserIcon";
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
