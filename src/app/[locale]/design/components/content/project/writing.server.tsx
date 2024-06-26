import Image from 'next/image';

export default function DesignContentProjectWriting({
  languageSearchParam,
  project,
}) {
  return (
    <Image
      src={`/assets/projects/${languageSearchParam}/writing.png`}
      alt={project.name}
      width={1660}
      height={745}
      className="dark:invert"
    />
  );
}
