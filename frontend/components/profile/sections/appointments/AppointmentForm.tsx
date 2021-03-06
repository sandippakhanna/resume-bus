import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { AxiosError } from "axios"
import { useRouter } from "next/router"
import React, { ChangeEvent, FormEvent, useState } from "react"
import { FaUser } from "react-icons/fa"
import { FiEdit2, FiMail } from "react-icons/fi"
import { MdCall, MdDateRange } from "react-icons/md"
import { RequestedAppointmentType } from "../../../../types/profile"
import axiosInstance from "../../../../utils/axiosInstance"

interface AppointmentFormProps {
  secondaryColor: string
}

const AppointmentForm: React.FC<AppointmentFormProps> = (
  props: AppointmentFormProps
) => {
  const username = useRouter().query.username as string

  const { secondaryColor } = props

  const toast = useToast()

  const [formData, setFormData] = useState<RequestedAppointmentType>({
    subject: "",
    name: "",
    email: "",
    phone: "",
    appointment_time: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const api = `/api/profile/${username}/appointments/request/`

      await axiosInstance.post(api, {
        ...formData,
      })

      toast({
        title: "Done",
        description: "Appointment Booked",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      const err = error as AxiosError

      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    setFormData({
      subject: "",
      name: "",
      email: "",
      phone: "",
      appointment_time: "",
      message: "",
    })
    setLoading(false)
  }

  return (
    <VStack as="form" onSubmit={onSubmit} w="full" py={10} gap={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiEdit2 color="gray.300" />
        </InputLeftElement>
        <Input
          variant="outline"
          w="full"
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={onChange}
          required
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaUser color="gray.300" />
        </InputLeftElement>
        <Input
          variant="outline"
          w="full"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </InputGroup>
      <HStack
        w="full"
        flexDir={["column", "column", "column", "row", "row"]}
        gap={4}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiMail color="gray.300" />
          </InputLeftElement>
          <Input
            variant="outline"
            w="full"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdCall color="gray.300" />
          </InputLeftElement>
          <Input
            variant="outline"
            w="full"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
          />
        </InputGroup>
      </HStack>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdDateRange color="gray.300" />
        </InputLeftElement>
        <Input
          type="datetime-local"
          variant="outline"
          w="full"
          placeholder="Appointment time"
          name="appointment_time"
          value={formData.appointment_time}
          onChange={onChange}
          required
        />
      </InputGroup>
      <Textarea
        rows={6}
        placeholder="Message"
        variant="outline"
        w="full"
        name="message"
        value={formData.message}
        onChange={onChange}
        required
      />
      <Button
        bgColor={secondaryColor}
        color="white"
        w="full"
        rounded="full"
        size="lg"
        shadow="lg"
        type="submit"
        isLoading={loading}
        loadingText="Submitting"
      >
        Booking appointment
      </Button>
    </VStack>
  )
}

export default AppointmentForm
