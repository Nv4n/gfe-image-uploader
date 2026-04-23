import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

function ImageUploadDialog() {
	<Dialog>
		<DialogTrigger>
			<Button
				variant="outline"
				className="mt-2 rounded px-3 py-2 text-sm"
			>
				Update picture
			</Button>
		</DialogTrigger>
		<DialogContent>
			<DialogHeader>
				<DialogTitle className="text-xl font-medium">
					<span className="">Upload image(s)</span>
				</DialogTitle>
				<DialogDescription>
					<span className="text-muted-foreground text-base">
						You may upload up to 5 images
					</span>
				</DialogDescription>
			</DialogHeader>
		</DialogContent>
	</Dialog>;
}
