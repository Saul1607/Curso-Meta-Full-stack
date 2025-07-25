import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
      <VStack 
        alignItems="start" 
        bg="white" 
        borderRadius="3xl" 
        gap="3"
      >
        <Image
          rounded="3xl"
          src={imageSrc}
          alt={title}
          maxWidth="100.1%"
        />
        <Heading 
          paddingLeft="5"
          paddingRight="5"
          size="md" 
          color="black"
        >
          {title}
        </Heading>
        <Text 
          paddingLeft="5"
          paddingRight="5" 
          size="sm" 
          color="gray"
        >
          {description}
        </Text>
        <HStack
          justifyContent="start"
          gap="2"
          paddingLeft="5"
            paddingRight="5"
            paddingBottom="3"
        >
          <Text 
            size="xs" 
            color="black"
          >
            See more
          </Text>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            size="1x" 
            color="black"
          />
        </HStack>
      </VStack>
  )
};

export default Card;
