import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './Joke/index';

import { jokes } from './jokes';

const App = () => {
  return (
    <>
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.id}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </>
  );
};

render(<App />, document.querySelector('#app'));
