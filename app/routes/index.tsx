import {
  Container,
  Text,
  Box,
  Progress,
  Button,
} from "@chakra-ui/react";

import styles from '~/styles/index.css';

function getTodayPercentage() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const result = Math.floor((day / 365) * 100);
  return result;
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const todayPercentage = getTodayPercentage();

  return (
    <Container>
      <Box p={4} textAlign="center">
        <Text as="h1" fontSize="4xl" fontWeight="bold">
          WakeUp
        </Text>
      </Box>
      <Box mb={2}>
        <Text fontSize="xl">
          2022년의 {todayPercentage}%가 지났어요.
        </Text>
      </Box>
      <Progress
        hasStripe
        isAnimated
        size="lg"
        max={100}
        value={todayPercentage}
      />
      <Box textAlign="center" mt={8}>
        <Button size="lg" colorScheme="blue">
          WakeUp 알림 받기
        </Button>
      </Box>
    </Container>
  );
}
