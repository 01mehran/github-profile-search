// Hooks;
import { useState } from 'react';

//Compomemts;
import AvatarModal from './AvatarModal';

// Images;
import githubImg from '../assets/githubimg.png';

// Type;
import type { IHeaderProps } from '../types/components.types';

export default function Header({ userInfo }: IHeaderProps) {
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const toggleModalAvatar = () => {
    setIsAvatarModalOpen((prev) => !prev);
  };

  return (
    <>
      <AvatarModal
        onToggleModalAvatar={toggleModalAvatar}
        isAvatarModalOpen={isAvatarModalOpen}
        avatar={userInfo?.avatar_url}
      />

      <article
        className="border-background h-22 w-22 -translate-y-8 transform cursor-pointer rounded-xl border-6 md:h-24 md:w-24"
        onClick={toggleModalAvatar}
      >
        <img
          src={userInfo?.avatar_url || githubImg}
          alt="github img"
          className="h-full w-full rounded-xl object-cover"
        />
      </article>

      {/* Followers  */}
      <article className="-translate-y-7 transform flex-wrap items-start space-y-3 sm:mt-2 sm:flex sm:translate-y-0 sm:space-x-4 md:mt-3 md:space-x-8">
        <div className="box">
          <span className="box-child">Followers</span>
          <span className="pl-3 text-center">{userInfo?.followers || 0}</span>
        </div>
        {/* Following */}
        <div className="box">
          <span className="box-child">Following</span>
          <span className="pl-3 text-center">{userInfo?.following || 0}</span>
        </div>
        {/* Location */}
        <div className="box">
          <span className="box-child">Location</span>
          <span className="pl-3 text-center capitalize">
            {userInfo?.location || 'no location'}
          </span>
        </div>
      </article>
    </>
  );
}
