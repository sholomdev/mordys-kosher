/**
 * Pushes a custom event to the GTM dataLayer.
 * Safe to call on the server or before GTM has loaded — it no-ops silently.
 *
 * @param {string} eventName - matches the Custom Event trigger name in GTM
 * @param {Record<string, string|number|boolean>} params - event parameters,
 *   forwarded to GA4 as event params. Never pass PII (names, emails, phone
 *   numbers) here.
 */
export function pushEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  window.dataLayer.push({ event: eventName, ...params });
}
