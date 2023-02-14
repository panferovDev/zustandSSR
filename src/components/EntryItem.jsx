import React from 'react';
import useAppStore from '../store';

export default function EntryItem({ entry }) {
  const deleteEntry = useAppStore((state) => state.deleteEntry);
  return (
    <li className="entry-item pad-b-4">
      <a href={`/entries/${entry.id}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</a>
      <p className="entry-stub">{entry.body}</p>
      <button onClick={() => deleteEntry(entry.id)} type="button">delete</button>
    </li>
  );
}
