import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

export default function FadingVideo({ src, className, style }) {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const fadingOutRef = useRef(false);

  function fadeTo(video, target) {
    cancelAnimationFrame(rafRef.current);
    const from = parseFloat(video.style.opacity) || 0;
    const t0 = performance.now();
    function step(now) {
      const p = Math.min((now - t0) / FADE_MS, 1);
      video.style.opacity = String(from + (target - from) * p);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let hls;
    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(v);
      } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
        v.src = src;
      }
    } else {
      v.src = src;
    }

    const onLoaded = () => { v.style.opacity = '0'; v.play().catch(() => {}); fadeTo(v, 1); };
    const onTime = () => {
      const rem = v.duration - v.currentTime;
      if (!fadingOutRef.current && rem <= FADE_OUT_LEAD && rem > 0) {
        fadingOutRef.current = true;
        fadeTo(v, 0);
      }
    };
    const onEnded = () => {
      v.style.opacity = '0';
      setTimeout(() => { 
        v.currentTime = 0; 
        v.play().catch(() => {}); 
        fadingOutRef.current = false; 
        fadeTo(v, 1); 
      }, 100);
    };

    v.addEventListener('loadeddata', onLoaded);
    v.addEventListener('timeupdate', onTime);
    v.addEventListener('ended', onEnded);
    return () => {
      cancelAnimationFrame(rafRef.current);
      v.removeEventListener('loadeddata', onLoaded);
      v.removeEventListener('timeupdate', onTime);
      v.removeEventListener('ended', onEnded);
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay muted playsInline preload="auto"
      className={className}
      style={{ ...style, opacity: 0 }}
    />
  );
}
