"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "w-full flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all",
          isActive
            ? "text-[#453425] bg-[#ffe7d3] hover:bg-[#ffe7d3] hover:text-[#453425]"
            : "text-slate-500 hover:text-[#453425] hover:bg-[#ffe7d3]"
        )}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={22}
            className={cn(
              isActive ? "text-[#453425]" : "text-slate-500"
            )}
          />
          {label}
        </div>
        <div
          className={cn(
            "ml-auto opacity-0  border-[#453425] h-full transition-all",
            isActive && "opacity-100"
          )}
        />
      </button>
    </div>
  );
};