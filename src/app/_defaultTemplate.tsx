import Navbar from "@/components/layout/navbar";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function DefaultTemplate({ children }: IProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
