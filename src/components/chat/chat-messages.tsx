"use client";
import { IMessageDocument } from "src/models/messageModel";
import { PopulatedDoc } from "mongoose";
import { Session } from "next-auth";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

type ChatMessagesProps = {
  messages: IMessageDocument[] | PopulatedDoc<IMessageDocument>[];
  session: Session | null;
};

const ChatMessages = ({ messages, session }: ChatMessagesProps) => {
  const lastMsgRef = useRef<HTMLDivElement>(null);
  const [isPreviewingImage, setIsPreviewingImage] = useState({
    open: false,
    imgURL: "",
  });
  useEffect(()=>{
    console.log(messages)
  });
  useEffect(() => {
    lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Dialog
				open={isPreviewingImage.open}
				onOpenChange={() => setIsPreviewingImage({ open: false, imgURL: "" })}
			>
				<DialogContent
					className='max-w-4xl h-3/4 bg-sigMain border border-sigColorBgBorder outline-none'
					autoFocus={false}
				>
					<Image src={isPreviewingImage.imgURL} fill className='object-contain p-2' alt='image' />
				</DialogContent>
			</Dialog>
    </>
  );
};
export default ChatMessages;
