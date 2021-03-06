import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import { BsFillPlayFill } from "react-icons/bs"

interface HireMeProps {
  why_hire_me: string
  video_description: string
}

const Hireme: React.FC<HireMeProps> = (props: HireMeProps) => {
  const { why_hire_me, video_description } = props

  const hireMeGradient = useColorModeValue(
    "linear(to-l, rgba(230,173,125, 1), rgba(248,143,56, 1))",
    "linear(to-r, #0072ff, #00c6ff)"
  )

  return (
    <Flex pt={5} pb={10} w="full">
      <Box bgGradient={hireMeGradient} w="full" px={14} py={20}>
        <Flex flexDir={["column", "column", "column", "row", "row"]}>
          <VStack
            align="start"
            flex={3}
            display={["none", "none", "flex", "flex", "flex"]}
          >
            <Heading
              as="h3"
              size="lg"
              fontWeight={500}
              textTransform="uppercase"
              color="white"
            >
              Why you hire me?
            </Heading>
            <Heading color="white" textTransform="uppercase">
              {why_hire_me}
            </Heading>
          </VStack>
          <Center flex={2}>
            <Button
              rounded="full"
              w="100px"
              h="100px"
              shadow="2xl"
              as="a"
              href={video_description}
              target="_blank"
            >
              <BsFillPlayFill fontSize={50} />
            </Button>
          </Center>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Hireme
