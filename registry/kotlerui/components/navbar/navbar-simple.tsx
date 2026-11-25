import * as React from "react";
import { cn } from "cn";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/kotlerui/ui/navigation-menu";
import { Button } from "@/registry/kotlerui/ui/button";

export interface NavbarSimpleProps {
  logo: string;
  links: {
    id: string;
    label: string;
    href: string;
    icon?: string;
  }[];
  actions?: {
    id: string;
    label: string;
    href?: string;
    variant?: "default" | "outline" | "secondary" | "ghost";
  }[];
}

function NavbarSimple({ logo, links = [], actions = [] }: NavbarSimpleProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">{logo}</NavigationMenuLink>
        </NavigationMenuItem>

        {links.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink href={item.href}>
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="flex items-center gap-x-3">
        {actions.map((item) => (
          <Button key={item.id} asChild variant={item.variant ?? "default"}>
            <a href={item.href ?? "#"}>{item.label}</a>
          </Button>
        ))}
      </div>
    </NavigationMenu>
  );
}

function NavbarLogo() {
  return <img src="" alt="" className="w-20 h-20" />;
}

function NavbarActions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-x-">{children}</div>;
}

export { NavbarSimple, NavbarActions };
