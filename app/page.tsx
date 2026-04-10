import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Card className="relative flex w-full max-w-xs flex-col gap-6 rounded-lg border border-neutral-200 px-4 py-8 shadow-md md:max-w-2xl md:p-8 lg:max-w-3xl">
				<div className="w-full before:absolute before:inset-0 before:z-0 before:h-32 before:w-full before:bg-[url(/cover.png)] before:bg-cover before:bg-center before:content-[''] before:md:h-44"></div>
				<CardHeader>
					<Avatar>
						<AvatarImage />
						<AvatarFallback>
							<Image
								src="/default-avatar.svg"
								alt="Default avatar image"
								fill={true}
								className="h-24 w-24 object-cover"
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

						<span className="text-neutral-600">
							{" "}
							Vancouver, Canada
						</span>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
