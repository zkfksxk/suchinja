import { Container, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Container
      w={{ base: '100%', sm: 540 }}
      h='54px'
      bg='blue.1'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text c='white'>
        © {`${new Date().getFullYear()} `}
        <Text span fw={600}>
          Karanta
        </Text>
        all rights reserved.
      </Text>
    </Container>
  );
};
