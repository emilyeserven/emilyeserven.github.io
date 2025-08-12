import {NavigationMenu} from "@/components/ui/NavigationMenu.tsx";

export function Header() {
    const menuItems = ["About", "Projects", "Blog", "Contact"];

    return (
        <div className="bg-white/70 backdrop-blur-sm border-b-2">
            <div className="container py-2 flex justify-between items-center">
                <div>
                    <p className="text-2xl font-bold">Emily Serven</p>
                    <p className="text-md font-bold">Software Engineer</p>
                </div>
                <NavigationMenu menuItems={menuItems} />
            </div>
        </div>
    )
}