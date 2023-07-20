import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined 
}
/*
This is similar to mongoose.connect()
*/
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production"){
    globalThis.prisma = client
} 

export default client 

//Basically in next.js it is constantly reloading [hot reload] so you would need to create a mongoose instance and reload[do mongoose.connect everytime the server refreshes ] it again and again as this is handling both server and client side 

// So This code is recommended,  to retain that instance throughout all states
