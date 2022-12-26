import {Link, Outlet} from "react-router-dom";
import App from "../App";

const Layout = () => {
    return (
        <>

            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'text-center'} style={{marginTop: '20px'}}>
                            <Link to="/" style={{margin: '0 10px'}}>
                                <button type="button" className="btn btn-secondary">All</button>
                            </Link>
                            <Link to="/album/1" style={{margin: '0 10px'}}>
                                <button type="button" className="btn btn-primary">Album 1</button>
                            </Link>
                            <Link to="/album/2" style={{margin: '0 10px'}}>
                                <button type="button" className="btn btn-success">Album 2</button>
                            </Link>
                            <Link to="/album/3" style={{margin: '0 10px'}}>
                                <button type="button" className="btn btn-danger">Album 3</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="detail">
                <Outlet/>
            </div>

        </>
    )
}

export default Layout