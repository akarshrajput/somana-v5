"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  VStack,
} from "@chakra-ui/react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Customer Support
        </Text>
        <Text>
          We're here to help you with any questions or issues you may have!
        </Text>

        <Box>
          <Text fontSize="xl" fontWeight="semibold">
            Frequently Asked Questions
          </Text>
          <Divider my={4} />
          <VStack spacing={4} align="start">
            <Text>
              <strong>Q: How can I share my stories?</strong>
            </Text>
            <Text>
              A: You can share your stories by clicking on the 'Share' button on
              our homepage.
            </Text>

            <Text>
              <strong>Q: What kind of music can I upload?</strong>
            </Text>
            <Text>
              A: You can upload any original music that you own the rights to.
            </Text>

            <Text>
              <strong>Q: Is there a limit to the podcasts I can share?</strong>
            </Text>
            <Text>A: No, you can share as many podcasts as you'd like!</Text>

            <Text>
              <strong>Q: How can I reset my password?</strong>
            </Text>
            <Text>
              A: You can reset your password by clicking on 'Forgot Password?'
              on the login page.
            </Text>
          </VStack>
        </Box>

        <Box as="form" onSubmit={handleSubmit} width="100%">
          <Text fontSize="xl" fontWeight="semibold">
            Contact Us
          </Text>
          <Divider my={4} />
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <button
            type="submit"
            className="p-2 px-2 font-medium text-sm bg-green-300 rounded-md flex items-center gap-1"
          >
            Send Message
          </button>
          {success && (
            <Text color="green.500" mt={2}>
              Your message has been sent successfully!
            </Text>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Page;
