export function Header() {
    return (
        <div className="bg-white/70 backdrop-blur-sm border-b-2">
            <div className="container py-2 flex justify-between items-center">
                <div>
                    <p className="text-2xl font-bold">Emily Serven</p>
                    <p className="text-md font-bold">Software Engineer</p>
                </div>
                <ul className="text-lg font-medium flex justify-end list-none gap-8">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}