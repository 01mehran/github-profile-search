// Types;
import type { IFotoerProps } from '../types/components.types';

export default function Footer({ showAll, setShowAll }: IFotoerProps) {
  return (
    <footer className="py-4 text-center">
      <button
        className="border-text/40 transform cursor-pointer rounded-full border px-6 py-1.5 text-[11px] font-medium shadow duration-300 hover:scale-[98%] sm:text-[14px]"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'View less repositories' : 'View all repositories'}
      </button>
    </footer>
  );
}
