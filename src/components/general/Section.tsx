import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type propTypes = {
   title: string;
   contentClassName?: string;
   icon: LucideIcon;
   children: ReactNode;
   actions: ReactNode;
};

export default function Section({ title, contentClassName, icon: Icon, children, actions }: propTypes) {
   return (
      <div className="mb-4">
         <h2 className="capitalize flex items-center gap-2 p-2">
            <Icon />
            {title}

            <div className="ml-auto">{actions}</div>
         </h2>

         <div className={cn("p-5", contentClassName)}>{children}</div>
      </div>
   );
}
