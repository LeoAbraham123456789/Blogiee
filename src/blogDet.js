import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const history=useHistory();
    const { data, isLoading, error }=useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete=()=>{
        fetch("http://localhost:8000/blogs/" + data.id, {
            method: 'DELETE'
        }).then(()=>{
                history.push("/")
        })
    }
    return ( 
        <div>
            {isLoading && <div>Loading.....</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h1>{data.title}</h1>
                    <h2>{data.author}</h2>
                    <p>{data.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;