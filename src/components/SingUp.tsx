import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'green.400'}
        _hover={{
          bg: 'green.500',
        }}
        onClick={onOpen}>Sign Up</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w={'full'} h={'lg'}  >
          <ModalHeader mx={'auto'} my={'25'}>Do you want to Sign Up as ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <img
              src='https://img.freepik.com/free-vector/high-five-hands-concept-illustration_114360-11529.jpg?w=740&t=st=1693404084~exp=1693404684~hmac=07d4bf0f31d5781aff24d95285e7fd13a584917cd4cd32a81b03b2661de6a240'
              className='img-fluid rounded'
              alt='example'
              width={300}
            />

          </ModalBody>

          <ModalFooter mx={'auto'} >
            <Link to='/SingUp'>  <Button bg={"green.400"} color='#fff' _hover={{ bg: 'green.500' }} >
              Company
            </Button>

            </Link>

            <Text m={5} as='b'>
              OR
            </Text>


            <Link to='/InvestorSingUp'>  <Button textColor={"white"} bg={"#2F2E41"} _hover={{ bg: 'black' }}>Investor</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  )
}

export default SingUp;