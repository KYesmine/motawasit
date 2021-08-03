import React from 'react';
import axios from 'axios';

import {
  Box,
  Flex,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  SimpleGrid, Center, useMediaQuery, Spinner,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink, Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import { connect } from 'react-redux';
import { getSeries, getCat } from '../../redux/actions/seriesActions';

function Navbar({ getSeries, getCat }) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode } = useColorMode();

  const [isSmallerThan420] = useMediaQuery("(max-width:420px)")

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };
  const [data, setData] = React.useState(null);
  const [cat, setCat] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const categories = await getCat();
      if (categories) {
        console.log(categories);
        setCat(categories.data);
      }
      const res = await getSeries();
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const onOpened = () =>{
    document.body.style.overflow = "hidden";
  }

  const onClosed = () =>{
    document.body.style.overflow = "";
  }
  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      className={'filterNavTop'}
      as="nav"
      align="center"
      //   justify="space-between"

      //   padding="0.5rem"
      //   shadow="lg"
      //   color={color[colorMode]}
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']}
    >
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'black',
          height: '100%',
          marginLeft: 5,
        }}
        to="/featured?featured=1"
      >
        <Flex h="100%" direction="column" justifyContent="center">
          <Text
            whiteSpace="nowrap"
            fontWeight="bold"
            ml="4"
            mr="4"
            fontSize={['lg', '2xl']}
            fontFamily="diodrum-med !important"
          >
            آخر الإصدارات
          </Text>
        </Flex>
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'black',
          height: '100%',
          marginLeft: 5,
        }}
        to="/books"
      >
        <Flex h="100%" direction="column" justifyContent="center">
          <Text
            whiteSpace="nowrap"
            fontWeight="bold"
            ml="4"
            mr="4"
            fontSize={['lg', '2xl']}
            fontFamily="diodrum-med !important"
          >
            جميعها
          </Text>
        </Flex>
      </NavLink>

      <Menu
        onOpen={onOpened}
        onClose={onClosed}
      >
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          whiteSpace="nowrap"
          as={Text}
          //   mt={{ base: 4, md: 0 }}
          ml={8}
          fontSize={['lg', '2xl']}
          fontWeight="bold"
          transition="all 0.2s"
          // _hover={{ bg: 'gray.100' }}
          // _focus={{ outline: 0, boxShadow: 'outline' }}
          fontFamily="diodrum-med !important"
        >
          حسب الصنف
          <FaChevronDown
            style={{
              display: 'inline',
              fontSize: 15,
              marginRight: 3,
              marginTop: 5,
            }}
          ></FaChevronDown>{' '}
        </MenuButton>
        <MenuList
            h="60vh"
            w="100vw" color="white" overflowY={{base:'scroll', sm:'scroll'}} bg={filter[colorMode]} >
          {!data &&
          <Box w="100" mt="50" mb="50" textAlign="center">
            <Spinner size="xl"/>
          </Box>
          }
          <SimpleGrid
              pl={['5%', '5%', '15%', '15%']}
              pr={['5%', '5%', '15%', '15%']}
              py={['5%', '0%', '0%', '0%']}
              columns={[1,2,3,3,4]}
          >
            {cat &&
              cat.map(category => {
                if (isSmallerThan420){
                  return(
                      <Center>
                        <Link
                            key={category.id}
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_category?category=${category.key}`}
                        >
                          <Box m={["0.9","4"]}>
                            <MenuItem
                                _focus={{ bg: 'white', color: 'black' }}
                                _hover={{ bg: 'white', color: 'black' }}
                                fontSize="xl"
                            >
                              <Box display="flex">
                                <Heading
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {category.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                      </Center>
                  )
                }else {
                  return (
                        <Link
                            key={category.id}
                            style={{ margin: '50px !important' }}
                            onClick={handleToggle}
                            to={`/books_by_category?category=${category.key}`}
                        >
                          <Box m={["0.9","4"]}>
                            <MenuItem
                                _focus={{ bg: 'white', color: 'black' }}
                                _hover={{ bg: 'white', color: 'black' }}
                                fontSize="xl"
                            >
                              <Box display="flex">
                                <Heading
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {category.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                  )
                }
            })}
          </SimpleGrid>
        </MenuList>
      </Menu>
      <Menu
          onOpen={onOpened}
          onClose={onClosed}
      >
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          whiteSpace="nowrap"
          as={Text}
          //   mt={{ base: 4, md: 0 }}
          ml={8}
          fontSize={['lg', '2xl']}
          fontWeight="bold"
          transition="all 0.2s"
          // _hover={{ bg: 'gray.100' }}
          // _focus={{ outline: 0, boxShadow: 'outline' }}
          fontFamily="diodrum-med !important"
        >
          سلسلات
          <FaChevronDown
            style={{
              display: 'inline',
              fontSize: 15,
              marginRight: 3,
              marginTop: 5,
            }}
          ></FaChevronDown>{' '}
        </MenuButton>
        <MenuList
            h="60vh"
            w="100vw" color="white" overflowY={{base:'scroll', sm:'scroll'}} bg={filter[colorMode]} >
          {!data &&
          <Box w="100" mt="50" mb="50" textAlign="center">
            <Spinner size="xl"/>
          </Box>
          }
          <SimpleGrid
              pl={['5%', '5%', '15%', '15%']}
              pr={['5%', '5%', '15%', '15%']}
              py={['5%', '0%', '0%', '0%']}
              columns={[1,2,3,3,4]}
          >
            {data &&
              data.map(serie => {
                if (isSmallerThan420){
                  return(
                      <Center>
                        <Link
                            style={{margin: '50px !important'}}
                            onClick={handleToggle}
                            to={`/books_by_series?serie=${serie.name} `}
                        >
                          <Box m={["0.9","4"]}>
                            <MenuItem
                                _focus={{bg: 'white', color: 'black'}}
                                _hover={{bg: 'white', color: 'black'}}
                                fontSize="xl"
                            >
                              <Box textAlign="right" display="flex">
                                <Heading
                                    dir="rtl"
                                    fontFamily="diodrum-med !important"
                                    fontSize={['lg', 'lg', 'xl', 'xl']}
                                >
                                  {serie.name}
                                </Heading>
                              </Box>
                            </MenuItem>
                          </Box>
                        </Link>
                      </Center>
                  )
                }else {
                  return (
                      <Link
                          style={{margin: '50px !important'}}
                          onClick={handleToggle}
                          to={`/books_by_series?serie=${serie.name} `}
                      >
                        <Box m={["0.9","4"]}>
                          <MenuItem
                              _focus={{bg: 'white', color: 'black'}}
                              _hover={{bg: 'white', color: 'black'}}
                              fontSize="xl"
                          >
                            <Box textAlign="right" display="flex">
                              <Heading
                                  dir="rtl"
                                  fontFamily="diodrum-med !important"
                                  fontSize={['lg', 'lg', 'xl', 'xl']}
                              >
                                {serie.name}
                              </Heading>
                            </Box>
                          </MenuItem>
                        </Box>
                      </Link>
                  )
                }
              })}
          </SimpleGrid>
        </MenuList>
      </Menu>
      {/* <Link>
        <Text
          whiteSpace="nowrap"
          fontWeight="bold"
          ml="8"
          fontSize={['lg', '2xl']}
        >
          سلسلات
        </Text>
      </Link> */}
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'black',
          height: '100%',
          marginLeft: 5,
        }}
        to="furthercoming?furthercoming=1"
      >
        <Flex h="100%" direction="column" justifyContent="center">
          <Text
            whiteSpace="nowrap"
            fontWeight="bold"
            ml="4"
            mr="4"
            fontSize={['lg', '2xl']}
            fontFamily="diodrum-med !important"
          >
            يأتي قريباً
          </Text>
        </Flex>
      </NavLink>
    </Flex>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getSeries: () => dispatch(getSeries()),
    getCat: () => dispatch(getCat()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
