import React from 'react'
import { FaBars} from 'react-icons/fa';
import {links,social} from './data'
const Navbar = () =>{
    const [listlinks,setLinks]=React.useState(links)
    const [showLinks,setShowLinks]=React.useState(false)
    console.log(listlinks);
    return <nav>
         <div className='nav-center'>
             <div className='nav-header'>
            
               <button className='nav-toggle-icon' onClick={() =>setShowLinks(!showLinks)}>
                   <FaBars></FaBars>
               </button>
                
             </div>
             {
                 showLinks && <div className='links-container show-container'>

                
                 <ul className='links'>
                 {
                    listlinks.map((link)=>{
                        return <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    })
                 }
                 </ul>
                 
             </div>
             }
             
             <ul className='social-icons'>
             {
                    social.map((s)=>{
                        return <li key={s.id}>
                            <a href={s.url}>{s.icon}</a>
                        </li>
                    })
                 }
              </ul>
         </div>
    </nav>
}
export default Navbar