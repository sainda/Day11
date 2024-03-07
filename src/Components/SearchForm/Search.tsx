import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'

export default function SearchForm(){
    return(
        <div className="searchBox">
            <FontAwesomeIcon icon={faMagnifyingGlass} color='rgb(139,139,139)' width={'5rem'}/>
            <input type="text" className="searchIcon"  placeholder="Search for a country..."/>
        </div>
    )
}