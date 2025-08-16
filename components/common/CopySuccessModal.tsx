'use client';

import { Flex, Modal, Text } from '@mantine/core';

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
      size='md'
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Flex direction='column' mih={80} align='center' justify='center'>
        <Text size='lg' ta='center' c='blue.9' fw={500}>
          클립보드에 링크가 복사되었습니다.
        </Text>
      </Flex>
    </Modal>
  );
}
