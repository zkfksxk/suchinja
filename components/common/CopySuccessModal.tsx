'use client';

import { Modal, Text } from '@mantine/core';

interface CopySuccessModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function CopySuccessModal({
  opened,
  onClose,
}: CopySuccessModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      centered
      size='xs'
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Text size='lg' mb='md' ta='center'>
        클립보드에 링크가 복사되었습니다.
      </Text>
    </Modal>
  );
}
