import { Button } from '@chakra-ui/react'

interface ButtonProps{
    addCount: () => void;

}

export const MyButton : React.FC<ButtonProps> = ({ addCount }) => {
    return <> 
    <Button colorScheme='blue' onClick={()=> addCount()}>Click me </Button>

    
    </>

};