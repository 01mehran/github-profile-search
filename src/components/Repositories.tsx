// Images;
import nesting from '@/assets/Nesting.svg';
import star from '@/assets/Star.svg';
import chield from '@/assets/Chield_alt.svg';

// Utils;
import { getUpdatedAtTime } from '@/utils/getUpdatedAtTime';

// Types;
import type { TRepoProps } from '@/types/components.types';

export default function Repositories({ repo }: TRepoProps) {
  const updatedAt = getUpdatedAtTime(repo.updated_at);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-slate-700 shadow-lg transition-all hover:scale-95"
    >
      <div className="flex h-40 transform cursor-pointer flex-col justify-between rounded-lg bg-linear-to-br from-[#13182e] via-[#17183a] to-[#1b1a44] p-4">
        <div className="flex h-22 flex-col gap-1 overflow-auto">
          <p className="tracking-wide">
            Repository name:{' '}
            <span className="text-text/85 italic">{repo.name}</span>
          </p>
          <p className="tracking-wide">
            Repository description:{' '}
            <span className="text-text/85 italic">
              {repo.description || 'no description'}
            </span>{' '}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 sm:gap-5">
            <article className="flex gap-1 text-sm">
              <img src={nesting} alt="nesting icon" className="w-5" />
              <span>{repo.forks_count}</span>
            </article>
            <article className="flex gap-1 text-sm">
              <img src={star} alt="nesting icon" className="w-5" />
              <span>{repo.stargazers_count}</span>
            </article>
            <article className="flex gap-1 text-sm">
              <img src={chield} alt="nesting icon" className="w-5" />
              <span className="text-nowrap">
                {repo.license?.spdx_id || 'MIT'}
              </span>
            </article>
            <article>
              <p className="text-[14px] text-nowrap">updated {updatedAt}</p>
            </article>
          </div>
        </div>
      </div>
    </a>
  );
}
