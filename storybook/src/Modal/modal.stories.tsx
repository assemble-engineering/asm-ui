import { useRef, useState } from 'react';
import { Modal } from '@asm/core';

export default {
  title: 'Modal',
  component: Modal,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleToggleModal = () => {
    if (!modalOpen) {
      setModalOpen(true)
    } else {
      modalTriggerRef.current.focus();
      setModalOpen(false)
    }

  }

  return (
    <>
      <Modal {...args} open={modalOpen} onClose={handleToggleModal}>
        <div style={{height: '200px', width: '100%', background: 'gray'}}>Modal Content</div>
      </Modal>
      <button ref={modalTriggerRef} onClick={handleToggleModal}>Toggle Modal</button>
    </>
  )
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  onClose: () => {},
  children: [],
  ariaModalLabel: 'Modal',
  ariaCloseLabel: 'Close'
};
