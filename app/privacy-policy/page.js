// pages/privacy.js

import React from "react";
import { Container, Text, VStack, Divider } from "@chakra-ui/react";

const page = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Privacy Policy
        </Text>
        <Divider my={4} />
        <Text>
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your information.
        </Text>

        <Text fontWeight="bold">1. Information We Collect</Text>
        <Text>
          We collect information when you register, use our services, or
          interact with us. This includes your name, email address, and any
          content you share.
        </Text>

        <Text fontWeight="bold">2. How We Use Your Information</Text>
        <Text>
          We may use your information to provide, improve, and personalize our
          services, as well as to communicate with you about your account and
          our services.
        </Text>

        <Text fontWeight="bold">3. Data Security</Text>
        <Text>
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the internet or
          electronic storage is 100% secure.
        </Text>

        <Text fontWeight="bold">4. Sharing Your Information</Text>
        <Text>
          We do not sell or rent your personal information to third parties. We
          may share your information with trusted partners to help us operate
          our services.
        </Text>

        <Text fontWeight="bold">5. Your Rights</Text>
        <Text>
          You have the right to access, correct, or delete your personal
          information. To exercise these rights, please contact us at [Your
          Contact Information].
        </Text>

        <Text fontWeight="bold">Contact Us</Text>
        <Text>
          If you have any questions about this Privacy Policy, please contact us
          at [Your Contact Information].
        </Text>
      </VStack>
    </Container>
  );
};

export default page;
