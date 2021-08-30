import HeaderItem from './HeaderItem'
import { BadgeCheckIcon,HomeIcon,CollectionIcon, LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'

function header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={ HomeIcon} />
                <HeaderItem title='TRENDING' Icon={ LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={ BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={ CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={ SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={ UserIcon} />
            </div>
            <p>image</p>
        </header>
    )
}

export default header
