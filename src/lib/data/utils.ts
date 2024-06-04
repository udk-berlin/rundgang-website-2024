import { ItemContent } from '@/types/item';
export function extractAuthors({
  item,
}: {
  item: any & { origin: { authors: { name: string }[] } };
}) {
  return item.origin.authors.map((a: { name: string }) => a.name).slice(0, 5); // todo: why do we slice here?
}

export function extractRenderedContent({
  renderedItem,
  langs,
}: {
  renderedItem: any & {
    languages: {
      [lang: string]: { content: { [key: string]: ItemContent[] } };
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
