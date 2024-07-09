import { useTranslations } from 'next-intl';

export default function DesignSidebarText() {
  const t = useTranslations('Design.description');
  return (
    <div
      className="text-s p-[1.5rem] text-secondary md:text-primary"
      dangerouslySetInnerHTML={{
        __html: t.markup('text', { i: (text) => `<i>${text}</i>`, right: (text) => `<div class="text-right">${text}</div>` }),
      }}
    />
  );
}
