export const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;500;700;900&display=swap');

  :root {
    --primary-dark: #051824;
    --secondary-dark: #162936;
    --gray-custom: #3b5265;
    --accent-green: #27e9b5;
  }

  body {
    background-color: var(--primary-dark);
    color: #ffffff;
    font-family: 'Cairo', 'Inter', sans-serif;
    margin: 0;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .text-glow {
    text-shadow: 0 0 20px rgba(39, 233, 181, 0.4);
  }

  .premium-glass {
    background: rgba(22, 41, 54, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(59, 82, 101, 0.4);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  }

  .premium-glass-hover:hover {
    background: rgba(22, 41, 54, 0.95);
    border-color: var(--accent-green);
    box-shadow: 0 10px 25px rgba(39, 233, 181, 0.1);
    transform: translateY(-4px);
  }

  .deep-glow {
    box-shadow: 0 0 20px rgba(39, 233, 181, 0.2);
  }

  .btn-press:active {
    transform: scale(0.97);
  }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: var(--primary-dark); }
  ::-webkit-scrollbar-thumb { background: var(--gray-custom); border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--accent-green); }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .fade-up { animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  @keyframes neonPulse {
    0%, 100% {
      text-shadow: 0 0 7px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.8), 0 0 21px var(--accent-green), 0 0 42px var(--accent-green);
      transform: scale(1) translateY(0);
    }
    50% {
      text-shadow: 0 0 4px rgba(255,255,255,0.5), 0 0 7px rgba(255,255,255,0.5), 0 0 13px var(--accent-green), 0 0 26px var(--accent-green);
      transform: scale(1.03) translateY(-2px);
    }
  }

  .neon-anim {
    animation: neonPulse 2.5s infinite alternate ease-in-out;
  }

  .option-btn { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
`;
