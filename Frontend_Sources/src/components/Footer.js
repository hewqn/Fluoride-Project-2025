import React from 'react';

export default function Footer({ conclusion, sources }) {
  return (
    <footer className="Footer">
      <p>{conclusion}</p>
      <p>sources: {sources.join(', ')}</p>
    </footer>
  );
}

