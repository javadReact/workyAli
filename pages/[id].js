// import React, {useEffect, useState} from 'react';
// import {useRouter} from "next/router";
//
// const SinglePage = (props) => {
//     const {query} = useRouter();
//     const [data , setData] = useState({})
//     useEffect(() => {
//         if (query.id)
//         {
//             fetch("https://fakestoreapi.com/products" + query.id)
//                 .then(res => res.json())
//                 .then(res =>{
//                     setData(res.data)
//                 })
//         }
//     }, [query]);
//
//     console.log(data);
//     return (
//         <div>
//             {query.id}
//         </div>
//     );
// };
//
//     export default SinglePage;