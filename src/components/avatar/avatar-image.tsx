import { tw } from "@/tailwind";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const AvatarImage = forwardRef<ElementRef<"img">, ComponentPropsWithoutRef<"img">>(
  ({ className, ...props }, ref) => (
    <img className={tw("aspect-square h-full w-full", className)} ref={ref} {...props} />
  ),
);
AvatarImage.displayName = "Img";
