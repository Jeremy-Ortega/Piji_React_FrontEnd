import {NavbarMinimalColored} from "../layouts/mantine/sidebar.jsx";
import PijiHeader from "../layouts/components/Header.jsx";
import { Button } from '@mantine/core';
import { Badge } from '@mantine/core';
import { Link } from '@inertiajs/react';




export default function Eto() {
  return (
    <div class="piji-green">
    <div className="flex flex-row w-full">
      <NavbarMinimalColored/>

        <div class="flex flex-col w-full" >
            <PijiHeader/> 

            <div class="flex justify-between items-center p-[10px] piji-green-2"  style={{ padding: "10px 20px"}}> 
                 <h1 class="text-5xl font-bold"> Dashboard</h1>
                 <Link href="/create" class="flex px-10 py-4 text-xl bg-amber-50 rounded-xl drop-shadow-md" style={{ padding:"10px 35px"}}>Create +</Link>
            </div>


            <div>
                <div style={{margin:"10px", padding:"3z0px 15px "}} class="bg-white flex flex-row flex-col w-[55%] h-[350px] rounded-3xl drop-shadow-md gap-6 " >
                 <div class="flex flex-col">
                  <div class="flex flex-col">
                      <h1 class="text-3xl font-extrabold"> Hi, {name}Juan!</h1>
                      <p class="text-2xl font-semibold">
                        What are we doing <br />
                        today?
                      </p>
                  </div>

                  <div class="flex flex-col gap-5">

                    {/* gawin ko nalang din to na column */}
                      <div class="flex flex-row gap-30">
                        <Link>ⓘ Check Calendar</Link> 
                        <Link>ⓘ Check Collaboration <br/>projects</Link>
                      </div>

                      <div class="flex flex-row gap-30">
                        <Link>ⓘ Check Urgent Tasks</Link> 
                        <Link>ⓘ Ask Piji</Link>
                      </div>           
                    </div>        
                </div>

                  <div class="flex object-cover">
                  <img src="/img/PIJI_SPRITE.png" alt="Sprite" class="w-45% h-45% rounded-lg  object-cover scale-x-[-1]"/>
                  </div>
                </div>



            </div>
                        {/* <Button color="red" >dito na yung contents</Button> */}

                        {/* <Badge color="blue">Badge</Badge> */}

        </div>
    </div>
  </div>

  );
}

Eto.layout = (page) => page;

// import {SliderHover} from "../layouts/mantine/slider.jsx";
// import { Button } from '@mantine/core';
//         {/* <Button variant="filled" color="red">Button</Button>; */}


    // <div style={{ padding: '2rem' }}>
      
    //   <h1>Welcome to Mantine UI</h1>

    //   <Button color="red" >Mantine Button hello</Button>
      
      // <Badge color="blue">Badge</Badge>

    //   <SliderHover/>
    // </div>

