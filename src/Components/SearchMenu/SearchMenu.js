import React, {useState} from 'react'
import './searchmenu.css'
import {TextSearchIcon, ImageSearchIcon, NewsSearchIcon, VideoSearchIcon, ShoppingSearchIcon} from "./SearchMenuIcons";
import SearchMenuItem from "./SearchMenuItem";

const SearchMenu = () => {
    const [selected, setSelected] = useState(0)
    return (
        <div className={'search-menu'}>
            <SearchMenuItem
                name={"All"}
                icon={<TextSearchIcon selected={selected===0} />}
                selected={selected===0}
                onClick={() => setSelected(0)}
            />
            <SearchMenuItem
                name={"Images"}
                icon={<ImageSearchIcon selected={selected===1} />}
                selected={selected===1}
                onClick={() => setSelected(1)}
            />
            <SearchMenuItem
                name={"Video"}
                icon={<VideoSearchIcon selected={selected===2} />}
                selected={selected===2}
                onClick={() => setSelected(2)}
            />
            <SearchMenuItem
                name={"News"}
                icon={<NewsSearchIcon selected={selected===3} />}
                selected={selected===3}
                onClick={() => setSelected(3)}
            />
            <SearchMenuItem
                name={"Shopping"}
                icon={<ShoppingSearchIcon selected={selected===4} />}
                selected={selected===4}
                onClick={() => setSelected(4)}
            />
        </div>
    )
}

export default SearchMenu
