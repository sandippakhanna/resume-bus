import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { FaAngleRight, FaHome } from "react-icons/fa"
import { BreadcrumbType } from "../../../../types/profile"
import Link from "next/link"

interface HeadingBreadcrumbProps {
  grayBackground: string
  title: string
  breadcrumbList: BreadcrumbType[]
  homePageLink?: string
}

const HeadingBreadcrumb: React.FC<HeadingBreadcrumbProps> = (
  props: HeadingBreadcrumbProps
) => {
  const { homePageLink, breadcrumbList, grayBackground, title } = props
  return (
    <HStack
      gap={4}
      flexDir={["column", "column", "column", "row", "row"]}
      justifyContent="space-between"
      alignItems="center"
      w="full"
      bgColor={grayBackground}
      py={8}
      px={6}
    >
      <Heading size="md">{title}</Heading>
      <Breadcrumb spacing={3} separator={<FaAngleRight color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href={homePageLink || "#"}>
              <a>
                <HStack>
                  <FaHome />
                  <Text>Home</Text>
                </HStack>
              </a>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbList.map((breadcrumb, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink>
              <Link href={breadcrumb.link ? breadcrumb.link : "#"}>
                <a>{breadcrumb.text}</a>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </HStack>
  )
}

export default HeadingBreadcrumb
