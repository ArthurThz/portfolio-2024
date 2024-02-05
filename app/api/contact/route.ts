/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import axios from "axios"
import { NextResponse } from "next/server"
import { z } from "zod"


const bodySchema = z.object({
    name:z.string(),
    email:z.string().email(),
    message:z.string()
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!


export async function POST(request:Request){

    try{

        const body = await request.json()
        
        const {email, message,name} = bodySchema.parse(body)

        const messageData = 
            {
                embeds:[
                    {
                    
                      title: 'Mensagem de contato',                      
                      color: 0x1e64c5,
                      fields: [
                        {
                          name: 'Nome',
                          value: name,
                          inline: true
                        },
                        {
                          name: 'Email',
                          value: email,
                          inline: true
                        },
                        {
                          name: 'Mensagem',
                          value: message
                        }
                      ]
                    }
                  ]
            }
        

        await axios.post(WEBHOOK_URL,messageData)

        return NextResponse.json({
            message:"Mensagem enviada com sucesso!"
        })

    } catch (error){
        console.error(error,"erro na route.ts")
        return NextResponse.error()

    }
}


