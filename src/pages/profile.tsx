import { Text } from '@chakra-ui/react'
import { Center,Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export const ProfilePage = () => {
    return (
        <>
            <Center paddingTop={"100px"}>
                <Text fontSize='6xl' as='b'>Proflile</Text><></>
            </Center>
            <Center paddingTop={"30px"}>
                <Image
                    borderRadius='full'
                    boxSize='500px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
            </Center>
            <Center paddingTop={"50px"}>
                <Box>
                    <Heading>Takaaki Kasai</Heading>
                    <Text>
                        ここに書くここに書くここに書くここに書くここに書く<br/>
                        fszsfdzf


                    </Text>
                    <a href="/">戻る</a>
                </Box>
            
            </Center>

        </>
    );

}

export default ProfilePage;