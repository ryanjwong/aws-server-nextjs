import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, useTheme } from "@nextui-org/react";
import { Logo } from "../Logo"
export default function Bar() {
  const collapseItems = [
    "HOME",
    "LITEPAPER",
    "TEAM",
    "CONTACT US",
  ];
  return (
       <Navbar isBordered={true} variant={"sticky"}  css={{
        background: "transparent",
        $$navbarContainerMaxWidth: "100%",
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "bg-neutral-800",
        $$navBarTextColor: "white",
}}>
        <Navbar.Toggle showIn="xs"/>

        <Navbar.Brand>
          <Text b color="white" hideIn="xs">
              SHADW
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"underline-rounded"}>
          <Navbar.Link isActive href="#" css={{color: "white"}}>Home</Navbar.Link>
          <Navbar.Link animated={false} href="#" css={{color: "white"}}>Litepaper</Navbar.Link>
          <Navbar.Link href="#" css={{color: "white"}}>Team</Navbar.Link>
          <Navbar.Link href="#" css={{color: "white"}}>Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#" css={{color: "white"}}>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto  as={Link} href="#" css={{color: "white"}}>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse 
          css={{
            background: "rgba(0, 0, 0, 0.4)"
        }}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              css={{
                color: "white",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      
  )
}
