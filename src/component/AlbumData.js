import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "./Pagination";

const AlbumData = (props) => {
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.albumId}`);

                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [props.albumId]);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    // console.log(currentRecords)
    const nPages = Math.ceil(data.length / recordsPerPage)
    let p = "";
    if (loading) {
        p = <p>Loading...</p>;
    }
    // console.log(data)
    if (error) {
        p = <p>Error: {error.message}</p>;
    }
    return (
        <>

            <div className="container">
                {p}
                <div className="row">
                    {currentRecords && currentRecords.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mx-auto" style={{width: '18rem'}} key={index}>
                                <img src={item.thumbnailUrl} className="card-img-top" alt="Card image cap"></img>
                                <div className="card-body">
                                    <p className="card-text">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <Pagination
                            nPages={nPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
export default AlbumData;