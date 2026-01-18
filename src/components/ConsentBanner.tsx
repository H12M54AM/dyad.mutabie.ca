"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useCookies } from 'react-cookie';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(['analytics-consent']);

  useEffect(() => {
    // Check if user has already made a consent decision
    if (cookies['analytics-consent'] === undefined) {
      setIsVisible(true);
    }
  }, [cookies]);

  const handleAccept = () => {
    setCookie('analytics-consent', 'true', {
      path: '/',
      maxAge: 31536000, // 1 year
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production'
    });
    setIsVisible(false);
    // Dispatch event to notify app that consent was given
    window.dispatchEvent(new CustomEvent('analytics-consent-given'));
  };

  const handleReject = () => {
    setCookie('analytics-consent', 'false', {
      path: '/',
      maxAge: 31536000, // 1 year
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production'
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg-primary border-t border-border p-4 shadow-lg z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-text-primary">
          <p className="font-medium">We value your privacy</p>
          <p className="text-sm text-text-secondary mt-1">
            We use analytics cookies to understand how you use our site and improve your experience. You can opt-out at any time.
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handleReject} variant="outline" className="px-4 py-2">
            Reject
          </Button>
          <Button onClick={handleAccept} className="px-4 py-2 text-white">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;