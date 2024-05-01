import {fetchFormats} from "@/api/rest/data/fromats/fetch";

export interface ProgramPageItemsProps {
}

export default async function ProgramPageItems({}: ProgramPageItemsProps) {
  const formats = await fetchFormats()

  console.log(Object.values(formats.children))//Object.keys(data))


  return (
      <div>
        {Object.values(formats.children).length}
      </div>
  );
}

