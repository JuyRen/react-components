export interface EllipsisProps {
  value: string;
}

export default function Ellipsis({ value }: EllipsisProps) {
  return <div>Ellipsis - {value}</div>;
}
