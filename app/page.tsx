import Button from "./components/button"

//import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <Button  text="Contact Us"/>
    <Button text="About Us" /> 
    {/*<Button>Contact Us</Button>*/}


    <h1 className="text-3xl font-bold text-red-500 sm:text-green-400 xl:text-blue-500">Hello World</h1>
    </>
  )
}