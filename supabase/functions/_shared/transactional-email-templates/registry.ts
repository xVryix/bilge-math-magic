/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as contactInquiry } from './contact-inquiry.tsx'
import { template as reviewSubmission } from './review-submission.tsx'
import { template as bookingRequest } from './booking-request.tsx'
import { template as freeSessionRequest } from './free-session-request.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-inquiry': contactInquiry,
  'review-submission': reviewSubmission,
  'booking-request': bookingRequest,
  'free-session-request': freeSessionRequest,
}
