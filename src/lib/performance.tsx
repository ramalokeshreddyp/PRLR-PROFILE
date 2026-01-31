import React from 'react';

/**
 * Performance Monitoring Utilities
 * Track and optimize portfolio performance
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Get Web Vitals
 * Measures Core Web Vitals for performance monitoring
 */
export const getWebVitals = (): Promise<PerformanceMetrics> => {
  return new Promise((resolve) => {
    const metrics: PerformanceMetrics = {};

    // First Contentful Paint
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find((entry) => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }

    // Time to First Byte
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    if (navEntries.length > 0) {
      metrics.ttfb = navEntries[0].responseStart - navEntries[0].requestStart;
    }

    // Use PerformanceObserver for LCP, FID, CLS if available
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as LargestContentfulPaint | undefined;
          if (lastEntry) {
            const lcp = lastEntry.renderTime || lastEntry.loadTime;
            if (typeof lcp === 'number') {
              metrics.lcp = lcp;
            }
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const firstEntry = entries[0] as PerformanceEventTiming | undefined;
          if (firstEntry && typeof firstEntry.processingStart === 'number') {
            metrics.fid = firstEntry.processingStart - firstEntry.startTime;
          }
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as LayoutShift[];
          for (const entry of entries) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          metrics.cls = clsValue;
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // Resolve after a delay to collect metrics
        setTimeout(() => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          resolve(metrics);
        }, 3000);
      } catch (error) {
        console.warn('Performance Observer not fully supported', error);
        resolve(metrics);
      }
    } else {
      resolve(metrics);
    }
  });
};

/**
 * Log Performance Metrics
 * Logs performance data to console in development
 */
export const logPerformanceMetrics = async () => {
  if (process.env.NODE_ENV === 'development') {
    const metrics = await getWebVitals();
    console.table({
      'First Contentful Paint (FCP)': metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A',
      'Largest Contentful Paint (LCP)': metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A',
      'First Input Delay (FID)': metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A',
      'Cumulative Layout Shift (CLS)': metrics.cls ? metrics.cls.toFixed(4) : 'N/A',
      'Time to First Byte (TTFB)': metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A',
    });
  }
};

/**
 * Prefetch Links
 * Prefetches important routes for faster navigation
 */
export const prefetchLinks = (urls: string[]) => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Lazy Load Component
 * Code splitting helper for better performance
 */
export const lazyLoadComponent = <T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  fallback: React.ReactNode = null
) => {
  const LazyComponent = React.lazy(importFunc);
  
  return (props: React.ComponentProps<T>) => (
    <React.Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

/**
 * Resource Hints
 * Adds resource hints for better performance
 */
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];

  hints.forEach((hint) => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if ('crossorigin' in hint) {
      link.crossOrigin = hint.crossorigin;
    }
    document.head.appendChild(link);
  });
};
