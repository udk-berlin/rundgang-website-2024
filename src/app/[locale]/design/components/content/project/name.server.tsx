import Image from 'next/image';

export default function DesignContentProjectName({
  languageSearchParam,
  project,
}) {
  return (
    <Image
      className="ml-auto h-[15vw] w-auto md:h-[2.5vw] dark:invert"
      src={`/assets/projects/${languageSearchParam}/name.png`}
      alt={project.artist}
      width={1660}
      height={745}
    />
  );
}
