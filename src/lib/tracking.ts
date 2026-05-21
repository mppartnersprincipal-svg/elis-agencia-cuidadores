declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export type WhatsAppClickLocation =
  | 'navbar_desktop'
  | 'navbar_mobile'
  | 'hero'
  | 'cta_final'
  | 'contact_section_card'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'footer_link'
  | 'footer_floating'

export function trackWhatsAppClick(
  location: WhatsAppClickLocation,
  extra?: Record<string, unknown>,
) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'whatsapp_click',
    whatsapp_location: location,
    ...extra,
  })
}
