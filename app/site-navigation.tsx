import Link from "next/link";

type NavigationKey = "gallery" | "logo-maker" | "logo-gallery" | "history";

type SiteNavigationProps = {
  active: NavigationKey;
  includeHistory?: boolean;
};

const navigationItems: Array<{ key: NavigationKey; href: string; label: string }> = [
  { key: "gallery", href: "/", label: "Gallery" },
  { key: "logo-maker", href: "/logo", label: "Logo Maker" },
  { key: "logo-gallery", href: "/logo/gallery", label: "Logo Gallery" },
  { key: "history", href: "/logo/history", label: "History" },
];

function NavigationLinks({ active, includeHistory }: SiteNavigationProps) {
  return navigationItems
    .filter((item) => includeHistory || item.key !== "history")
    .map((item) => (
      <Link
        key={item.key}
        href={item.href}
        className={active === item.key ? "active" : undefined}
        aria-current={active === item.key ? "page" : undefined}
      >
        {item.label}
      </Link>
    ));
}

export function SiteNavigation({ active, includeHistory = false }: SiteNavigationProps) {
  return (
    <>
      <nav className="site-nav" aria-label="Primary navigation">
        <NavigationLinks active={active} includeHistory={includeHistory} />
      </nav>
      <details className="mobile-site-menu">
        <summary aria-label="Open primary navigation menu">
          <span className="mobile-menu-icon" aria-hidden="true"><i /><i /><i /></span>
        </summary>
        <nav aria-label="Mobile primary navigation">
          <NavigationLinks active={active} includeHistory={includeHistory} />
        </nav>
      </details>
    </>
  );
}
