import { HtmlProps } from '@/components/html/html';

export default function DesignContentProjectFilter({ title, value }) {
  return (
    <DesignContentProjectFilterContainer>
      <div className="text-xxs text-grey">{title}</div>
      <div className="rounded-border border-border px-[0.5rem] py-[0.25rem] text-xs">
        {value}
      </div>
    </DesignContentProjectFilterContainer>
  );
}

function DesignContentProjectFilterContainer({ children }: HtmlProps) {
  return <div className="flex flex-col gap-[0.25rem]">{children}</div>;
}
