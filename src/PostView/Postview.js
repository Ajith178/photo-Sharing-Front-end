import './page.css'
import { useEffect, useState } from "react";
const Postview = () =>
{ 
    const [getData,setData] = useState([]);
        useEffect(() =>
        {
            fetch("http://localhost:3004/user")
            .then((res)=>
            {
                return res.json();
            })
            .then((data)=>
            {
                setData(data)
            })
            .catch((err)=>{
                console.log("link might not working",err);
            })
        },[])
       return (<>
       <div className='header'>
       <img src="insta.jpg" alt="insta logo not rendered(devops)" height="40px" width="40px"></img>
          <span className='topper' > InstaClone</span>
          <img  className="align"src="camera.png" alt="oops camera" height="40px" width="40px" ></img>
          <hr></hr>
       </div>
       { 
         getData.map((e)=>{
           return (
            <>
            <div className='wrapper'>
             <div className='centered-box'>
                    <div className='three'>
                    <span>...</span>
                    </div>
                    <div className='justify'>
                <div className='name'>
               <span>{e.name}</span>
              </div>
              <div className='location'>
                <span>{e.location}</span>
                </div>
             </div>
             <img src = {e.PostImage} width="200px" height="200px" alt="oops"></img>
                 <div className='same'>      
                <table>
                    <tr>
                        <td><img src="heart.jpg" height="30px" width="30px" alt="oops"/></td>
                        <td><img src="share.png" height="30px" width="30px" alt="oops"/></td>
                        <td className='date'>{e.date}</td>
                    </tr>
                </table>
               </div>
               <text className='text'>{e.likes}likes</text>
            </div>
            <div className='des'>
            <h4>{e.description}</h4>
            </div>
            </div>
           </>
           )
        })
       }       
      </>)
}
export default Postview;
$ git config --global user.name "John Doe"