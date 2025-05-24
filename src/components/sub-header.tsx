"use client"

import {

  SidebarTrigger,
} from "@/components/ui/sidebar";


import { useSidebar } from "@/components/ui/sidebar";



const SubHeader = () => {

  const { open } = useSidebar();

  return (
    <>
 
        {!open && <SidebarTrigger className="-ml-1" />}

       
    </>
  );
};
export default SubHeader;
