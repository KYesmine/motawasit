import {
  Box,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export default function PodcastModal({ podcast }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };

  return (
    <>
      <Box shadow="lg" bg={bg[colorMode]} onClick={onOpen}>
        <Image
          src={`${process.env.REACT_APP_STORAGE}/${podcast.image}`}
        ></Image>
        <Box p="4">
          <Heading mt="4" fontFamily="diodrum-med !important" size="md" mb="4">
            {podcast.title}
          </Heading>
          <Box
            m="100px"
            className="event-body"
            dangerouslySetInnerHTML={{
              __html: podcast.description,
            }}
          ></Box>
        </Box>
      </Box>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="transparent" shadow="none">
          <ModalCloseButton
            position="absolute"
            top="10px"
            left="10px"
            right="none"
          />
          <Box
            m="100px"
            className="event-body"
            dangerouslySetInnerHTML={{
              __html: podcast.url,
            }}
          ></Box>
        </ModalContent>
      </Modal>
    </>
  );
}
