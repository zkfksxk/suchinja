import { Container, Title } from '@mantine/core';

export const Header = () => {
  return (
    <Container
      w={{ base: '100%', sm: 540 }}
      h='54px'
      bg='blue'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '13px 16px',
      }}
    >
      <Title order={1} c='white'>
        수친자 테스트
      </Title>
    </Container>
  );
};
