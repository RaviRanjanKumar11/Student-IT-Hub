import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

export const useTawkChat = (propertyId: string, widgetId: string) => {
  useEffect(() => {
    if (!propertyId || !widgetId) return;

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);

    return () => {
      // Cleanup if necessary, though Tawk usually handles itself
    };
  }, [propertyId, widgetId]);
};
