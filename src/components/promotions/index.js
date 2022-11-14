import { Box } from "@mui/system";
import { MessaseText, PromotionConatiner } from "../../styles/promotions";
import React, { useState, useEffect, useRef } from "react";
import { Slide } from "@mui/material";

const messages = [
  "This website created by Muhammad Mousa Khalid",
  "It's created by using Material UI 5",
  "Created on React JS framework",
];

export default function Promotions() {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setShow(false);
      }, 3000);
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionConatiner ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessaseText>{messages[messageIndex]}</MessaseText>
        </Box>
      </Slide>
    </PromotionConatiner>
  );
}
