import {NavigationMenu} from "@/components/ui/NavigationMenu.tsx";
import {Logo} from "@/components/ui/Logo.tsx";

export function Header() {
    const menuItems = ["About", "Projects", "Blog", "Contact"];

    return (
        <div className="bg-white/70 backdrop-blur-sm border-b-2">
            <div className="container py-2 flex justify-between items-center">
                <div className="flex gap-x-2 items-center">
                    <Logo mode="icon" theme="black" />
                    <div>
                    <p className="text-2xl font-bold">Emily Serven</p>
                    <p className="text-md font-bold">Software Engineer</p>
                    </div>
                </div>
                <NavigationMenu menuItems={menuItems} />
            </div>
        </div>
    )
}