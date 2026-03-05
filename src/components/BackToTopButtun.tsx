// Hooks;
import { useEffect, useState } from 'react';

export default function BackToTopButtun() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowButton(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={moveToTop}
      className={`shadow-text fixed right-5 bottom-7 transform cursor-pointer rounded-full bg-linear-to-br from-[#13182e] via-[#17183a] to-[#1b1a44] p-3 shadow transition-transform duration-300 hover:-translate-y-1 md:right-8 ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      ↑
    </div>
  );
}
