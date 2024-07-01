import { ItemContentElement } from '@/types/item';

export function extractAuthors({
  item,
}: {
  item: any & { origin: { authors: { name: string }[] } };
}) {
  return (
    item.origin?.authors
      ?.map((a: { name: string }) => a?.name)
      .filter((n: string) => n && n !== '')
      .slice(0, 5) ?? []
  );
}

export function extractRenderedContent({
  renderedItem,
  langs,
}: {
  renderedItem: any & {
    languages: {
      [lang: string]: { content: { [key: string]: ItemContentElement[] } };
    };
  };
  langs: string[];
}) {
  return langs.reduce(
    (obj, lang) => ({
      ...obj,
      [lang]:
        lang in renderedItem.languages
          ? Object.values(renderedItem.languages[lang].content)
          : [],
    }),
    {},
  );
}
