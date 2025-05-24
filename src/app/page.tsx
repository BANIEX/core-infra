"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import complaintslog from "@/assets/icons/file-plus.png"
import { useState, ChangeEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogTable } from "@/components/log-table";
import SearchBar from "@/components/search-bar";
import DateFilterToolbar from "@/components/date-filter";



export default function Home() {


  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };


  

 







  return (
    <div className="">
      <div className="border-b-2 ">
        <h1 className="text-lg text-lapo-text-primary font-medium">
          Complaints : Log
        </h1>
        <h5 className="text-sm text-lapo-text-secondary font-normal mb-2">
          View details of logged complaints and log new ones here.
        </h5>
      </div>

      <div className="mt-5">
        <Tabs defaultValue="pending" className="w-full">
          <div className="flex justify-between">
            <TabsList className="flex border border-gray-300 rounded-md overflow-hidden bg-[#F9FAFB]">
              
              <TabsTrigger
                value="pending"
                className={`
            flex-1 px-4 py-2 text-gray-700
            data-[state=active]:font-medium
            data-[state=active]:before:content-['']
            data-[state=active]:before:block
            data-[state=active]:before:w-2
            data-[state=active]:before:h-2
            data-[state=active]:before:rounded-full
            data-[state=active]:before:bg-lapo-primary-blue
            data-[state=active]:before:mr-2
          `}
              >
                Pending
              </TabsTrigger>

             
              <TabsTrigger
                value="resolved"
                className={`
            flex-1 px-4 py-2 flex items-center justify-center text-gray-700
            data-[state=active]:font-medium
            data-[state=active]:before:content-['']
            data-[state=active]:before:block
            data-[state=active]:before:w-2
            data-[state=active]:before:h-2
            data-[state=active]:before:rounded-full
            data-[state=active]:before:bg-lapo-primary-blue
            data-[state=active]:before:mr-2
          `}
              >
                Resolved
              </TabsTrigger>
            </TabsList>
            <div>
              <Button
                className="
        bg-lapo-secondary-blue     
        text-white               
        hover:bg-lapo-primary-blue
        focus:ring-lapo-primary-blue 
      "
              >
                <Image src={complaintslog} width={20} height={20} alt="compl" />
                Log complaint
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[320px]">
              <SearchBar
                value={query}
                onChange={handleSearchChange}
                placeholder="Search complaint"
              />
            </div>
            <div className="flex gap-2">
              <DateFilterToolbar
                onDateClick={() => console.log("open date")}
                onFilterClick={() => console.log("open filter")}
              />
            </div>
          </div>
          <TabsContent value="pending">
            <LogTable />
          </TabsContent>
          <TabsContent value="resolved">
            <LogTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
