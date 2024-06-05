import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/world">World</Link>
            <Link as={RouterLink} to="/business">Business</Link>
            <Link as={RouterLink} to="/markets">Markets</Link>
            <Link as={RouterLink} to="/opinion">Opinion</Link>
            <Link as={RouterLink} to="/tech">Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Featured Articles */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>Featured Articles</Heading>
          <VStack spacing={8}>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" />
              <Heading as="h3" size="lg" mt={4}>Article Headline 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" />
              <Heading as="h3" size="lg" mt={4}>Article Headline 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4}>
            <Box>
              <Heading as="h4" size="md">Trending Article 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Article 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Trending Article 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;