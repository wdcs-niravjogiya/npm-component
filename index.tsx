export interface HelloProps {
  name: string;
}

export function hello({ name }: HelloProps) {
  return <div>Hello {name}.....!!!!!</div>;
}
