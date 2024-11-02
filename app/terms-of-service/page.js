// pages/terms.js

import React from "react";
import { Container, Text, VStack, Divider } from "@chakra-ui/react";

const page = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Terms of Service
        </Text>
        <Divider my={4} />
        <Text>
          Welcome to [Your Website Name]! These Terms of Service govern your use
          of our services.
        </Text>
        <Text fontWeight="bold">1. Acceptance of Terms</Text>
        <Text>
          By using our services, you agree to these Terms. If you do not agree,
          please do not use our services.
        </Text>

        <Text fontWeight="bold">2. Changes to Terms</Text>
        <Text>
          We may update these Terms from time to time. Your continued use of our
          services after any changes indicates your acceptance of the new Terms.
        </Text>

        <Text fontWeight="bold">3. User Responsibilities</Text>
        <Text>
          You agree to use our services only for lawful purposes and in
          accordance with these Terms. You are responsible for maintaining the
          confidentiality of your account information.
        </Text>

        <Text fontWeight="bold">4. Limitation of Liability</Text>
        <Text>
          We are not liable for any indirect, incidental, or consequential
          damages arising from your use of our services.
        </Text>

        <Text fontWeight="bold">5. Governing Law</Text>
        <Text>
          These Terms are governed by the laws of [Your Jurisdiction]. Any
          disputes will be resolved in the courts of [Your Jurisdiction].
        </Text>

        <Text fontWeight="bold">Contact Us</Text>
        <Text>
          If you have any questions about these Terms, please contact us at
          [Your Contact Information].
        </Text>
      </VStack>
    </Container>
  );
};

export default page;
