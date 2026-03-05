export interface IUserProf {
  onToggleModalAvatar: () => void;
  isAvatarModalOpen: boolean;
  avatar: string;
}

export interface IFotoerProps {
  showAll: boolean;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeroSectionProps {
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
}

export interface IHeaderProps {
  userInfo: IUser;
}

export interface IUser {
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
  bio?: string;
  login: string;
}

export interface IRepos {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  license: {
    spdx_id: string | null;
  } | null;
  updated_at: string;
  html_url: string;
}

export interface TRepoProps {
  repo: IRepos;
}
