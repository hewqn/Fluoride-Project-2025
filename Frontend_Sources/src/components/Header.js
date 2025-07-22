import React from 'react';

export default function Header({ title, names, intro }) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <p>by: {names.join(', ')}</p>
      <p>{intro}</p>
    </header>
  );
}