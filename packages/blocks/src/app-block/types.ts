export type Screen = {
  children?: React.ReactNode;
  icon: React.ReactNode;
  imageSrc?: string;
  videoSrc?: string;
};

export type AppBlockProps = {
  screens: Screen[];
};
