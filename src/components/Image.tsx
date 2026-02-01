import '../App.css';

type Image = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: Image) => {
  return <img src={src} className="image" alt={alt} />;
};

export default Image;
