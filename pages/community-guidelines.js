import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function CommunityGuidelinesPage() {
  return (
    <PolicyLayout 
      title="Community Guidelines"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Community Guidelines - Career Social"
        description="Our community standards and guidelines for professional interactions."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Professional Conduct</h2>
        <p>
          Career Social is a professional networking platform. We expect all members to maintain 
          a respectful and professional demeanor in all interactions. Harassment, hate speech, 
          and inappropriate content will not be tolerated.
        </p>
        
        <h2>2. Content Policy</h2>
        <p>
          When posting content, please ensure it is relevant, respectful, and adds value to the 
          professional community. Do not share confidential information, spam, or misleading content.
        </p>
        
        <h2>3. Respect Privacy</h2>
        <p>
          Respect the privacy of others. Do not share personal information about others without 
          their explicit consent. This includes contact details, personal conversations, or any 
          sensitive information.
        </p>
        
        <h2>4. Intellectual Property</h2>
        <p>
          Only share content that you own or have the right to share. Do not post copyrighted 
          material without proper attribution and permission.
        </p>
        
        <h2>5. Reporting Violations</h2>
        <p>
          If you encounter any content or behavior that violates these guidelines, please report 
          it to our moderation team immediately. We review all reports and take appropriate action.
        </p>
        
        <h2>6. Consequences of Violations</h2>
        <p>
          Violations of these guidelines may result in content removal, account suspension, or 
          permanent banning from the platform, depending on the severity of the violation.
        </p>
      </div>
    </PolicyLayout>
  );
}