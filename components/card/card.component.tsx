import "./card.styles.scss";

export type TCardProps = {
  variant?: string;
  children: JSX.Element;
};

export default function Card({ variant = "variant-1", children }: TCardProps) {
  // const backgroundUrl = `/cards/${variant}.svg`;

  // const cardStyle = {
  //   background: `no-repeat center/100% url("${backgroundUrl}")`,
  // };

  return <div className="card">{children}</div>;
}
