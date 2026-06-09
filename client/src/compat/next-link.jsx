import React from "react";
import { useRouterContext } from "./router";

function isModifiedEvent(event) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
}

export default function Link({ href, replace = false, onClick, children, ...rest }) {
  const router = useRouterContext();
  const to = typeof href === "string" ? href : href?.pathname || "/";

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (rest.target && rest.target !== "_self") return;
    if (isModifiedEvent(event) || event.button !== 0) return;
    if (/^(?:[a-z]+:)?\/\//i.test(to) || to.startsWith("mailto:") || to.startsWith("tel:")) return;

    event.preventDefault();
    if (replace) router.replace(to);
    else router.navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
