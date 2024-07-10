'use client';
import { AppPathnames } from '@/config';
import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

type ProjectLinkProps = {
  href: AppPathnames;
  children: React.ReactNode;
  className?: string;
};

export default function ProjectLink({
  href,
  children,
  className,
}: ProjectLinkProps) {
  const params = useParams();
  const locale = useLocale();

  return (
    <Link
      className={className}
      href={href}
      locale={locale}
      replace={Boolean(params.id || (params.slug && params.slug.length > 1))}
    >
      {children}
    </Link>
  );
}
