import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text, Center,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function Get() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button mt={35}
   
   rightIcon={<ArrowForwardIcon />}
   rounded={'full'}
   size={'lg'}
   fontWeight={'normal'}
   px={6}
   colorScheme={'red'}
   bg={'#48BB78'}
   _hover={{ bg: 'green.500' }}onClick={onOpen}>
    <Text as='b'>Get Started</Text>
    </Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w={'full'} h={'lg'}  >
          <ModalHeader mx={'auto'} my={'25'}>Do you want to Sign Up as ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          <Image
        src={'https://img.freepik.com/free-vector/high-five-hands-concept-illustration_114360-11529.jpg?w=740&t=st=1693404084~exp=1693404684~hmac=07d4bf0f31d5781aff24d95285e7fd13a584917cd4cd32a81b03b2661de6a240'}
        width={300} height={300}
        alt='example'
      />
      
          </ModalBody>

          <ModalFooter mx={'auto'} >
          <Link to='/SingUp'>  <Button bg={"green.400"} color='#fff'_hover={{ bg: 'green.500' }} >
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

        
    </div>
  )
}

export default Get;