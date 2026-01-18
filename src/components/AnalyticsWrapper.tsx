"use client";

import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const AnalyticsWrapper = () => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [cookies] = useCookies(['analytics-consent']);

  useEffect(() => {
    // Check if consent was previously given via secure cookie
    if (cookies['analytics-consent'] === 'true') {
      setShouldRender(true);
      return;
    }

    // Listen for consent event
    const handleConsent = () => {
      setShouldRender(true);
    };

    window.addEventListener('analytics-consent-given', handleConsent as EventListener);
    return () => {
      window.removeEventListener('analytics-consent-given', handleConsent as EventListener);
    };
  }, [cookies]);

  if (!shouldRender) {
    return null;
  }

  // Dynamically import Analytics only when consent is given
  const AnalyticsComponent = React.lazy(() => 
    import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics }))
  );

  return (
    <React.Suspense fallback={null}>
      <AnalyticsComponent />
    </React.Suspense>
  );
};

export default AnalyticsWrapper;