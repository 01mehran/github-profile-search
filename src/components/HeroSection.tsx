// Icons;
import searchIcon from '../assets/Search.svg';

// Types;
import type { IHeroSectionProps } from '../types/components.types';

export default function HeroSection({
  onHandleChange,
  input,
  onHandleSubmit,
}: IHeroSectionProps) {
  return (
    <header className="h-48 w-full bg-black bg-[url(./assets/mobile-hero-img.jpg)] bg-cover bg-center bg-no-repeat px-4 py-3 sm:h-54 sm:bg-[url(./assets/desktop-hero-img.jpg)]">
      {/* Search input */}
      <form
        onSubmit={onHandleSubmit}
        className="relative mx-auto h-12 w-full rounded-lg sm:max-w-lg"
      >
        <input
          type="text"
          placeholder="Enter a github username"
          className="bg-background ring-text mx-auto h-full w-full rounded-lg border-0 px-12 text-white outline-0 transition-all duration-200 focus:ring"
          value={input}
          onChange={onHandleChange}
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 transform"
        />
      </form>
    </header>
  );
}
