import { useEffect } from 'react';

const FollowCursor = ({ color = '#1a1a1a' }) => {
  useEffect(() => {
    let canvas;
    let context;
    let animationFrame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const createDot = (x, y, width, lag) => {
      let position = { x, y };
      
      const moveTowards = (targetX, targetY, ctx) => {
        position.x += (targetX - position.x) / lag;
        position.y += (targetY - position.y) / lag;
        ctx.globalCompositeOperation = 'difference'; // Apply multiply blending mode
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(position.x, position.y, width, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      };

      return { moveTowards };
    };

    const dot = createDot(width / 2, height / 2, 10, 10);

    const onMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log('Reduced motion enabled, cursor effect skipped.');
        return;
      }
      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [color]);

  return null;
};

export default FollowCursor;