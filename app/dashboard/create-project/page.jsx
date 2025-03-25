"use client";

import { useUser, useAuth } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
// https://dev.to/a7u/reactquill-with-nextjs-478b
import "react-quill-new/dist/quill.snow.css";

import "react-circular-progressbar/dist/styles.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePostPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  const [imageUrl, setImageUrl] = useState("");
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const router = useRouter();
  console.log(formData);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {getToken} = useAuth();
      const token = await getToken();
      const res = await fetch("/api/project/create-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userMongoId: user.publicMetadata.userMongoId,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        console.log("result is obtained");
        router.push(`/success`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  if (!isLoaded) {
    return null;
  }

  //   if (isSignedIn && user.publicMetadata.isAdmin) {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create a Project
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <Input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">

      <div>
      <h2>Upload an Image</h2>
      <CldUploadButton
        uploadPreset="test-app" 
        onSuccess={(result) => setImageUrl(result.info.secure_url)}
      />
      {imageUrl && setFormData({
        ...formData, image:imageUrl
      })}
    </div>
        </div>

        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}

        <Textarea
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit">Publish</Button>
      </form>
    </div>
  );
  //   } else {
  //     return (
  //       <h1 className='text-center text-3xl my-7 font-semibold'>
  //         You are not authorized to view this page
  //       </h1>
  //     );
  //   }
}
