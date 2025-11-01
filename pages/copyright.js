import { NextSeo } from 'next-seo';
import PolicyLayout from '../components/PolicyLayout';

export default function CopyrightPage() {
  return (
    <PolicyLayout 
      title="Copyright Policy"
      lastUpdated="October 2025"
    >
      <NextSeo
        title="Copyright Policy - Career Social"
        description="Information about copyright and intellectual property rights."
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Copyright Notice</h2>
        <p>
          All content included on this site, such as text, graphics, logos, button icons, images, 
          audio clips, digital downloads, data compilations, and software, is the property of Career Social 
          or its content suppliers and protected by international copyright laws.
        </p>
        
        <h2>2. Copyright Complaints</h2>
        <p>
          If you believe that your work has been copied in a way that constitutes copyright infringement, 
          please provide our copyright agent with the following information:
        </p>
        <ul>
          <li>A description of the copyrighted work that you claim has been infringed</li>
          <li>The location of the material that you claim is infringing</li>
          <li>Your contact information</li>
          <li>A statement that you have a good faith belief that the disputed use is not authorized</li>
        </ul>
        
        <h2>3. Counter-Notice</h2>
        <p>
          If you believe that your content was removed (or to which access was disabled) is not infringing, 
          or that you have the authorization from the copyright owner to post and use the content, 
          you may send a counter-notice.
        </p>
      </div>
    </PolicyLayout>
  );
}
