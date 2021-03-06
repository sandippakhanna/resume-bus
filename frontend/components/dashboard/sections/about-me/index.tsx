import { HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import Head from "next/head"
import React, { useState } from "react"
import { BiChart } from "react-icons/bi"
import { FaPhone, FaShareAlt, FaUser } from "react-icons/fa"
import AboutMeContent from "./about-me-content"
import ContactInformationContent from "./contact-information"
import SocialLinksContent from "./social-links"
import StatisticsContent from "./statistics"

const AboutMeSection: React.FC = () => {
  const selectedBg = useColorModeValue("white", "gray.700")
  const unselectedBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50")
  const textColor = useColorModeValue("gray.700", "gray.100")

  type pageTypes =
    | "AboutMe"
    | "ContactInformation"
    | "Statistics"
    | "SocialLinks"

  const [page, setPage] = useState<pageTypes>("AboutMe")

  return (
    <>
      <Head>
        <title>About Me | Dashboard</title>
      </Head>
      <VStack w="full" pt={[2, 2, 8, 10, 10]}>
        <HStack
          w="full"
          align="start"
          spacing={0}
          flexDir={["column", "column", "row", "row", "row"]}
        >
          {/* Side nav */}
          <VStack
            as="nav"
            w={["full", "full", "20%", "20%", "18%"]}
            align="start"
            spacing={1}
            mb={3}
          >
            <HStack
              align="start"
              alignItems="center"
              bgColor={page === "AboutMe" ? selectedBg : unselectedBg}
              py={2}
              px={4}
              w="full"
              cursor="pointer"
              onClick={() => setPage("AboutMe")}
            >
              <FaUser fontSize={13} />
              <Text fontSize={14}>About Me</Text>
            </HStack>
            <HStack
              align="start"
              alignItems="center"
              bgColor={
                page === "ContactInformation" ? selectedBg : unselectedBg
              }
              py={2}
              px={4}
              w="full"
              cursor="pointer"
              onClick={() => setPage("ContactInformation")}
            >
              <FaPhone />
              <Text fontSize={14}>Contact Information</Text>
            </HStack>
            <HStack
              align="start"
              alignItems="center"
              bgColor={page === "Statistics" ? selectedBg : unselectedBg}
              py={2}
              px={4}
              w="full"
              cursor="pointer"
              spacing={1}
              onClick={() => setPage("Statistics")}
            >
              <BiChart fontSize={20} />
              <Text fontSize={14}>Statistics</Text>
            </HStack>
            <HStack
              align="start"
              alignItems="center"
              bgColor={page === "SocialLinks" ? selectedBg : unselectedBg}
              py={2}
              px={4}
              w="full"
              cursor="pointer"
              onClick={() => setPage("SocialLinks")}
            >
              <FaShareAlt fontSize={13} />
              <Text fontSize={14}>Social Links</Text>
            </HStack>
          </VStack>
          {/* Section */}
          <VStack
            as="section"
            w={["full", "full", "80%", "80%", "82%"]}
            align="start"
            bgColor={selectedBg}
            color={textColor}
            px={5}
            py={8}
          >
            {page === "AboutMe" ? <AboutMeContent /> : null}
            {page === "ContactInformation" ? (
              <ContactInformationContent />
            ) : null}
            {page === "Statistics" ? <StatisticsContent /> : null}
            {page === "SocialLinks" ? <SocialLinksContent /> : null}
          </VStack>
        </HStack>
      </VStack>
    </>
  )
}

export default AboutMeSection
