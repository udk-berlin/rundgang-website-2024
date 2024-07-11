import projects, { ProjectLanguages } from '@/projects';

export function extractProjectLanguageSearchParam(searchParams?: {
  lang: ProjectLanguages;
}) {
  const languages = Object.keys(projects);
  if (searchParams?.lang) {
    return searchParams.lang;
  }
  const number = Math.floor(Math.random() * languages.length);
  return languages[number] as ProjectLanguages;
}
