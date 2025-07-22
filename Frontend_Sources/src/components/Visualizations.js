import React from 'react';

export default function Visualizations({ children }) {
  return <div className="Visualizations">{children}</div>;
}

Visualizations.VizExample = function VizExample({ chartType, data, caption, children }) {
  return (
    <div className="VizExample">
      <div className="chart">[{chartType} chart placeholder]</div>
      <div className="caption">{caption}</div>
      <div className="explanation">{children}</div>
    </div>
  );
};
