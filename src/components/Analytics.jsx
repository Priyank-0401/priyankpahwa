import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 (GA4) implementation
    // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics Measurement ID
    const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
    
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Make gtag globally available
      window.gtag = gtag;
    }

    // Track page views (for single-page applications)
    const trackPageView = (url) => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    // Track custom events
    const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    };

    // Make tracking functions globally available
    window.trackPageView = trackPageView;
    window.trackEvent = trackEvent;

    // Clean up function
    return () => {
      if (GA_MEASUREMENT_ID) {
        // Remove the script when component unmounts
        const existingScript = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`);
        if (existingScript) {
          existingScript.remove();
        }
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
