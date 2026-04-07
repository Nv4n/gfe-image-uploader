import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Card>
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <Image
          src="/cover.jpg"
          alt="Image uploader cover"
          fill={true}
          po
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>
              <Image
                src="/default-avatar.svg"
                alt="Default avatar image"
                fill={true}

              />
            </AvatarFallback>
          </Avatar>
          <Button>Update picture</Button>
        </CardHeader>
        <CardContent>
          <h1>Jack Smith</h1>
          <div className="flex gap-3">
            <span>@kingjack</span>
            <div className="flex gap-2">
              <span>Senior Product Designer</span>
              <span>at Webflow</span>
              <span className="text-neutral-600">He/Him</span>
            </div>

            <span className="text-neutral-600"> Vancouver, Canada</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
