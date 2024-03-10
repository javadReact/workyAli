import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";

const SingleBlog = () => {
    const {query} = useRouter();
    const [data , setData] = useState({});
    useEffect(() => {
        if(query.id)
        {
            axios.get("https://myfakeapi.com/api/cars/" + query.id)
                .then(res => {
                    console.log(res.data)
                })
        }
    }, [query]);
    return (
        <>

        </>
    );
};

    export default SingleBlog;