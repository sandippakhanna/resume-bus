import React from "react"
import { VStack, HStack, Text, Progress } from "@chakra-ui/react"
import { SkillType } from "../../../../types/profile"

interface ProgressBarProps {
  skill: SkillType
  grayText: string
}

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  return (
    <VStack w="full" align="start">
      <HStack justifyContent="space-between" w="full">
        <Text fontWeight={500} fontSize={14}>
          {props.skill.title}
        </Text>
        <Text color={props.grayText} fontSize={14}>
          {props.skill.level}%
        </Text>
      </HStack>
      <Progress
        w="100%"
        value={props.skill.level}
        bgColor="white"
        colorScheme="green"
        size="lg"
        rounded="full"
      />
    </VStack>
  )
}

export default ProgressBar
