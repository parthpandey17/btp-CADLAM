import { usePathname as useCompatPathname, useRouterContext } from "./router";

export function usePathname() {
  return useCompatPathname();
}

export function useRouter() {
  const router = useRouterContext();

  return {
    push: (to) => router.navigate(to),
    replace: (to) => router.replace(to),
    back: () => router.back(),
    forward: () => router.forward(),
  };
}
