import { Container } from '@mantine/core';
import { IoMdHome } from 'react-icons/io';

export const Header = () => {
  return (
    <Container
      w={{ base: '100%', sm: 500 }}
      h='54px'
      bg='gray.9'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '13px 16px',
      }}
    >
      <IoMdHome color='white' size={28} />
    </Container>
  );
};
