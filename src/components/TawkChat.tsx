import { useTawkChat } from '../hooks/useTawkChat';

// Replace these with actual IDs if provided, or placeholders
const TAWK_PROPERTY_ID = '67e2e307300c71190479159d'; // Placeholder
const TAWK_WIDGET_ID = '1il7v7v7v'; // Placeholder

export default function TawkChat() {
  useTawkChat(TAWK_PROPERTY_ID, TAWK_WIDGET_ID);
  return null;
}
