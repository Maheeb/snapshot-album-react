import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./Pagination";
import { PaginationControl } from 'react-bootstrap-pagination-control';
// import { Pagination } from 'react-bootstrap';

const Main = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(null);
    // const [hasMore, setHasMore] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [recordsPerPage] = useState(10);
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(400);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
                // console.log(response.data.length);
                setData(response.data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
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
                        {/*<PaginationControl*/}
                        {/*    page={page}*/}
                        {/*    between={4}*/}
                        {/*    total={250}*/}
                        {/*    limit={20}*/}
                        {/*    changePage={(page) => {*/}
                        {/*        setPage(page);*/}
                        {/*        console.log(page)*/}
                        {/*    }}*/}
                        {/*    ellipsis={1}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main;