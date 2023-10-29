"use client"

import * as React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

import { cn } from "../../lib/utils/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navMenuItems } from "./constant";

export default function MidNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {
          navMenuItems?.map((d, i) => (
            d?.items?.length ?
              (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{d?.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                      {d?.items?.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) :
              (
                <NavigationMenuItem>
                  <Link href={d?.href ?? ''} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {d?.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              )
          ))
        }

      </NavigationMenuList>
      <CiSearch className=" ml-10 text-3xl cursor-pointer hover:opacity-5" />
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem";
