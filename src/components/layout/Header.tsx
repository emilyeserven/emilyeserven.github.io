export function Header() {
    const menuItems = ["About", "Projects", "Blog", "Contact"];

    return (
        <div className="bg-white/70 backdrop-blur-sm border-b-2">
            <div className="container py-2 flex justify-between items-center">
                <div>
                    <p className="text-2xl font-bold">Emily Serven</p>
                    <p className="text-md font-bold">Software Engineer</p>
                </div>
                <ul className="text-md font-medium flex justify-end list-none gap-4">
                    {menuItems.map((item) => (
                        <li className="bg-transparent px-4 py-2 hover:bg-black hover:text-white hover:cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}