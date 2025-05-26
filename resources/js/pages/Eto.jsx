import {NavbarMinimalColored} from "../layouts/mantine/sidebar.jsx";
// import { HeaderTabs } from "../layouts/mantine/HeaderTabs.jsx";
import {Header} from "../layouts/components/Header.jsx";
import { Button } from '@mantine/core';
import { Badge } from '@mantine/core';



export default function Eto() {
  return (
    <body class="piji-green">
      <div class="flex">
      <NavbarMinimalColored/>
      {/* <HeaderTabs/> */}

      
      <Badge color="blue">Badge</Badge>
      <Button color="red" >Mantine Button hello</Button>
      </div>
      </body>

      
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

