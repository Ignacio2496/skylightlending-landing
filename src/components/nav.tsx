import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Installer/Dealer Application",
    "Our Story",
    "News",
    "Login",
    "Contact US",
  ];

  return (
    <Navbar className="fixed z-50 p-1 bg-white top-10" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-foreground"
        />
        <NavbarBrand className="flex justify-center md:justify-start">
          <AcmeLogo/>
          
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 " justify="center">
    
        <NavbarItem>
          <Link className="hover:bg-yellow-400 p-5 rounded-full" color="foreground" href="#">
            Installer/Dealer Application
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:bg-yellow-400 p-5 rounded-full"  color="foreground" href="#">
            Our Story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:bg-yellow-400 p-5 rounded-full" href="#" color="foreground" aria-current="page">
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:bg-yellow-400 p-5 rounded-full" color="foreground" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:bg-yellow-400 p-5 rounded-full" color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    
      <NavbarMenu className="z-40">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-20" key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
