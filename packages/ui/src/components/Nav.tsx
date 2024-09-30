import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

const Nav = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-white w-fit rounded-2xl shadow-xl flex overflow-hidden",
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Nav;

export const NavItem = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex text-black items-center space-x-2 p-3 cursor-pointer hover:bg-gray-100",
        props.className
      )}
    >
      {children}
    </div>
  );
};

export const NavItemLabel = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div {...props} className={cn("text-sm", props.className)}>
      {children}
    </div>
  );
};

export const NavItemIcon = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div {...props} className={cn("text-[20px]", props.className)}>
      {children}
    </div>
  );
};
