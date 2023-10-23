'use client';

// we could also just add this to the root layout directly
import { SessionProvider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
  };

export default function AuthProvider({ children }: Props){
    return (<SessionProvider>{children}</SessionProvider>);
}
