import { useEffect, useRef } from 'react';

const MatrixCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Offscreen canvas for the continuous rain simulation
    const rainCanvas = document.createElement('canvas');
    const rainCtx = rainCanvas.getContext('2d');

    const fontSize = 14;
    let columns = 0;
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      rainCanvas.width = canvas.width;
      rainCanvas.height = canvas.height;
      
      columns = Math.ceil(canvas.width / fontSize);
      // Initialize drops at the bottom for upward movement
      const maxRows = Math.ceil(canvas.height / fontSize);
      drops = new Array(columns).fill(maxRows);
    };

    window.addEventListener('resize', resize);
    resize();

    // Matrix characters (Katakana + Latin + Numbers + Greek + Cyrillic + Math)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' + 
                 'αβγδεζηθικλμνξοπρστυφχψω' + // Greek
                 'БГДЁЖЗИЙЛПФЦЧШЩЪЫЭЮЯ' + // Cyrillic
                 '∀∃∅∈∉∋∏∑−∕∙√∞∟∠∣∥∧∨∩∪∫∬∭∮∯∰∴∵∶∷∼∽≈≅≈≠≡≤≥≦≧≪≫⊂⊃⊄⊅⊆⊇⊕⊗'; // Math

    const draw = () => {
      // 1. Update Rain Simulation (always running)
      // Semi-transparent black for trail effect
      rainCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      rainCtx.fillRect(0, 0, rainCanvas.width, rainCanvas.height);

      rainCtx.fillStyle = '#0F0'; // Matrix Green
      rainCtx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        rainCtx.fillText(text, x, y);

        // Reset to bottom if it goes above screen
        if (y < 0 && Math.random() > 0.975) {
          drops[i] = Math.ceil(rainCanvas.height / fontSize);
        }
        drops[i]--; // Move Upwards
      }

      // 2. Render masked view to main canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isVisibleRef.current) {
        const { x, y } = mouseRef.current;
        const radius = 250; // Radius of the "flashlight"
        const diameter = radius * 2;
        
        // Calculate draw bounds to optimize performance
        // Only copy the area around the mouse
        const drawX = x - radius;
        const drawY = y - radius;
        
        ctx.save();
        
        // Draw only the relevant slice of the rain canvas
        // Note: drawImage handles out-of-bounds source coordinates gracefully in most browsers,
        // but explicit clamping is safer if needed. HTML5 Canvas spec says it clips to source.
        ctx.drawImage(
            rainCanvas, 
            drawX, drawY, diameter, diameter, // Source rect
            drawX, drawY, diameter, diameter  // Dest rect
        );
        
        // Apply radial gradient mask
        ctx.globalCompositeOperation = 'destination-in';
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); // Visible
        gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.5)'); // Fade
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Transparent
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) isVisibleRef.current = true;
    };
    
    const handleMouseLeave = () => {
        isVisibleRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[1] pointer-events-none" />;
};

export default MatrixCursor;
