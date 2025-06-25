import Link from 'next/link';
import { Button, Container, Stack, Text } from '@mantine/core';

export default function NotFound() {
  return (
    <Container
      size='sm'
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack align='center' gap='md'>
        <Text variant='subtitle-b-18'>Not Found</Text>
        <Text variant='subtitle-b-20'>찾을 수 없는 페이지입니다.</Text>
        <Button component={Link} href='/' size='md' px='xl'>
          홈으로
        </Button>
      </Stack>
    </Container>
  );
}
