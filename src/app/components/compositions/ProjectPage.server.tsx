import Item from "@/types";

export type ProjectPageProps = Item & {
  x?: any;
};

export default function ProjectPageComponent(props: ProjectPageProps) {
  return (
    <div>
      {props.id}
      Project Page
    </div>
  );
}
