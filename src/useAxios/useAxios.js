import axios from "axios";
import {
    useEffect,
    useState
} from 'react'

const useAxios = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/api/products')
            .then(res => setData(res.data.products))
    }, [])
    return {data}
}


export {
    useAxios
}