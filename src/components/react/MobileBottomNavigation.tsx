import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function MobileBottomNavigation() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const isActive = (href: string) => {
    if (currentPath === href) return true;
    if (href === "/projects" && currentPath.startsWith("/projects"))
      return true;
    if (href === "/blog" && currentPath.startsWith("/blog")) return true;
    if (href === "/tags" && currentPath.startsWith("/tags")) return true;
    if (href === "/authors" && currentPath.startsWith("/authors")) return true;
    if (href === "/" && currentPath === "/") return true;
    return false;
  };

  const getLinkClassName = (href: string) => {
    return cn(
      "flex flex-col items-center gap-1 p-2 text-xs hover:text-foreground transition-colors no-underline",
      isActive(href) ? "text-primary" : "text-muted-foreground"
    );
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-t border-border sm:hidden">
      <div className="flex items-center justify-around px-4">
        <a href="/" className={getLinkClassName("/")} data-page="home">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span>Home</span>
        </a>

        <a
          href="/projects"
          className={getLinkClassName("/projects")}
          data-page="projects"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
          <span>Projects</span>
        </a>

        <a href="/blog" className={getLinkClassName("/blog")} data-page="blog">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
          <span>Blog</span>
        </a>

        <a href="/tags" className={getLinkClassName("/tags")} data-page="tags">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          <span>Tags</span>
        </a>

        <a
          href="/authors"
          className={getLinkClassName("/authors")}
          data-page="authors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 12v6m11-7h-6m-12 0H1m12.657-7.657L18.364 5.636m0 12.728l-2.828-2.828M5.636 5.636l2.828 2.828m0 9.9L5.636 18.364"></path>
          </svg>
          <span>Authors</span>
        </a>
      </div>
    </nav>
  );
}

// {
/* <script>
  // Highlight current page in mobile navigation
  document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("[data-page]");

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        currentPath === href ||
        (href === "/projects" && currentPath.startsWith("/projects")) ||
        (href === "/blog" && currentPath.startsWith("/blog")) ||
        (href === "/tags/" && currentPath.startsWith("/tags")) ||
        (href === "/authors/" && currentPath.startsWith("/authors")) ||
        (href === "/" && currentPath === "/")
      ) {
        link.classList.remove("text-muted-foreground");
        link.classList.add("text-primary");
      }
    });
  });
</script> */
// }
