import Link from "next/link";
import Image from "next/image";
import { Item } from "@/types";
export type ProjectCardProps = {
  item: Item;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="w-full">
      <div>
        <Image
          src={props.item.thumbnail}
          width={500}
          height={500}
          alt="thumbnail of student project"
        />
      </div>
      <div>{props.item.name}</div>
      <div>{props.item.origin.authors.map((a) => a.name).join(", ")}</div>
    </div>
  );
}
