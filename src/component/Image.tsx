import type { FC } from "react";
type Props = {
  url: string;
};

export const Image: FC<Props> = (props) => {
  const { url } = props;
  return (
    <div>
      <img src={url} alt="画像" />
    </div>
  );
};
