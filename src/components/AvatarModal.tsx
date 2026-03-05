// Hooks;
import { useEffect } from 'react';

// Types;
import type { IUserProf } from '../types/components.types';

export default function AvatarModal({
  onToggleModalAvatar,
  isAvatarModalOpen,
  avatar,
}: IUserProf) {
  // Close avatar modal with Esc button;
  useEffect(() => {
    // Hidden body overflow when isAvatarModalOpen is open;
    isAvatarModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');

    if (!isAvatarModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onToggleModalAvatar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAvatarModalOpen, onToggleModalAvatar]);

  if (!isAvatarModalOpen) return null;

  return (
    <>
      {isAvatarModalOpen && (
        <div
          className={`fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-black/30 backdrop-blur-sm`}
          onClick={onToggleModalAvatar}
        >
          <div className="animate-fadeInScale w-[80vw] sm:h-100 sm:w-150">
            <img
              src={avatar}
              alt="user github profile"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
