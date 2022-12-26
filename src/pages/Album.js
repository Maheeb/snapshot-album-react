import {useParams} from "react-router-dom";
import Main from "../component/Main";
import AlbumData from "../component/AlbumData";

const Album = (props) => {
    let {albumId} = useParams()

  return(
      <>

          <h1 className={'text-center'}>Album --- {albumId}</h1>


         <AlbumData albumId={albumId}></AlbumData>


      </>
  )
}
export default Album;