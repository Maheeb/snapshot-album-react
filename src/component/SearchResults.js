import {useParams} from "react-router-dom";
import AlbumData from "./AlbumData";

const SearchResults = (props) => {
    let {searchId} = useParams()
  return(
      <>
          <h1 className={'text-center'}>You have searched for Album --- {searchId}</h1>
          <AlbumData albumId={searchId}></AlbumData>
      </>
  )
}

export default SearchResults;