"use client";
import React from "react";
import SideBar from "./_components/SideBar";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";
import Link from "next/link";
function Page() {
  const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUseriles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });


  return (
    <div>
      <h1 className="font-bold text-3xl">Workspace</h1>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    xl:grid-cols-5 gap-5 mt-10"
      >
        {fileList &&
          fileList.map((file, index) => (
            <Link href={`/workspace/${file.fileId}`}>
            <div
              key={index}
              className="flex p-5 shadow-md flex-col rounded-md items-center justify-center border-2 cursor-pointer hover:scale-105 trasition-all"
            >
              <img src='pdf.png' alt="pdf" width={70} height={70} />
              <h2 className="mt-3 font-medium text-lg">{file.fileName}</h2>
              
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Page;
