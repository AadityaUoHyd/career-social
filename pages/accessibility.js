import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function AccessibilityPage() {
  return (
    <PolicyLayout 
      title="Accessibility Statement"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Accessibility Statement - Career Social"
        description="Our commitment to accessibility at Career Social."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>Our Commitment</h2>
        <p>
          At Career Social, we&apos;re committed to ensuring digital accessibility for people with disabilities. 
          We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>
        
        <h2>Conformance Status</h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers 
          to improve accessibility for people with disabilities. We aim to meet WCAG 2.1 Level AA compliance.
        </p>
        
        <h2>Feedback</h2>
        <p>
          We welcome your feedback on the accessibility of Career Social. Please let us know if you encounter 
          accessibility barriers by contacting our support team.
        </p>
      </div>
    </PolicyLayout>
  );
}
