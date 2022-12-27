import {useState} from "react";
import AlbumData from "./AlbumData";
import {useHref, useNavigate} from "react-router-dom";
const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const searchUrl = `/search/${searchQuery}`;
        navigate(searchUrl)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center mt-4">
                            <form onSubmit={handleSubmit} className="form-inline">
                                <div className="form-group">
                                <input
                                    type="number"
                                    style={{width:'280px'}}
                                    className="form-control  mr-lg-2"
                                    placeholder={"Write number between 1 to 100"}
                                    value={searchQuery}
                                    pattern="\d*" min="1" max="100"
                                    onChange={event => setSearchQuery(event.target.value)}
                                />
                                    <button type="submit" className="btn btn-primary d-inline-block">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*<AlbumData albumId={searchQuery}></AlbumData>*/}
        </>
    )
}
export default Search;