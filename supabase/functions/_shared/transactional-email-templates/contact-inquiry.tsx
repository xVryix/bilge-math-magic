import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Math With Clarity"

interface Props {
  name?: string
  email?: string
  grade?: string
  message?: string
}

const ContactInquiryEmail = ({ name, email, grade, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form message from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}><strong>Name:</strong> {name || 'Not provided'}</Text>
        <Text style={text}><strong>Email:</strong> {email || 'Not provided'}</Text>
        <Text style={text}><strong>Child's Grade:</strong> {grade || 'Not provided'}</Text>
        <Hr style={hr} />
        <Text style={label}>Message:</Text>
        <Text style={text}>{message || 'No message provided'}</Text>
        <Hr style={hr} />
        <Text style={footer}>This message was sent from the {SITE_NAME} contact form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactInquiryEmail,
  subject: (data: Record<string, any>) => `New inquiry from ${data.name || 'a visitor'} — ${SITE_NAME}`,
  to: 'mathwithclaritytutors@gmail.com',
  displayName: 'Contact form inquiry',
  previewData: { name: 'Sarah M.', email: 'sarah@example.com', grade: '5th', message: 'I have a question about tutoring for my 5th grader.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '20px 25px', maxWidth: '580px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#212121', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 12px' }
const label = { fontSize: '13px', fontWeight: '600' as const, color: '#212121', margin: '0 0 4px' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }
