// pages/cancellation.js

import React from "react";
import { Container, Text, VStack, Divider } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          Cancellation & Refund Policy
        </Text>
        <Divider my={4} />
        <Text>
          We want you to be satisfied with our services. Please review our
          cancellation and refund policy carefully.
        </Text>

        <Text fontWeight="bold">1. Cancellation Policy</Text>
        <Text>
          You can cancel your subscription at any time before the next billing
          cycle. Cancellations can be made through your account settings.
        </Text>

        <Text fontWeight="bold">2. Refund Policy</Text>
        <Text>
          Refunds will be processed on a case-by-case basis. If you are
          unsatisfied with our services, please contact us within 30 days of the
          charge for assistance.
        </Text>

        <Text fontWeight="bold">
          3. How to Request a Cancellation or Refund
        </Text>
        <Text>
          To request a cancellation or refund, please contact us at [Your
          Contact Information] with your account details and reason for the
          request.
        </Text>

        <Text fontWeight="bold">4. Changes to This Policy</Text>
        <Text>
          We reserve the right to modify this policy at any time. Changes will
          be posted on this page, and your continued use of our services
          constitutes acceptance of the revised policy.
        </Text>

        <Text fontWeight="bold">Contact Us</Text>
        <Text>
          If you have any questions about this Cancellation & Refund Policy,
          please contact us at [Your Contact Information].
        </Text>
      </VStack>
    </Container>
  );
};

export default Page;
