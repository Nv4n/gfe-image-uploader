import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Card className="relative mx-auto flex w-full max-w-xs flex-col gap-6 rounded-lg border border-neutral-200 pt-32 shadow-md before:absolute before:inset-0 before:h-32 before:w-full before:bg-[url(/cover.png)] before:bg-cover before:bg-center before:content-[''] md:max-w-2xl md:pt-44 before:md:h-44 lg:max-w-3xl">
				<CardHeader className="relative z-1 flex justify-between">
					<Avatar className="relative -mb-20 size-20 -translate-y-1/2 border border-zinc-200 shadow-sm">
						<AvatarImage />
						<AvatarFallback className="relative">
							<Image
								src="/default-avatar.svg"
								alt="Default avatar image"
								fill={true}
								className="h-24 w-24 object-cover"
							/>
						</AvatarFallback>
					</Avatar>
					<Button className="">Update picture</Button>
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
