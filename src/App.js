
import './App.css';

function App() {
  return (
<div className=" relative flex-col h-screen w-screen">

<header className='relative grid grid-cols-2 h-3/4 w-screen justify-center bg-black '>
    
    <div className="flex flex-row w-screen">


    <div className='col-start-1 w-1/2'>   
        <p className='text-slate-300 text-7xl '>Trevor</p>
        <p className='text-slate-300 text-7xl '>Reedy</p>
        <div className='text-slate-600 text-5xl col-start-3 col-end-3 flex flex-row'>Software Devloper</div>
    </div> 



    <div className='col-start-2 w-1/2'>
        <div className='w-full content-center justify-center bg-white'>
            

        </div>
    </div> 
    

    <div className=' bg-black flex flex-row items-end width-1/2'>
        <div className='w-fullcontent-center justify-end bg-white'>
            
        </div>
    </div> 
</div>


</header>



<main className=" relative flex flex-col h-full w-full items-center  bg-white h-50% ">

    


    <h1 className='text-slate-900 text-6xl mt-10 decoration-wavy' >Projects</h1>
    <p className='text-slate-900'>Some random shit because I need test text you bitch</p>
    <div className="absolute top-0 left-0 w-full overflow-hidden line-height: 0; fill-black">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
    
    
     

</main>


 
<footer className= "relative flex flex-col h-1/2 w-full items-center justify-center bg-black">
<div className="absolute top-0 left-0 w-full overflow-hidden  line-height: 0; fill-white">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>    
    </footer>


    
</div>
);
}

export default App;
