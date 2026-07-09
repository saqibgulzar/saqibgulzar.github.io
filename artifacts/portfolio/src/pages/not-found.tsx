import { Link } from "wouter";
import { FileQuestion } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
        <FileQuestion size={32} />
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-serif font-bold">404 - Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4">
        Return Home
      </Link>
    </PageTransition>
  );
}
