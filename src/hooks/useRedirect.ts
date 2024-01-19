import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type UseRedirectProps = (condition: boolean, redirectTo: string) => void;

export const useRedirect: UseRedirectProps = (condition, redirectTo) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (condition && isClient) {
      router.push(redirectTo);
    }
  }, [condition, redirectTo, router, isClient]);
};
