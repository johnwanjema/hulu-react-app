import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

function Thumbnail({ result }) {
    console.log(result)
    return (
        <div className="group cursor-pointer p-2 trasition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image alt="wqeqwe"
                layout='responsive'
                src={`https://image.tmdb.org/t/p/w185///` + result.poster_path}
                height={1}
                width={1}
            />
            <div className="p-2">
                <p className="truncate max-w-md ">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>
                <p className=" flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type}`}{""}
                    {result.release_date || `${result.first_air_date}`}{""}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail
0