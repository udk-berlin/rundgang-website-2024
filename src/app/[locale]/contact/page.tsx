import Content from '@/components/modal/content.server';
import Modal from '@/components/modal/modal';

export default async function Page(props: any) {
  return (
    <Modal>
      <Content title="Contact" />
    </Modal>
  );
}
