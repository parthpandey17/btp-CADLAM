import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext(null);

function isExternalUrl(to) {
  return /^(?:[a-z]+:)?\/\//i.test(to) || to.startsWith("mailto:") || to.startsWith("tel:");
}

function normalizeToPath(to) {
  if (!to) {
    return "/";
  }

  if (typeof to === "string") {
    return to;
  }

  if (typeof to === "object") {
    const pathname = to.pathname ?? "/";
    const search = to.search ?? "";
    const hash = to.hash ?? "";
    return `${pathname}${search}${hash}`;
  }

  return "/";
}

export function RouterProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const value = useMemo(() => {
    const navigate = (to, options = {}) => {
      const nextPath = normalizeToPath(to);

      if (isExternalUrl(nextPath)) {
        window.location.assign(nextPath);
        return;
      }

      if (options.replace) {
        window.history.replaceState({}, "", nextPath);
      } else {
        window.history.pushState({}, "", nextPath);
      }

      setPathname(window.location.pathname || "/");
    };

    return {
      pathname,
      navigate,
      replace: (to) => navigate(to, { replace: true }),
      back: () => window.history.back(),
      forward: () => window.history.forward(),
    };
  }, [pathname]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouterContext() {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error("Router context is not available.");
  }

  return context;
}

export function usePathname() {
  return useRouterContext().pathname;
}

