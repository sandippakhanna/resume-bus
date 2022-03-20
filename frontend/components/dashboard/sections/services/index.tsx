import {
  Button,
  Divider,
  Heading,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import { FaPencilAlt, FaPlusSquare, FaTrash } from "react-icons/fa"
import Image from "../../../image"

const ServicesSection = () => {
  return (
    <VStack
      bgColor="white"
      w="full"
      align="start"
      py={5}
      px={8}
      shadow="sm"
      rounded="sm"
    >
      <Head>
        <title>Services | Dashboard</title>
      </Head>
      <HStack w="full" justifyContent="space-between">
        <Heading pb={2} as="h3" size="md" fontWeight="normal">
          Services
        </Heading>
        <Link href="/dashboard/services/new">
          <a>
            <Button size="xs" colorScheme="green" rounded={0}>
              <FaPlusSquare fontSize={13} />
              <Text fontSize={12} ps={1}>
                Add New Record
              </Text>
            </Button>
          </a>
        </Link>
      </HStack>
      <Divider bgColor="blackAlpha.500" borderWidth="1px" />

      <VStack w="full" pt={5} align="start" spacing={4}>
        <Table variant="simple" w="full">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Operations</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <HStack
                  w="full"
                  align="start"
                  alignItems="center"
                  flexDir={["column", "row", "row", "row", "row"]}
                  gap={2}
                  spacing={[0, 2, 2, 2, 2]}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/1.png"
                    alt="service image"
                  />
                  <Text fontSize={13}>SEO Specialist</Text>
                </HStack>
              </Td>
              <Td>
                <HStack
                  w="full"
                  align="start"
                  flexDir={["column", "row", "row", "row", "row"]}
                  gap={2}
                  spacing={[0, 2, 2, 2, 2]}
                >
                  <Link href="/dashboard/services/edit/1">
                    <a>
                      <Button size="sm" rounded={0} colorScheme="orange">
                        <FaPencilAlt fontSize={13} />
                        <Text fontSize={13} ps={2}>
                          Edit
                        </Text>
                      </Button>
                    </a>
                  </Link>
                  <Button size="sm" rounded={0} colorScheme="red">
                    <FaTrash fontSize={13} />
                    <Text fontSize={13} ps={2}>
                      Delete
                    </Text>
                  </Button>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack
                  w="full"
                  align="start"
                  alignItems="center"
                  flexDir={["column", "row", "row", "row", "row"]}
                  gap={2}
                  spacing={[0, 2, 2, 2, 2]}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/1.png"
                    alt="service image"
                  />
                  <Text fontSize={13}>SEO Specialist</Text>
                </HStack>
              </Td>
              <Td>
                <HStack
                  w="full"
                  align="start"
                  flexDir={["column", "row", "row", "row", "row"]}
                  gap={2}
                  spacing={[0, 2, 2, 2, 2]}
                >
                  <Button size="sm" rounded={0} colorScheme="orange">
                    <FaPencilAlt fontSize={13} />
                    <Text fontSize={13} ps={2}>
                      Edit
                    </Text>
                  </Button>
                  <Button size="sm" rounded={0} colorScheme="red">
                    <FaTrash fontSize={13} />
                    <Text fontSize={13} ps={2}>
                      Delete
                    </Text>
                  </Button>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <HStack
                  w="full"
                  align="start"
                  alignItems="center"
                  flexDir={["column", "row", "row", "row", "row"]}
                  gap={2}
                  spacing={[0, 2, 2, 2, 2]}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/1.png"
                    alt="service image"
                  />
                  <Text fontSize={13}>SEO Specialist</Text>
                </HStack>
              </Td>
              <Td>
                <HStack
                  w="full"
                  align="start"
                  flexDir={["column", "row", "row", "row", "row"]}
                  gap={2}
                  spacing={[0, 2, 2, 2, 2]}
                >
                  <Button size="sm" rounded={0} colorScheme="orange">
                    <FaPencilAlt fontSize={13} />
                    <Text fontSize={13} ps={2}>
                      Edit
                    </Text>
                  </Button>
                  <Button size="sm" rounded={0} colorScheme="red">
                    <FaTrash fontSize={13} />
                    <Text fontSize={13} ps={2}>
                      Delete
                    </Text>
                  </Button>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </VStack>
  )
}

export default ServicesSection