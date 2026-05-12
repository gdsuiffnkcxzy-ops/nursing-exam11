import { HeartPulse } from 'lucide-react';

export const DynamicBackground = () => (
  <>
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--secondary-dark)_0%,_var(--primary-dark)_80%)] z-[-2]"></div>
    <div className="fixed inset-0 flex items-center justify-center z-[-1] pointer-events-none opacity-[0.03]">
      <HeartPulse size={800} color="#27e9b5" strokeWidth={0.5} />
    </div>
  </>
);
