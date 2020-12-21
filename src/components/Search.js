import React, { useState } from 'react'
import axios from 'axios';
import ShowImages from "../components/ShowImages";
const Search = () => {
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState([]);
    const [loader, setLoader] = useState(false);  
    const handleSearch = (e) => {
       setSearch(e.target.value)
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoader(true)
        const res = await axios.get(`https://api.pexels.com/v1/search?query=search&per_page=15&page=1`,{
            headers:{
                Authorization:"563492ad6f9170000100000167f47008f29040e592551941674c6c61"
            }
        });
        console.log(res)
        setLoader(false)
        setPhotos(res.data.photos)
        console.log(photos)
    }
    return (
        <div className="container mt-5" >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="search" className="form-control" placeholder="Search" value={search} onChange={handleSearch} />
                </div>
                <div className="form-group">
                    <input type="Submit" value="Search" className="btn btn-primary btn-block" />
                </div>
                </form>
                <div className="row">
                {!loader?
                photos.map(data=>(
                  <ShowImages image={data} key={data.id}/>
                ))
                :<h1>Loading...</h1>}
                </div>
              
        </div>

    )
}

export default Search
