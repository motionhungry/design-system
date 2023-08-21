import './styles.css';

import { LinkButton } from '@motionhungry/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Hungry',
  description: 'Custom software development and product design.',
  keywords: ['Motion Hungry', 'application development', 'web development'],
};

export default function Page() {
  return (
    <div id="container">
      <div className="content">
        <h1>Motion Hungry</h1>
        <p className="description">
          Custom software development and product design.
        </p>
        <LinkButton
          elevation="mid"
          href="mailto:kyle@motionhungry.com"
          label="Contact Us"
          size="large"
        />
      </div>
    </div>
  );
}
