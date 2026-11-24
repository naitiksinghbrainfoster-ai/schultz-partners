                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "use client";

import { useEffect, useRef, useState } from "react";

type MenuLink = {
  label: string;
  href: string;
  children?: MenuLink[];
};

type MenuGroup = {
  id: string;
  label: string;
  href: string;
  overviewLabel?: string;
  links: MenuLink[];
};

const menuGroups: MenuGroup[] = [
  {
    id: "unternehmensberatung",
    label: "Unternehmensberatung",
    href: "/unternehmensberatung",
    links: [
      {
        label: "Strategieberatung & operative Umsetzung",
        href: "/unternehmensberatung/strategieberatung-operative-umsetzung",
      },
      {
        label: "Post Merger Integration",
        href: "/unternehmensberatung/post-merger-integration",
        children: [
          {
            label: "Post Merger Integration Phasenmodell nach Schultz & Partner",
            href: "/unternehmensberatung/post-merger-integration/post-merger-integration-phasenmodell-nach-schultz-partner",
          },
        ],
      },
      {
        label: "Restrukturierungsberatung",
        href: "/unternehmensberatung/restrukturierungsberatung/",
      },
    ],
  },
  {
    id: "personalberatung",
    label: "Personalberatung",
    href: "/personalberatung",
    links: [
      {
        label: "Headhunter",
        href: "/personalberatung/headhunter",
        children: [
          {
            label: "Headhunter Bremen",
            href: "/personalberatung/headhunter/headhunter-bremen",
          },
          {
            label: "Headhunter Hamburg",
            href: "/personalberatung/headhunter/headhunter-hamburg",
          },
        ],
      },
      {
        label: "Executive Search",
        href: "/personalberatung/executive-search",
      },
      {
        label: "HR-Management",
        href: "/personalberatung/hr-management",
      },
      {
        label: "Karriereberatung / Coaching",
        href: "/personalberatung/karriereberatung",
        children: [
          {
            label: "Belohnungsmatrix in der Karriereberatung nach Schultz & Partner",
            href: "/personalberatung/karriereberatung/belohnungsmatrix-in-der-karriereberatung-nach-schultz-partner",
          },
        ],
      },
    ],
  },
  {
    id: "ueber-uns",
    label: "Über uns",
    href: "/#ueber-uns",
    overviewLabel: "Über Schultz & Partner",
    links: [
      {
        label: "Blog",
        href: "/ueber-uns/blog",
      },
      {
        label: "Philosophie",
        href: "/philosophie",
      },
      {
        label: "Senior Partner",
        href: "/senior-partner",
      },
      {
        label: "Stellenanzeigen",
        href: "/ueber-uns/stellenanzeigen",
      },
    ],
  },
];

function MenuLinks({
  links,
  onNavigate,
}: {
  links: MenuLink[];
  onNavigate: () => void;
}) {
  return (
    <div className="space-y-1">
      {links.map((link) => (
        <div key={link.label}>
          <a
            className="flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-slate transition-colors hover:bg-brand-offwhite hover:text-brand-navy"
            href={link.href}
            onClick={onNavigate}
          >
            <span>{link.label}</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined mt-0.5 shrink-0 text-base text-brand-gold"
            >
              arrow_forward
            </span>
          </a>
          {link.children && (
            <div className="ml-3 border-l border-brand-border pl-2">
              <MenuLinks
                links={link.children}
                onNavigate={onNavigate}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HeaderNavigation() {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const pointerOpenedMenuRef = useRef<string | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      ) {
        setOpenDesktopMenu(null);
        pointerOpenedMenuRef.current = null;
        setMobileMenuOpen(false);
        setOpenMobileMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigationRef.current
          ?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
          ?.focus();
        setOpenDesktopMenu(null);
        pointerOpenedMenuRef.current = null;
        setMobileMenuOpen(false);
        setOpenMobileMenu(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setOpenDesktopMenu(null);
    setMobileMenuOpen(false);
    setOpenMobileMenu(null);
  };

  const renderMobileMenuGroup = (menu: MenuGroup) => (
    <div className="border-b border-brand-border/70 last:border-0" key={menu.id}>
      <button
        aria-controls={
          openMobileMenu === menu.id ? `mobile-menu-${menu.id}` : undefined
        }
        aria-expanded={openMobileMenu === menu.id}
        className="flex w-full items-center justify-between gap-4 py-3 text-left text-sm font-bold text-brand-navy"
        onClick={() =>
          setOpenMobileMenu((current) =>
            current === menu.id ? null : menu.id,
          )
        }
        type="button"
      >
        {menu.label}
        <span
          aria-hidden="true"
          className={`material-symbols-outlined text-lg text-brand-gold transition-transform ${
            openMobileMenu === menu.id ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {openMobileMenu === menu.id && (
        <div className="pb-3" id={`mobile-menu-${menu.id}`}>
          <a
            className="mb-1 block rounded-lg bg-brand-offwhite px-3 py-2.5 text-sm font-semibold text-brand-navy"
            href={menu.href}
            onClick={closeMenus}
          >
            Alle Bereiche: {menu.label}
          </a>
          <MenuLinks links={menu.links} onNavigate={closeMenus} />
        </div>
      )}
    </div>
  );

  const renderDesktopMenuGroup = (menu: MenuGroup) => (
    <div
      className="relative"
      key={menu.id}
      onBlur={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setOpenDesktopMenu(null);
        }
      }}
      onMouseEnter={() => {
        pointerOpenedMenuRef.current = menu.id;
        setOpenDesktopMenu(menu.id);
      }}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) {
          pointerOpenedMenuRef.current = null;
          setOpenDesktopMenu(null);
        }
      }}
    >
      <button
        aria-controls={
          openDesktopMenu === menu.id ? `desktop-menu-${menu.id}` : undefined
        }
        aria-expanded={openDesktopMenu === menu.id}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-semibold tracking-wide transition-colors 2xl:text-sm ${
          openDesktopMenu === menu.id
            ? "text-brand-navy"
            : "text-brand-slate hover:text-brand-navy"
        }`}
        onClick={() => {
          if (pointerOpenedMenuRef.current === menu.id) {
            pointerOpenedMenuRef.current = null;
            setOpenDesktopMenu(menu.id);
            return;
          }
          setOpenDesktopMenu((current) =>
            current === menu.id ? null : menu.id,
          );
        }}
        type="button"
      >
        {menu.label}
        <span
          aria-hidden="true"
          className={`material-symbols-outlined text-base transition-transform ${
            openDesktopMenu === menu.id ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      {openDesktopMenu === menu.id && (
        <div
          className={`absolute left-0 top-full z-[60] pt-3 ${
            menu.id === "ueber-uns"
              ? "w-[min(20rem,calc(100vw-2rem))]"
              : "w-[min(24rem,calc(100vw-2rem))]"
          }`}
          id={`desktop-menu-${menu.id}`}
        >
          <div className="overflow-hidden rounded-xl border border-brand-border bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
            <a
              className="flex items-center justify-between gap-3 rounded-lg bg-brand-offwhite px-3 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-border/50"
              href={menu.href}
              onClick={closeMenus}
            >
              {menu.overviewLabel ?? `Alle Bereiche: ${menu.label}`}
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-base text-brand-gold"
              >
                arrow_forward
              </span>
            </a>
            <div className="mt-2">
              <MenuLinks
                links={menu.links}
                onNavigate={closeMenus}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className="flex shrink-0 items-center gap-2 sm:gap-3 xl:gap-4"
      ref={navigationRef}
    >
      <nav
        aria-label="Hauptnavigation"
        className="hidden items-center gap-3 xl:flex 2xl:gap-5"
      >
        {menuGroups.slice(0, 2).map(renderDesktopMenuGroup)}
        <a
          className="whitespace-nowrap px-2 py-2 text-xs font-semibold tracking-wide text-brand-slate transition-colors hover:text-brand-navy 2xl:text-sm"
          href="/referenzen"
        >
          Referenzen
        </a>
        {menuGroups.slice(2).map(renderDesktopMenuGroup)}
      </nav>

      <div className="hidden items-center rounded-lg border border-brand-border bg-brand-offwhite p-1 text-xs font-semibold sm:flex">
        <span className="rounded bg-white px-2.5 py-1 text-brand-navy shadow-sm">
          DE
        </span>
        <span className="cursor-pointer px-2.5 py-1 text-brand-muted hover:text-brand-navy">
          EN
        </span>
      </div>
      <a
        className="relative hidden items-center justify-center gap-2 rounded-xl bg-brand-navy px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-slate hover:shadow-lg group sm:inline-flex sm:px-5 sm:py-2.5 sm:text-xs xl:px-7 xl:py-3 xl:text-sm"
        href="/kontakt"
      >
        <span>Kontakt</span>
        <span
          aria-hidden="true"
          className="material-symbols-outlined hidden text-sm transition-transform duration-300 group-hover:translate-x-1 sm:inline"
        >
          arrow_forward
        </span>
      </a>
      <button
        aria-controls="mobileDrawer"
        aria-expanded={mobileMenuOpen}
        aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        className="rounded-xl border border-brand-border bg-brand-offwhite p-2 text-brand-navy transition-colors hover:bg-white xl:hidden"
        onClick={() => {
          setMobileMenuOpen((isOpen) => !isOpen);
          setOpenMobileMenu(null);
        }}
        type="button"
      >
        <span aria-hidden="true" className="material-symbols-outlined text-2xl">
          {mobileMenuOpen ? "close" : "menu"}
        </span>
      </button>

      <div
        className={`absolute left-0 right-0 top-full z-[60] mx-auto mt-2 max-w-[84rem] px-2 sm:px-4 md:px-6 xl:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        id="mobileDrawer"
      >
        <nav
          aria-label="Mobiles Hauptmenü"
          className="max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-brand-border bg-white p-3 shadow-2xl backdrop-blur-2xl sm:p-5"
        >
          {menuGroups.slice(0, 2).map(renderMobileMenuGroup)}
          <a
            className="block border-b border-brand-border/70 py-3 text-sm font-bold text-brand-navy"
            href="/referenzen"
            onClick={closeMenus}
          >
            Referenzen
          </a>
          {menuGroups.slice(2).map(renderMobileMenuGroup)}
          <a
            className="block border-b border-brand-border/70 py-3 text-sm font-bold text-brand-navy"
            href="/kontakt"
            onClick={closeMenus}
          >
            Kontakt
          </a>
          <div className="flex items-center justify-between gap-4 pt-3 text-xs font-medium text-brand-muted">
            <span>Hamburg · Bremen</span>
            <a className="font-bold text-brand-navy" href="tel:04085372226">
              040 - 85 37 22 26
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
