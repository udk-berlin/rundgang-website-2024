import Image from 'next/image';

export default function DesignContentProjectWriting({ language, project }) {
  return (
    <Image
      src={`/assets/projects/${language}/writing.png`}
      alt={project.name}
      width={1660}
      height={745}
    />
  );
}
