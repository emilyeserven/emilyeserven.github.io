import {
  NavigationMenu as ShadNavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/shad/ui/navigation-menu.tsx";
import {cn} from "@/lib/utils.ts";

interface NavigationMenuProps {
  menuItems: string[] | string;
  size?: "default" | "sm";
  theme?: "default" | "on-black"
  menuClasses?: string;
  itemClasses?: string;
}
export function NavigationMenu({ menuItems, size = "default", theme = "default", menuClasses, itemClasses }: NavigationMenuProps) {
  if (!menuItems) return;

  const menuItemsArr = typeof menuItems === "string" ? menuItems.split(',') : menuItems
  return (
    <ShadNavigationMenu className={`text-md font-medium flex justify-end list-none gap-4 ${cn({
      "text-sm": size === "sm",
    })} ${menuClasses}`}>
      <NavigationMenuList>
        {menuItemsArr.map((item, i) => (
          <NavigationMenuItem key={i} className={`bg-transparent px-4 py-2 hover:bg-black hover:text-white hover:cursor-pointer ${cn({
            "hover:bg-primary text-white hover:text-black transition": theme === "on-black"
          })} ${itemClasses}`}>{item}</NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </ShadNavigationMenu>
  );
}
