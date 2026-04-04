import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Math with Clarity"

interface Props {
  name?: string
  rating?: number
  review?: string
}

const ReviewSubmissionEmail = ({ name, rating, review }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New {rating || 5}-star review from {name || 'a parent'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Review Submitted</Heading>
        <Text style={text}><strong>Name:</strong> {name || 'Anonymous'}</Text>
        <Text style={text}><strong>Rating:</strong> {'⭐'.repeat(rating || 5)} ({rating || 5}/5)</Text>
        <Hr style={hr} />
        <Text style={label}>Review:</Text>
        <Text style={text}>{review || 'No review text provided'}</Text>
        <Hr style={hr} />
        <Text style={footer}>This review was submitted via the {SITE_NAME} website.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ReviewSubmissionEmail,
  subject: (data: Record<string, any>) => `New ${data.rating || 5}-star review from ${data.name || 'a parent'}`,
  to: 'mathwithclaritytutors@gmail.com',
  displayName: 'Review submission',
  previewData: { name: 'Sarah M.', rating: 5, review: 'My daughter loves her sessions! Her math confidence has grown so much.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '20px 25px', maxWidth: '580px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#212121', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 12px' }
const label = { fontSize: '13px', fontWeight: '600' as const, color: '#212121', margin: '0 0 4px' }
const hr = { borderColor: '#e5e5e5', margin: '16px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }
