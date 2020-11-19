import React from 'react';

import { Heading, Box, Text, SimpleGrid, Flex } from '@chakra-ui/core';
// import '../components/util/changeBg';
import first from '../images/main.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';

export default function Home() {
  const [main, setMain] = React.useState(false);
  const [shop, setShop] = React.useState(false);
  const [center, setCenter] = React.useState(false);
  const [journal, setJournal] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    const cats = [first, main2, main3];

    const node = document.getElementById('image-head');

    const cycleImages = (images, container, step) => {
      images.forEach((image, index) =>
        setTimeout(() => {
          container.style.backgroundImage = `url(${image}) `;
          //   container.style.transition = 'background-image 6s';
        }, step * (index + 1))
      );
      setTimeout(
        () => cycleImages(images, container, step),
        step * images.length
      );
    };
    cycleImages(cats, node, 3000);
    return () => {
      document.body.style.overflow = 'none';
    };
  }, []);

  return (
    <SimpleGrid
      transition="background-image 2s"
      id="image-head"
      color="white"
      bg="black"
      zIndex="9999"
      position="absolute"
      top="0"
      width="100vw"
      height="100vh"
      columns={[1, 1, 2, 2]}
      //   bgImage="url('/images/main.jpg')"
      //   bgRepeat="no-repeat"
      overflow="hidden"
    >
      <a href="/home">
        <Flex
          className="main"
          justifyContent="center"
          onMouseEnter={() => setMain(true)}
          onMouseLeave={() => setMain(false)}
          cursor="pointer"
          _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex justify="center" direction="column">
            <Flex justifyContent="center">
              <Heading
                fontSize={['28px', '28px', '48px', '48px']}
                display="block"
              >
                المتوسط
              </Heading>
            </Flex>
            {main && (
              <Box>
                <Flex justifyContent="center">
                  <Text textAlign="center" w="50%">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima iste est atque
                  </Text>
                </Flex>
                {/* <Flex justifyContent="center" fontSize={['28px', '28px', '48px', '48px']} mt="6">
                  <FaArrowRight className="home_icon"></FaArrowRight>
                </Flex> */}
              </Box>
            )}
          </Flex>
        </Flex>
      </a>
      <a
        href="http://motawasit-shop.vercel.app
"
      >
        <Flex
          className="shop"
          justifyContent="center"
          onMouseEnter={() => setShop(true)}
          onMouseLeave={() => setShop(false)}
          cursor="pointer"
          _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex justify="center" direction="column">
            <Flex justifyContent="center">
              <Heading
                fontSize={['28px', '28px', '48px', '48px']}
                display="block"
              >
                المتجر
              </Heading>
            </Flex>
            {shop && (
              <Box>
                <Flex justifyContent="center">
                  <Text textAlign="center" w="50%">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima iste est atque
                  </Text>
                </Flex>
                {/* <Flex justifyContent="center" fontSize={['28px', '28px', '48px', '48px']} mt="6">
                <FaArrowLeft className="home_icon"></FaArrowLeft>
              </Flex> */}
              </Box>
            )}
          </Flex>
        </Flex>
      </a>
      <a
        href="http://motwasit-journal.vercel.app
"
      >
        <Flex
          className="journal"
          justifyContent="center"
          onMouseEnter={() => setJournal(true)}
          onMouseLeave={() => setJournal(false)}
          cursor="pointer"
          _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex justify="center" direction="column">
            <Flex justifyContent="center">
              <Heading
                fontSize={['28px', '28px', '48px', '48px']}
                display="block"
              >
                المجلة
              </Heading>
            </Flex>
            {journal && (
              <Box>
                <Flex justifyContent="center">
                  <Text textAlign="center" w="50%">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima iste est atque
                  </Text>
                </Flex>
                {/* <Flex justifyContent="center" fontSize={['28px', '28px', '48px', '48px']} mt="6">
                <FaArrowRight className="home_icon"></FaArrowRight>
              </Flex> */}
              </Box>
            )}
          </Flex>
        </Flex>
      </a>
      <a
        href="http://motawasit-center.vercel.app
"
      >
        <Flex
          className="center"
          justifyContent="center"
          onMouseEnter={() => setCenter(true)}
          onMouseLeave={() => setCenter(false)}
          cursor="pointer"
          _hover={{ color: 'black', backgroundColor: 'white' }}
          border="1px solid white"
          w={['100vw', '100vw', '50vw', '50vw']}
          h={['25vh', '25vh', '50vh', '50vh']}
        >
          <Flex justify="center" direction="column">
            <Flex justifyContent="center">
              <Heading
                fontSize={['28px', '28px', '48px', '48px']}
                display="block"
              >
                المركز
              </Heading>
            </Flex>
            {center && (
              <Box>
                <Flex justifyContent="center">
                  <Text textAlign="center" w="50%">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima iste est atque
                  </Text>
                </Flex>
                {/* <Flex justifyContent="center" fontSize={['28px', '28px', '48px', '48px']} mt="6">
                <FaArrowLeft className="home_icon"></FaArrowLeft>
              </Flex> */}
              </Box>
            )}
          </Flex>
        </Flex>
      </a>
    </SimpleGrid>
  );
}
