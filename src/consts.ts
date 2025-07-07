import type { IconMap, SocialLink, Site } from "@/types";

export const SITE: Site = {
  title: "alfieqashwa",
  description:
    "astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.",
  href: "https://alfieqashwa.github.io",
  author: "alfieqashwa",
  locale: "en-US",
  featuredPostCount: 2,
  postsPerPage: 3,
};

export const NAV_LINKS: SocialLink[] = [
  {
    href: "/projects",
    label: "projects",
  },
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: "/tags",
    label: "tags",
  },
  {
    href: "/authors",
    label: "authors",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/alfieqashwa",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/alfieqashwa",
    label: "Twitter",
  },
  {
    href: "mailto:alfieqashwa@gmail.com",
    label: "Email",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

export const ICON_MAP: IconMap = {
  Website: "lucide:globe",
  GitHub: "lucide:github",
  LinkedIn: "lucide:linkedin",
  Twitter: "lucide:twitter",
  Email: "lucide:mail",
  RSS: "lucide:rss",
};
