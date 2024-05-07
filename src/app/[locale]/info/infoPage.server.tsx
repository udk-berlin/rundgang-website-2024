import { Temporal } from '@/types/graphql';

export type InfoPageProps = {
  events: Temporal[];
};

export default function InfoPageComponent(props: InfoPageProps) {
  return (
    <div>
      <div>Info Full Page</div>
    </div>
  );
}
