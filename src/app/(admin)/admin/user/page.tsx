
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from "next/image"
  
  const user = [
    {
     profileImage:"https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
      fullname: "jawed",
      email: "Paid54354@gmail.com",
      location: "karachi",
     event: 5,
     key:1
    },
    {
        profileImage:"https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
        fullname: "AHAD",
        email: "Unpaid54354@gmail.com",
        location: "karachi",
       event: 3,
       key:2
    },
    {
        profileImage:"https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
        fullname: "shahid",
        email: "Paid54354@gmail.com",
        location: "karachi",
       event: 2,
       key:3
    },
 
  ]
  
  export  default function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of your recent users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead className="w-[100px]">FullNmame</TableHead>
            <TableHead>Location</TableHead>
            <TableHead >Event</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user.key}>
              <TableCell className="text-right"><Image src={user.profileImage} width={40} height={40} alt="image" className="rounded-md"></Image></TableCell>
              <TableCell className="font-medium">{user.fullname}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  