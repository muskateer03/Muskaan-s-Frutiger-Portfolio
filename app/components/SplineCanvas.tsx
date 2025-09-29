'use client';
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('/scene.splinecode').then(() => {
        // const camera = app.mainCamera;

        // if (camera) {
        //   // Example: Move camera closer and adjust angle
        //   camera.position.set(0, 0, 50); // X, Y, Z
        //   camera.rotation.set(0, 0, 0);  // Optional: adjust rotation
        //   camera.fov = 45;               // Optional: zoom level (lower = zoomed in)
        // }
      });
    }
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
}