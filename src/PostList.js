
// const PostList = ({posts})=> {


//     return (

//         <div className="container">

//         <table class="table">
//             <thead>
//             <h1> {name} </h1>
//                 <tr>
//                 <th scope="col">ID</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Body</th>
//                 </tr>
    
//             </thead>
    
//             <tbody>
    
//                 {/* <tr key={posts.id}>
//                 <th scope="row"> {posts.id} </th>
//                 <td> {posts.title} </td>
//                 <td> {posts.body} </td>
//                 </tr> */}
    
//                 {posts.map((posts)=>(
//                     <tr key={posts.id}>
//                     <th scope="row"> {posts.id} </th>
//                     <td> {posts.title} </td>
//                     <td> {posts.body} </td>
//                     </tr>
//                 ))}
    
    
//                 {posts.map((posts)=> (
//                     <tr key={posts.id}>
//                         <th> {posts.id} </th>
//                         <td> {posts.title} </td>
//                         <td> {posts.body} </td>
//                     </tr>
//                 ))}
    
    
//                 {posts.map((posts)=> (
    
//                     <tr key={posts.id}>
//                     <th> {posts.id} </th>
//                     <td> {posts.title} </td>
//                     <td> {posts.body} </td>
//                     </tr>
//                 ))}
    
//             </tbody>
//         </table>
    
//         </div>

//     );
// }


// export default PostList;