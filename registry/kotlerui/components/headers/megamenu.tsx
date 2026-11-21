import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  children?: NavigationItem[];
}

interface NavigationItemProps {
  data: NavigationItem;
}

function MegaMenu() {
  return <NavigationMenu></NavigationMenu>;
}

function NavigationItem({ data }: NavigationItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink>{data.label}</NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export { MegaMenu };
