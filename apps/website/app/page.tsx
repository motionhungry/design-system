import { LinkButton } from '@motionhungry/ui';

export default function Page() {
  return (
    <div id="container">
      <div className="content">
        <h1>Motion Hungry</h1>
        <p className="description">
          Custom software development and product design.
        </p>
        <LinkButton href="mailto:kyle@motionhungry.com" label="Contact Us" />
      </div>
    </div>
  );
}
