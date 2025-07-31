import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Verify your email address to complete your registration</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            <Section>
              <Heading className="text-[24px] font-bold text-gray-900 mb-[24px] text-center">
                Verify Your Email Address
              </Heading>
              
              <Text className="text-[16px] text-gray-700 mb-[16px]">
                Hi there,
              </Text>
              
              <Text className="text-[16px] text-gray-700 mb-[24px]">
                Thank you for signing up! To complete your registration and secure your account, please verify your email address by clicking the button below.
              </Text>
              
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[6px] text-[16px] font-medium no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>
              
              <Text className="text-[14px] text-gray-600 mb-[16px]">
                If the button above doesn't work, you can also copy and paste the following link into your browser:
              </Text>
              
              <Text className="text-[14px] text-blue-600 mb-[24px] break-all">
                <Link href={verificationUrl} className="text-blue-600 underline">
                  {verificationUrl}
                </Link>
              </Text>
              
              <Text className="text-[14px] text-gray-600 mb-[16px]">
                This verification link will expire in 24 hours for security reasons.
              </Text>
              
              <Text className="text-[14px] text-gray-600 mb-[24px]">
                If you didn't create an account with us, please ignore this email or contact our support team if you have concerns.
              </Text>
              
              <Text className="text-[16px] text-gray-700">
                Best regards,<br />
                The Team
              </Text>
            </Section>
            
            <Section className="border-t border-gray-200 pt-[24px] mt-[32px]">
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                Your Service, Inc.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
                123 Business Street, Suite 100, Accra, Ghana
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                <Link href="#" className="text-gray-500 underline">Unsubscribe</Link> | 
                <Link href="#" className="text-gray-500 underline ml-[4px]">Privacy Policy</Link> | 
                © 2025 Your Service. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
