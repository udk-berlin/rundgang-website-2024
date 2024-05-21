export function extractAuthors({
  item,
}: {
  item: any & { origin: { authors: { name: string }[] } };
}) {
  return item.origin.authors.map((a: { name: string }) => a.name).slice(0, 5); // todo: why do we slice here?
}
