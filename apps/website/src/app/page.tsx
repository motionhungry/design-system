import './styles.css';

import { LinkButton } from '@motionhungry/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Hungry',
  description: 'Custom software development and product design.',
  keywords: ['Motion Hungry', 'application development', 'web development'],
};

async function getData() {
  const response = await fetch('http://127.0.0.1:1337/api/home-page', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 71282b620c3f005c2f92b7b435241a21cf6a8cf7ad6267c4ca26390278da54ea4fcf0393aafd26505bfaec6dd66f3306aad8849f28f5f34b3a8f427b2e8f0f2269ca5eefef946e2b0a079ecc2691a8a2cdbb5369a7406cd7001982f6b65e34613173bd788e2c597f482dcf05bdc91978b026e9422398b8af0fc6ba1b2f5fb3bd',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Page() {
  const response = await getData();
  const { description, contactButtonLabel, contactButtonHref } =
    response.data.attributes;

  return (
    <div id="container">
      <div className="content">
        <h1>Motion Hungry</h1>
        <p className="description">{description}</p>
        <LinkButton
          elevation="mid"
          href={contactButtonHref}
          label={contactButtonLabel}
          size="large"
        />
      </div>
    </div>
  );
}
