import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, useTheme } from "@nextui-org/react";
import { Logo } from "../Logo"
export default function Bar() {
    const {isDark} = useTheme();

  return (
    <div>
       <Navbar  variant={"floating"}>

        <Navbar.Brand>
        <Logo/>
        </Navbar.Brand>
        <Navbar.Content activeColor={"primary"}hideIn="xs">
          <Navbar.Link href="#">Whitepaper</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      
    </div>
  )
}
