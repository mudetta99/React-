import { useState } from "react"


const Post = ()=> {

const [post, setPost] = useState([


    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },

])


const [reacto, setReacto] = useState ([

    {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
      },
      {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
      },
      {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
      },


])


    return (
        
        <table>

            <thead>
                <tr>
                    <th> Id </th>
                    <th> Title </th>
                    <th> Body </th>
                </tr>
            </thead>

            <tbody>

            {post.map((post)=>(

            

                <tr key={post.id} >

                    <th> {post.id}  </th>
                        <td> {post.title} </td>
                        <td> {post.body} </td>


                </tr>
            ))}


        {reacto.map((reacto)=>(

            <tr key={reacto.id} >
                <th> {reacto.id} </th>
                <td> {reacto.title} </td>
                <td> {reacto.body} </td>
            </tr>
        ))}

            </tbody>


        </table>


    )
}


export default Post;