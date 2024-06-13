import Image from 'next/image';

export default function DesignContentProjectName({ language, project }) {
  return (
    <Image
      className="ml-auto h-[2.5vw] w-auto"
      src={`/assets/projects/${language}/name.png`}
      alt={project.name}
      width={1660}
      height={745}
    />
  );
}
