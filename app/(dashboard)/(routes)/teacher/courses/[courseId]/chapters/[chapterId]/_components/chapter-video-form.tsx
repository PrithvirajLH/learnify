"use client"

import * as z from "zod";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle, Video, VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, Course, MuxData } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ChapterVideoFormProps {
    initialData: Chapter & { muxData?: MuxData | null };
    courseId: string;
    chapterId: string;
};

const formSchema = z.object({
    videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
    initialData,
    courseId,
    chapterId,
}: ChapterVideoFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = ()=> setIsEditing((current)=> !current);
    const router = useRouter();

    const onSubmit = async (values:z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
            toast.success("Chapter Updated");
            toggleEdit();
            router.refresh();

        } catch  {
            toast.error("Something went wrong");
            
        }
    }
    return(
        <div className="mt-6 border bg-[#ffe7d3] rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Chapter Video
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing && (
                        <>
                            Cancel
                        </>
                    )}
                    {!isEditing && !initialData.videoUrl &&(
                        <>
                            <PlusCircle className="h-4 w-4 mr-2"/>
                            Add video
                        </>
                    )}
                    {!isEditing && initialData.videoUrl &&(
                        <>
                            <Pencil className="h-4 w-4 mr-2"/>
                            Edit video
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                !initialData.videoUrl ? (
                    <div className="flex items-center justify-center h-60 border-2 border-[#524438] bg-[#ffe7d3] rounded-md">
                        <Video className="h-10 w-10 text-[#524438]"/>
                    </div>
                ):(
                    <div className="relative aspect-video mt-2">
                        <MuxPlayer
                            playbackId={initialData?.muxData?.playbackId || ""}
                        />
                    </div>
                )
            )}
            {isEditing && (
                <div>
                    <FileUpload
                        endpoint="chapterVideo"
                        onChange={(url) => {
                            if(url){
                                onSubmit({videoUrl: url});
                            }
                        }}
                    />
                    <div className="text-xs text-muted-foreground mt-4">
                        Upload this chapter's video 
                    </div>
                </div>
            )}
            {initialData.videoUrl && !isEditing && (
                <div className=" text-xs text-muted-foreground mt-2">
                    Videos can take a few minutes to process. Refresh the page if video does not appear.
                </div>
            )}
        </div>
    )
}