import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Math with Clarity"

interface Props {
  parentName?: string
  email?: string
  childName?: string
  grade?: string
  interests?: string
  struggles?: string
  time?: string
}

const FreeSessionRequestEmail = (props: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Free intro session request from {props.parentName || 'a parent'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Free 30-Minute Intro Session Request</Heading>
        <Text style={label}>Parent Info</Text>
        <Text style={text}><strong>Name:</strong> {props.parentName || 'N/A'}</Text>
        <Text style={text}><strong>Email:</strong> {props.email || 'N/A'}</Text>
        <Hr style={hr} />
        <Text style={label}>Child Info</Text>
        <Text style={text}><strong>Child's Name:</strong> {props.childName || 'N/A'}</Text>
        <Text style={text}><strong>Grade:</strong> {props.grade || 'N/A'}</Text>
        <Text style={text}><strong>Interests:</strong> {props.interests || 'N/A'}</Text>
        <Text style={text}><strong>Struggles:</strong> {props.struggles || 'N/A'}</Text>
        <Hr style={hr} />
        <Text style={text}><strong>Preferred Time:</strong> {props.time || 'N/A'}</Text>
        <Text style={footer}>Submitted via the {SITE_NAME} website.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: FreeSessionRequestEmail,
  subject: (data: Record<string, any>) => `Free intro session request from ${data.parentName || 'a parent'}`,
  to: 'mathwithclaritytutors@gmail.com',
  displayName: 'Free session request',
  previewData: { parentName: 'Sarah M.', email: 'sarah@example.com', childName: 'Emma', grade: '5th', interests: 'Soccer, drawing', struggles: 'Word problems', time: 'Thursdays 7pm' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '20px 25px', maxWidth: '580px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#212121', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 12px' }
const label = { fontSize: '13px', fontWeight: '600' as const, color: '#212121', margin: '0 0 4px' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }
