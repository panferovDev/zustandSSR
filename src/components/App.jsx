import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Edit from './Edit';
import Entries from './Entries';
import Header from './Header';
import New from './New';
import Show from './Show';

function App() {
  return (
    <>
      <Header />
      <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
        <div className="max-w-700 center">
          <Routes>
            <Route path="/" element={<Entries />} />
            <Route path="entries/:id" element={<Show />} />
            <Route path="entries/new" element={<New />} />
            <Route path="entries/:id/edit" element={<Edit />} />
          </Routes>
        </div>

      </div>
    </>

  );
}

export default App;
