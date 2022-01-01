import {
  Container,
  Text,
  Box,
  Progress,
  Button,
} from "@chakra-ui/react";


import styles from '~/styles/index.css';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <Container>
      <Box p={4} textAlign="center">
        <Text as="h1" fontSize="4xl" fontWeight="bold">
          WakeUp
        </Text>
      </Box>
      <Box mb={2}>
        <Text fontSize="xl">
          2022년의 10%가 지났어요.
        </Text>
      </Box>
      <Progress
        hasStripe
        isAnimated
        size="lg"
        max={100}
        value={10}
      />
      <Box textAlign="center" mt={8}>
        <Button size="lg" colorScheme="blue">
          WakeUp 알림 받기
        </Button>
      </Box>
    </Container>
  );
}
