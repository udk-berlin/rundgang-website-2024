'use server';

import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import { ItemContentElement } from '@/types/item';
import AudioPlayer from '@/components/project/detail/content/audioPlayer';

export type ProjectContentElementProps = {
  element: ItemContentElement;
};

export default async function ProjectDetailContentElement({
  element,
}: ProjectContentElementProps) {
  switch (element.template) {
    case 'image':
      return (
        <NextImage
          src={element.content}
          height={500}
          width={500}
          className="max-h-[50dvh] w-fit max-w-full object-cover pb-gutter-sm"
          placeholder="empty"
          alt="project image"
        />
      );
    case 'audio':
      return <AudioPlayer item={element} />;
    case 'video':
      const iframe = element.formatted_content
        .replace('class="video"', 'class="relative w-full h-full pt-[56.25%]"')
        .replace(
          'width="560"',
          'class="w-full h-full absolute top-0 left-0 right-0 bottom-0"',
        )
        .replace('height="315"', '');
      return (
        <div
          className="pb-gutter-sm"
          dangerouslySetInnerHTML={{ __html: iframe }}
        />
      );
    case 'ol':
      return (
        <div className="pb-gutter-sm">
          <ReactMarkdown
            components={{
              li: (props) => (
                <li className="list-item">
                  {props.node?.position?.start.line ?? 0}. {props.children}
                </li>
              ),
            }}
          >
            {element.content}
          </ReactMarkdown>
        </div>
      );
    default:
      return (
        <div className="pb-gutter-sm">
          <ReactMarkdown
            components={{
              strong: (props) => <b>{props.children}</b>,
              em: (props) => <i>{props.children}</i>,
              s: (props) => <s>{props.children}</s>,
              del: (props) => <del>{props.children}</del>,
              ul: (props) => (
                <ul className="list-disc px-gutter-sm">{props.children}</ul>
              ),
              li: (props) => <li className="list-item">{props.children}</li>,
              h1: (props) => <h1 className="text-l">{props.children}</h1>,
              h2: (props) => <h2 className="text-lg">{props.children}</h2>,
              h3: (props) => <h3 className="text-md">{props.children}</h3>,
              h4: (props) => <h4>{props.children}</h4>,
              a: ({ href, children }) => {
                return (
                  <a
                    target="_blank"
                    className="underline"
                    href={href}
                    rel="noreferrer"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {element.content}
          </ReactMarkdown>
        </div>
      );
  }
}
