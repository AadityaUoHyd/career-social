import { NextSeo } from 'next-seo';
import Link from 'next/link';
import PolicyLayout from '../components/PolicyLayout';

export default function GuestControlsPage() {
  return (
    <PolicyLayout 
      title="Guest Controls"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Guest Controls - Career Social"
        description="Manage your privacy and data preferences."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>
          These guest controls allow you to manage your privacy and data preferences when using 
          Career Social as a guest user. You can adjust these settings at any time.
        </p>
        
        <h2>2. Data Collection</h2>
        <p>
          As a guest user, we may collect certain information about your visit, including:
        </p>
        <ul>
          <li>IP address and device information</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring website or search terms</li>
        </ul>
        
        <h2>3. Cookie Preferences</h2>
        <p>
          You can control how we use cookies and similar technologies through your browser settings. 
          Please refer to our <Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
            Cookie Policy
          </Link> for more information.
        </p>
        
        <h2>4. Data Retention</h2>
        <p>
          We retain guest data only for as long as necessary for the purposes set out in our 
          <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
            Privacy Policy
          </Link>.
        </p>
        
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about these guest controls, please contact us at 
          <Link href="mailto:privacy@careersocial.com" className="text-blue-600 dark:text-blue-400 hover:underline">
            privacy@careersocial.com
          </Link>.
        </p>
      </div>
    </PolicyLayout>
  );
}
