import { Container, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Container
      w={{ base: '100%', sm: 540 }}
      h='54px'
      bg='blue'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>
        © {`${new Date().getFullYear()} `}
        <Text span fw={600}>
          Karanta
        </Text>{' '}
        all rights reserved.
      </Text>
    </Container>
  );
};
