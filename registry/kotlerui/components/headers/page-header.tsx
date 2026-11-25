import * as React from "react";
import { cn } from "cn";

interface PageHeaderProps {
  className: string;
  children: React.ReactNode;
}

function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & PageHeaderProps) {
  return (
    <header className={cn("flex items-center", className)}>
      {...props}
      {children}
    </header>
  );
}

function HeaderActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-x-3", className)}>{...props}</div>
  );
}

export { PageHeader, HeaderActions };
