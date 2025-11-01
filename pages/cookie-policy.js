import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function CookiePolicyPage() {
  return (
    <PolicyLayout 
      title="Cookie Policy"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Cookie Policy - Career Social"
        description="Information about how we use cookies and similar technologies."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and to provide information to the site owners.
        </p>
        
        <h2>2. How We Use Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
          This helps us understand how our website is being used and improve user experience.
        </p>
        
        <h2>3. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
          <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites</li>
        </ul>
        
        <h2>4. Managing Cookies</h2>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
          However, if you do not accept cookies, you may not be able to use some portions of our service.
        </p>
      </div>
    </PolicyLayout>
  );
}
