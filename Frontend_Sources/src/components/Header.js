import React from 'react';

export default function Header({ title, names, intro }) {
  return (
    <header className="Header">
       <h1 className="title">{title}</h1>
      <p className="names">by: {Array.isArray(names) ? names.join(', ') : names}</p>
      <p className="intro">{intro}</p>
    </header>
  );
}