import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex shrink-0 items-center bg-tertiary pt-10 pb-40 mt-10 border-t-2 border-[#F1F2F8] px-14">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between mx-auto">
                <span className="text-lg font-bold font-header text-primary">Ganga</span>

                <div className="flex gap-4 mt-5 sm:ml-0 lg:mt-0 lg:ml-46">
                    <a href="https://github.com/miguelvelezsk" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-primary/80 hover:text-primary transition-colors cursor-pointer" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/miguelangel-v%C3%A9lez-aguirre-235982168/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-primary/80 hover:text-primary transition-colors cursor-pointer" size={30} />
                    </a>
                </div>

                <div className='text-center mt-5 lg:mt-0'>
                    <span className="text-md font-header text-primary/80 ">@ 2026 Ganga App. Minimalist Excellence</span>
                </div>

            </div>
        </footer>
    )
}