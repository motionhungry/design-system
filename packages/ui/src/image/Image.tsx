export type ImageProps = {
  alt: string;
  width?: number;
  height?: number;
  src: string;
};

export const Image = ({ alt, src, width, height }: ImageProps): JSX.Element => {
  const style = {
    width,
    height,
  };
  return <img src={src} alt={alt} style={style} />;
};
