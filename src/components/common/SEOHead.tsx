import React, { useEffect } from 'react';
import { FAQItem } from '../../types';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'WebApplication';
  faq?: FAQItem[];
  toolName?: string;
  category?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  faq,
  toolName,
  category,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Open Graph Tags
    const updateMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [propName, propVal] = selector.replace(/[\[\]']/g, '').split('=');
        el.setAttribute(propName, propVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${canonicalPath}` : '';

    updateMeta("meta[property='og:title']", 'content', title);
    updateMeta("meta[property='og:description']", 'content', description);
    updateMeta("meta[property='og:url']", 'content', fullUrl);
    updateMeta("meta[property='og:site_name']", 'content', 'IndiaToolbox');
    updateMeta("meta[name='twitter:title']", 'content', title);
    updateMeta("meta[name='twitter:description']", 'content', description);

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 5. Update Schema.org JSON-LD Script
    let ldScript = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'schema-jsonld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }

    const schemas: any[] = [];

    if (type === 'WebApplication' && toolName) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: toolName,
        applicationCategory: category || 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Works in any modern browser.',
        description: description,
        url: fullUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      });
    } else {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'IndiaToolbox',
        url: fullUrl,
        description: description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/tools?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      });
    }

    if (faq && faq.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      });
    }

    ldScript.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);

    return () => {
      // Cleanup can be retained or overwritten on next mount
    };
  }, [title, description, canonicalPath, type, faq, toolName, category]);

  return null;
};
