export const Image = (props: { url: string }) => {
  const { url } = props;
  return (
    <div>
      <img src={url} alt="画像" />
    </div>
  );
};
