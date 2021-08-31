import { Router } from "next/dist/client/router"
import { useRouter } from "next/router"
import requests from "../utilis/requests";

function Nav() {
    const router = useRouter(); 
    console.log(requests);
    return (
        <nav>
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap  space-x-10 sm:space-x-20 overflow-x-scroll  scrollbar-hide">
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white  active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
                <h2 onClick={() => router.push(`/?genre=${'trending'}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Trending</h2>
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A]" />
        </nav>
    )
}

export default Nav
