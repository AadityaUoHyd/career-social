import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function BrandPolicyPage() {
  return (
    <PolicyLayout 
      title="Brand Policy"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Brand Policy - Career Social"
        description="Guidelines for using Career Social's brand assets."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>
          This Brand Policy outlines how you can use Career Social&apos;s trademarks, logos, and other brand features. 
          By using our brand assets, you agree to follow these guidelines and all applicable laws.
        </p>
        
        <h2>2. Permitted Uses</h2>
        <p>
          You may use our brand assets to:
        </p>
        <ul>
          <li>Refer to Career Social in a factual manner</li>
          <li>Indicate compatibility with Career Social services</li>
          <li>Link to our website or services</li>
        </ul>
        
        <h2>3. Prohibited Uses</h2>
        <p>You may not:</p>
        <ul>
          <li>Use our brand in a way that suggests endorsement, sponsorship, or affiliation</li>
          <li>Modify our logos or other brand elements</li>
          <li>Use our brand in a way that is misleading, illegal, or harmful</li>
          <li>Use our brand in a way that is inconsistent with our values</li>
        </ul>
        
        <h2>4. Brand Assets</h2>
        <p>
          For access to our brand assets, including logos and brand guidelines, please contact our 
          marketing team at brand@careersocial.com.
        </p>
      </div>
    </PolicyLayout>
  );
}
