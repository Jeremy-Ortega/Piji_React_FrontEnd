import {NavbarMinimalColored} from "../layouts/mantine/sidebar.jsx";
import PijiHeader from "../layouts/components/Header.jsx";
import {IconCalendarPlus, IconFlag, IconMessageCircleQuestion, IconUsers} from '@tabler/icons-react'
import { Button } from '@mantine/core';
import { Badge } from '@mantine/core';
import { Link } from '@inertiajs/react';




export default function Dashboard() {
  return (
    <div class="piji-green">
    <div className="flex flex-row w-full">
      <NavbarMinimalColored/>

        <div class="flex flex-col w-full" >
            <PijiHeader/> 

            <div class="flex justify-between items-center piji-green-2"  style={{ padding: "15px 20px"}}> 
                 <h1 class="text-5xl font-bold"> Dashboard</h1>
                 <Link href="/create" class="flex text-xl bg-amber-50 rounded-xl drop-shadow-md" style={{ padding:"10px 35px"}}>Create +</Link>
            </div>

                {/* might as well gawing component na tong part */}
            <div>
                <div style={{margin:"10px", padding:"30px 20px "}} class="bg-white flex flex-row w-[750px] h-[330px] rounded-3xl drop-shadow-md " >
                  <div class="flex flex-col gap-7">
                  <div class="flex flex-col">
                      <h1 class="text-3xl font-extrabold"> Hi, {name}John!</h1>
                      <p class="text-2xl font-semibold">
                        What are we doing <br />
                        today?
                      </p>
                  </div>

                  <div class="flex flex-row">
                    <div class="grid grid-cols-2 w-[400px] gap-5">
                      <Link className="flex items-center gap-2" style={{marginTop:"-25px"}} ><IconCalendarPlus size={24} color="royalblue"> </IconCalendarPlus>Check Calendar </Link>
                      <Link className="flex gap-" ><IconUsers size={24} color="green"> </IconUsers>Check Collaboration projects</Link>
                      <Link className="flex items-center gap-2" style={{marginTop:"25px"}} ><IconFlag size={24} color="darkorange"> </IconFlag>Check Urgent Tasks</Link>
                      <Link className="flex items-center gap-2" style={{marginTop:"25px"}}><IconMessageCircleQuestion size={24}> </IconMessageCircleQuestion>Ask Piji</Link>
                    </div>
                    
                  </div> 
              </div>    

                  <div style={{margin:"-100px 0 0 0"}}  class="flex object-cover w-[450px] h-[400px] overflow-visible">
                  <img src="/img/PIJI_SPRITE.png" alt="Sprite" class="w-100% h-100% rounded-lg  object-cover overflow-visible scale-x-[-1]"/>
                
                </div>



            </div>


        </div>
    </div>
  </div>
  </div>                   
  );
}

Eto.layout = (page) => page;

{/* // import {SliderHover} from "../layouts/mantine/slider.jsx";
// import { Button } from '@mantine/core'; */}
{/* <Button variant="filled" color="red">Button</Button>; */}


    {/* // <div style={{ padding: '2rem' }}>
      
    //   <h1>Welcome to Mantine UI</h1>

    //   <Button color="red" >Mantine Button hello</Button>
      
      // <Badge color="blue">Badge</Badge>

    //   <SliderHover/>
    // </div> */}

