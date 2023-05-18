import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
} from '@heroicons/react/solid';


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            {/* for image icon */}

            <div className="relative flex items-center h-10 my-auto">
                <Image
                    className="object-contain object-left cursor-pointer"
                    src="https://www.digital.ink/wp-content/uploads/airbnb_logo_detail.jpg"
                    alt="My-airnb-icon"
                    width={140}
                    height={140}

                />
            </div>

            {/* for searchbar */}

            <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">

                <input className="placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Start your seaarch" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

            </div>

            {/* for sidebar */}

            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

        </header>
    );
}

export default Header;