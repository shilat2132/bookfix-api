import { Form, useNavigate } from "react-router-dom"
import searchStyles from '../styles/search.module.css'

/**the search bar component */
export const Search = ({collection})=>{
    const navigate = useNavigate()

    /**sends an api request for searching the given value */
    function handleSubmit(event){
        event.preventDefault()
        const search = document.getElementById("search").value
        navigate(`/${collection}?search=${search}`)
    }
    return (
        <Form onSubmit={handleSubmit} className={searchStyles.searchForm}>
            <div className={searchStyles.formGroup}>
                <input className={searchStyles.searchBar} id="search" type="search" name="search" placeholder="חיפוש"/>
            </div>
            <button className={searchStyles.searchBtn}>
                <svg style={{paddingLeft: "1px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </Form>
    )
   
}