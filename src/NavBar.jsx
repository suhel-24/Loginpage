import { IoMdMenu } from 'react-icons/io';
import { IoIosClose } from "react-icons/io";

import { useState } from 'react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <main>
    <div className="flex items-center justify-between px-6 py-6">
      <section className="flex items-center gap-4">
        <IoMdMenu className="text-3xl cursor-pointer" onClick={toggleMenu}/>
        <div className="text-3xl">Logo</div>
      </section>
      {/* <div className=' fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm'>

      </div> */}
       
       {isOpen &&(<div className="fixed top-0 left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-80 flex items-center justify-center">
    
     <section className='text-black absolute bg-white w-52 flex-cl absolue left-0 top-0 h- h-screen p-8 gap-8 z-50 flex flex-col'>
     <div><IoIosClose className="text-5xl cursor-pointer" onClick={toggleMenu}/></div>
     <div className='text-3xl'>hello</div>
      </section> 
    
  </div>)}

      <section className="flex items-center gap-4 ">
        <div className='text-3xl'>login</div>
        <div className='text-3xl'>signup</div>
      </section>
    </div>
    <hr />
    </main>
  );
};

export default NavBar;


// {isOpen && (
//   <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex items-center justify-center">
//     <div className="text-white text-3xl h-full w-xl bg-black pl-2">
      
//     <IoIosClose className="text-5xl cursor-pointer" onClick={toggleMenu}/></div>
//     <div> hello</div>
//   </div>
// )}