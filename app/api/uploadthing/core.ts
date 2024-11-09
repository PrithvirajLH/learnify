import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {
  const {userId} = auth();
  const isAuthorized = isTeacher(userId);
  if(!userId || !isAuthorized) throw new Error("Unauthorized");
  return {userId}
}

export const ourFileRouter = {
  courseImage: f({image: {maxFileCount:1, maxFileSize: "4MB"}})
    .middleware(()=> handleAuth())
    .onUploadComplete(()=>{}),
  courseAttachment: f(["text", "image", "video", "pdf"])
    .middleware(()=>handleAuth())
    .onUploadComplete(()=>{}),
  chapterVideo: f({video: {maxFileCount:1, maxFileSize: "512GB"}})
    .middleware(()=>handleAuth())
    .onUploadComplete((file)=>{
      console.log(file)
      return(file.metadata)})
    
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
