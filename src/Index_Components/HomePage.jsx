import { useState } from 'react';
import React from 'react';
import Cat_Header from './Cat_Header';
import Cat_Body from './Cat_Body';
import CatInput from '../Cat_Generator_Components/Fetch_Cat_Generator';

function HomePage() {
  const [welcome, setWelcome] =useState(true);

  function hideWelcome() {
    setWelcome(false);
  }
    return (
      <>
        <header>
          <Cat_Header />
          </header>
        <main>
           {welcome ? <Cat_Body hide={hideWelcome} /> : <><CatInput/> </>}
        </main>
      </>
    );
  }

export default HomePage;
