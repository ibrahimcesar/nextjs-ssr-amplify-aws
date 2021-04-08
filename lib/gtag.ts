export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

interface gtagEvent {
  action?: string
  category?: string
  label?: string
  value?: string
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (window) {
    window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (events: gtagEvent) => {
  window.gtag('event', events.action, {
    event_category: events.category,
    event_label: events.label,
    value: events.value,
  })
}