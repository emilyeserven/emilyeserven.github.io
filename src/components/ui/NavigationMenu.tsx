import {
  NavigationMenu as ShadNavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/shad/ui/navigation-menu.tsx";

interface NavigationMenuProps {
  menuItems: string[] | string;
  menuClasses?: string;
  itemClasses?: string;
}
export function NavigationMenu({ menuItems, menuClasses, itemClasses }: NavigationMenuProps) {
  if (!menuItems) return;

  const menuItemsArr = typeof menuItems === "string" ? menuItems.split(',') : menuItems
  return (
    <ShadNavigationMenu className={`text-md font-medium flex justify-end list-none gap-4 ${menuClasses}`}>
      <NavigationMenuList>
        {menuItemsArr.map((item, i) => (
          <NavigationMenuItem key={i} className={`bg-transparent px-4 py-2 hover:bg-black hover:text-white hover:cursor-pointer ${itemClasses}`}>{item}</NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </ShadNavigationMenu>
  );
}
