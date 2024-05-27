import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={4} bgImage="url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZXxlbnwwfHx8fDE3MTY4MDUwMjh8MA&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" color="brand.white">
      <VStack spacing={8}>
        {/* Header */}
        <HStack justifyContent="space-between" width="100%">
          <Heading as="h1" size="lg" color="brand.white">
            Software House
          </Heading>
          <IconButton aria-label="Toggle Color Mode" icon={colorModeIcon} onClick={toggleColorMode} />
        </HStack>

        {/* Hero Section */}
        <Box textAlign="center">
          <Heading as="h2" size="2xl" color="brand.white">
            Innovative Software Solutions from the Stars
          </Heading>
          <Text fontSize="xl" mt={4}>
            We build scalable and efficient software tailored to your business needs.
          </Text>
          <Button bg="brand.electricBlue" color="brand.900" size="lg" mt={6} _hover={{ bg: "brand.700" }}>
            Get Started
          </Button>
        </Box>

        {/* Services Section */}
        <VStack spacing={4} align="start" width="100%">
          <Heading as="h3" size="lg" color="brand.white">
            Our Services
          </Heading>
          <HStack spacing={8} wrap="wrap" justifyContent="space-around" width="100%">
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTY4MDUwMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" />
              <Heading as="h4" size="md" mt={4} color="brand.white">
                Web Development
              </Heading>
              <Text mt={2}>Building responsive and high-performance web applications.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTY4MDUwMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Mobile Development" />
              <Heading as="h4" size="md" mt={4} color="brand.white">
                Mobile Development
              </Heading>
              <Text mt={2}>Creating mobile applications for both Android and iOS platforms.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNvbHV0aW9uc3xlbnwwfHx8fDE3MTY4MDUwMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cloud Solutions" />
              <Heading as="h4" size="md" mt={4} color="brand.white">
                Cloud Solutions
              </Heading>
              <Text mt={2}>Offering scalable cloud solutions to meet your business demands.</Text>
            </Box>
          </HStack>
        </VStack>

        {/* Footer */}
        <HStack justifyContent="space-between" width="100%" pt={8} borderTopWidth="1px" borderColor="brand.white">
          <Text>&copy; {new Date().getFullYear()} Software House. All rights reserved. Reach for the stars!</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
