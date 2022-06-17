import type { FC } from "react";
type props = {
  url: string;
};

export const Image: FC<props> = (props) => {
  const { url } = props;
  return (
    <div>
      <img src={url} alt="画像" />
    </div>
  );
};
