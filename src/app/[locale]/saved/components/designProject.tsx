import ProjectCard from '@/components/project/card/card.server';
import { extractProjectLanguageSearchParam } from '@/lib/extractLanguage';

const staticData = {
  id: 'design',
  name: 'Rundgang-Design 2024',
  parents: [
    {
      __typename: 'Entry',
      id: '!HqFNHGAzkjwSpiCQRh:content.udk-berlin.de',
      name: 'Institut für Architektur und Städtebau',
      template: 'institute',
    },
  ],
  languages: [
    {
      id: 'en',
      name: 'English',
      searchParam: 'language',
    },
    {
      id: 'de',
      name: 'Deutsch',
      searchParam: 'language',
    },
  ],
  authors: ['Momo Anders', 'Leon Hochhäuser'],
  formats: [
    {
      id: '!RmlKylPBtVbWHdeGnN:content.udk-berlin.de',
      name: 'Weitere',
      searchParam: 'format',
    },
  ],
  faculties: [
    {
      id: '!dXZUaMgdAnKvCcNCgJ:content.udk-berlin.de',
      name: 'Fakultät Gestaltung',
      searchParam: 'faculty',
    },
  ],
};

export default function DesignProject() {
  const lang = extractProjectLanguageSearchParam();
  const item = {
    thumbnail: `/assets/projects/${lang}/mobile.png`,
    ...staticData,
  };
  return <ProjectCard key="design-project" item={item} linkPathname="" />;
}
