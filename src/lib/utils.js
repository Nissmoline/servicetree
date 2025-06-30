import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function handleScroll(e, href, setIsMenuOpen) {
  e.preventDefault();
  const targetId = href.substring(href.indexOf('#') + 1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    if (setIsMenuOpen) setIsMenuOpen(false);
  } else {
    window.location.href = href;
  }
}
