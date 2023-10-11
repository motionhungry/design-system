export type Screen = {
  children?: React.ReactNode;
  icon: React.ReactNode;
  imageSrc?: string;
  videoSrc?: string;
};

export type AppProps = {
  screens: Screen[];
};
