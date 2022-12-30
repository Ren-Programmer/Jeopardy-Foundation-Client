import { useEffect, useRef, useState } from "react";
import { Text } from "@chakra-ui/react";

export interface ITimer {
  seconds: number;
  start: boolean;
}
export default function Timer({ seconds, start }: ITimer) {
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState(seconds);
  useEffect(() => {
    if (start === true) {
      const id = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      timerId.current = id;
      return () => clearInterval(timerId.current as NodeJS.Timeout);
    }
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current as NodeJS.Timeout);
      console.log("AA");
    }
  }, [countdown]);

  return (
    <>
      <Text fontSize={"4xl"}
        color={countdown >= 10 ? "blue" : countdown >= 5 ? "yellow" : "red"}
      >
        {countdown}
      </Text>
    </>
  );
}
