import React from 'react';
import useAppStore from '../store';

export default function Show() {
  const entry = useAppStore((state) => state.entry);
  const deleteHandler = () => {
    fetch(`/api/v1/entries/${entry.id}`, { method: 'DELETE' })
      .then(() => {
        window.location.href = '/';
      });
  };

  return (
    <div>
      {entry
        ? (
          <>
            <h1>{entry.title}</h1>

            <p>{entry.body}</p>

            <ul id="editAndDeleteUl" className="no-bullets no-padding mar-t-2">
              <li className="pipe-separate left">
                <a href={`/entries/${entry.id}/edit`} className="c-white">edit</a>
              </li>

              <li className="pipe-separate left">
                <button
                  id="deleteEntryButton"
                  type="button"
                  onClick={deleteHandler}
                  className="no-border no-outline no-bg c-white hover-underline"
                >
                  delete
                </button>
              </li>
            </ul>
          </>
        )
        : <h2> Loading </h2>}
    </div>
  );
}
