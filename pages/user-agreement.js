import { DefaultSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function UserAgreementPage() {
  return (
    <PolicyLayout 
      title="User Agreement"
      lastUpdated="October 2025"
    >
      <DefaultSeo
        title="User Agreement - Career Social"
        description="Terms and conditions for using Career Social."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Career Social, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our services.
        </p>
        
        <h2>2. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password and for 
          restricting access to your computer. You agree to accept responsibility for all activities 
          that occur under your account.
        </p>
        
        <h2>3. Content Ownership</h2>
        <p>
          You retain ownership of any intellectual property rights that you hold in the content you 
          submit or post on Career Social. By posting content, you grant us a worldwide, non-exclusive, 
          royalty-free license to use, reproduce, and display such content.
        </p>
        
        <h2>4. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice, for conduct that 
          we believe violates these Terms or is harmful to other users of the service.
        </p>
      </div>
    </PolicyLayout>
  );
}
