'use client';

import { Box } from '@veer-ui/system';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { containerClass, menuContainerClass } from './AppBlock.styles.css';
import { Menu } from './components/Menu';
import { Screen } from './components/Screen';
import type { AppBlockProps } from './types';

const AppBlock = ({ screens }: AppBlockProps): JSX.Element => {
  const refs = screens.map(() => useRef<HTMLDivElement>(null));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuButtonClick = (index: number): void => {
    refs[index]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  const onScroll: () => void = _.throttle((): void => {
    const positions = refs.map((ref) =>
      ref.current ? ref.current?.getBoundingClientRect().top : 0,
    );
    positions.reverse().every((position, index) => {
      if (position < 100) {
        setActiveIndex(positions.length - 1 - index);
        return false;
      }
      return true;
    });
  }, 1000);
  /* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={containerClass}>
      {screens.map((screen, index) => (
        <>
          <Box ref={refs[index]} />
          <Screen key={index} screen={screen} />
        </>
      ))}
      <Box className={menuContainerClass}>
        <Menu
          activeIndex={activeIndex}
          onMenuButtonClick={handleMenuButtonClick}
          screens={screens}
        />
      </Box>
    </div>
  );
};

AppBlock.displayName = 'AppBlock';

export { AppBlock };
