export default function Visualizations() {
  return (
    <section id="visualizations">
      <h2>Graph Visualizations</h2>

      {/* graphs when finished*/}
      <div className="graphs">
        <h3>Fluoride Data Comparison</h3>
        {/*  Power BI/ graph here */}
        <p>[Graph placeholder]</p>
      </div>

      {/* teeth models when finished */}
      <div className="teeth-models">
        <h3>3D Tooth Models</h3>
        <p>
        effects of different fluoride levels on teeth: Too little, Normal, Too much.
        </p>
        {/* embed  3D models here (e.g., using <model-viewer>, three.js, or images from Rhino/AutoCAD) */}
        <p>[3D Teeth placeholder]</p>
      </div>
    </section>
  );
}
