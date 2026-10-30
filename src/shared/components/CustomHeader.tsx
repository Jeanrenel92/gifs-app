interface Props {
  title?: string;
  description?: string;
}

export const CustomHeader = ({
  title = "Buscador de gifs",
  description = "Descubre y comparte maravillosos gifs",
}: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
