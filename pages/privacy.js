import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function PrivacyPage() {
  return (
    <PolicyLayout 
      title="Privacy Policy"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Privacy Policy - Career Social"
        description="How we collect, use, and protect your personal information."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when you create an account, 
          update your profile, or communicate with us. This may include your name, email address, 
          professional information, and any other information you choose to provide.
        </p>
        
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to 
          communicate with you, and to develop new features. We may also use this information to 
          personalize your experience and to show you relevant content and advertising.
        </p>
        
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell your personal information to third parties. We may share your information 
          with service providers who assist us in operating our services, or when required by law.
        </p>
        
        <h2>4. Your Choices</h2>
        <p>
          You may update your account information and preferences at any time by accessing your account settings. 
          You can also opt out of receiving promotional communications from us.
        </p>
      </div>
    </PolicyLayout>
  );
}
