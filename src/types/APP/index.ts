import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export type LayoutProps = {
  children: JSX.Element[] | JSX.Element | string | string[];
};

export type CustomNextPage<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type CustomAppProps = AppProps & {
  Component: CustomNextPage;
};
