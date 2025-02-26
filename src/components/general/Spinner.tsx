import { cn } from "@/lib/utils";

export default function Spinner({ className }: { className?: string }) {
   return (
      <div
         className={cn("size-8 animate-spin rounded-full border-4 border-gray-300 border-t-primary-default", className)}
      />
   );
}
