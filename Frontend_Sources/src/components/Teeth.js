import React, { useState, Suspense, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useProgress, Html, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { a, useTransition } from '@react-spring/three';

const models = [
  { file: '/models/normal.obj', label: 'FLUORIDE AMOUNT: normal' },
  { file: '/models/too_little.obj', label: 'FLUORIDE AMOUNT: too little' },
  { file: '/models/too_much.obj', label: 'FLUORIDE AMOUNT: too much' }
];

function Loader() {
  const { progress } = useProgress();
  return <Html center style={{ color: '#000' }}>{progress.toFixed(0)} %</Html>;
}

function ObjPreloader({ onLoad }) {
  const loaded = useLoader(OBJLoader, models.map(m => m.file));
  useEffect(() => {
    const objs = loaded.map((obj, i) => ({
      ...models[i],
      object: obj.clone()
    }));
    onLoad(objs);
  }, [loaded, onLoad]);
  return null;
}

function TeethMesh({ object }) {
  const obj = useMemo(() => object.clone(), [object]);
  useMemo(() => {
    obj.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material && child.material.color) {
          child.material.color.set('#ffffff');
        }
      }
    });
  }, [obj]);
  return <primitive object={obj} scale={35} />;
}

function Scene({ objects, currentIndex, direction, hovered }) {
  const { camera } = useThree()
  const { x, y, z, w } = camera.quaternion

  const offset = useMemo(() => {
    return new THREE.Vector3(direction * 25, 0, 0)
      .applyQuaternion(camera.quaternion)
      .toArray()
  }, [direction, x, y, z, w])

  const transitions = useTransition(currentIndex, {
    key: i => objects[i].file,
    from: { position: offset },
    enter: { position: [0, 0, 0] },
    leave: { position: offset.map(v => -v) },
    config: { tension: 170, friction: 26 }
  });

  return (
    <>
    <ambientLight intensity={0.15}/>
    
      <directionalLight position={[0, 0, 1000]} intensity={1} />
      {transitions((style, i) => (
        <a.group key={objects[i].file} position={style.position}>
          <TeethMesh object={objects[i].object} />
        </a.group>
      ))}

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0}
        scale={60}
        blur={2.5}
        far={2.5}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={hovered}
        enableRotate={hovered}
        minDistance={0.2}
        maxDistance={20}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
}

export default function Teeth({ caption }) {
  const [objects, setObjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const ready = objects.length === models.length;

  const prev = () => {
    if (!ready) return;
    setDirection(-1);
    setIndex(i => (i === 0 ? objects.length - 1 : i - 1));
  };

  const next = () => {
    if (!ready) return;
    setDirection(1);
    setIndex(i => (i === objects.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="Teeth">
      <div
        className="model-viewer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className="nav-arrow left"
          onClick={prev}
          aria-label="Previous model"
          disabled={!ready}
        />

        <Canvas
          camera={{ position: [0, 0, 5], near: 0.01, far: 100 }}
          shadows
          gl={{ alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={<Loader />}>
            <ObjPreloader onLoad={setObjects} />
          </Suspense>

          {ready && (
            <Scene
              objects={objects}
              currentIndex={index}
              direction={direction}
              hovered={hovered}
            />
          )}
        </Canvas>

        <button
          className="nav-arrow right"
          onClick={next}
          aria-label="Next model"
          disabled={!ready}
        />
      </div>

      <div className="caption">
        {caption ? `${caption} — ` : ''}
        {ready ? objects[index].label : 'Loading...'}
      </div>
    </section>
  );
}
