import Header from "./header";

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  const { children } = props;

  return <main>{children}</main>;
}
