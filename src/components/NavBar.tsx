import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Box bg="red" my="0" mx="auto" maxW={"1300px"}>
      <nav>Soy Franco</nav>
    </Box>
  )
}

export default NavBar