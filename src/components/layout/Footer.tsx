import {Button} from "@/components/ui/Button.tsx";
import {NavigationMenu} from "@/components/ui/NavigationMenu.tsx";
import {Logo} from "@/components/ui/Logo.tsx";

export function Footer() {
    return (
        <div className="bg-black py-6">
            <div className="container flex justify-between items-center">
                <Button isArrowShown={true} size="lg" variant={"on-black"}>
                    Contact Me
                </Button>
                <div className="flex flex-col justify-end gap-y-4">
                    <NavigationMenu
                        menuItems={["About", "Projects", "Blog", "Contact"]}
                        size="sm"
                        theme="on-black"
                        menuClasses="-right-2"
                    />
                    <div className="text-white text-lg flex gap-x-2 items-center">
                        <Logo mode="icon" theme="white" size="sm"/>
                        Site dev & design by Emily Serven
                    </div>
                </div>
            </div>
        </div>
    )
}