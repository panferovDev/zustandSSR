import React from 'react';
import AppStore from '../store';
import EntryItem from './EntryItem';

export default function Entries() {
  const entries = AppStore((state) => state.entries);
  return (
    <>
      <a href="/entries/new" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Write about Broccoli</a>
      <main role="main">
        <ul className="entries-list no-bullets no-padding">
          {entries?.map((el) => <EntryItem key={el.id} entry={el} />)}
        </ul>
      </main>
    </>
  );
}
