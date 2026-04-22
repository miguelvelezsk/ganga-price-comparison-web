export default function NavBar() {
    return (
        <nav className="flex h-18 shrink-0 items-center px-2 md:px-6 border-b-2 border-[#F1F2F8] bg-tertiary">
            <div className="w-full px-2 md:px-7 flex items-center justify-between mx-auto">
                <a href="/home" className="flex items-center space-x-2 cursor-pointer">
                    <span className="text-xl font-bold font-header text-primary">Ganga</span>
                </a>
                <div className="flex items-center space-x-4">
                    <a href="/home" className="text-lg underline underline-offset-10 decoration-2 font-medium cursor-pointer font-body text-primary">Inicio</a>
                </div>
            </div>
        </nav>
    )
}