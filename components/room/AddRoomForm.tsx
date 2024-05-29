'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Hotel, Room } from "@prisma/client"
import { useForm } from "react-hook-form"
import * as z from 'zod'

interface AddRoomFormProps {
    hotel?: Hotel & {
        rooms: Room[]
    }
    room?: Room
    handleDialogueOpen: () => void
}

const formSchema = z.object({
    title: z.string().min(3, {
        message: 'Title must be atleast 3 characters long'
    }),
    description: z.string().min(10, {
        message: 'Description must be atleast 10 characters long'
    }),
    bedCount: z.coerce.number().min(1, {message: 'Bed count is required'}),
    guestCount: z.coerce.number().min(1, {message: 'Guest count is required'}),
    bathroomCount : z.coerce.number().min(1, {message: 'Bathroom count is required'}),
    kingBed : z.coerce.number().min(0),
    queenBed : z.coerce.number().min(0),
    image: z.string().min(1, {
        message: 'Image is required'
    }),
    breakFastPrice: z.coerce.number().optional(),
    roomPrice: z.coerce.number().min(1, {
        message: 'Room price is required'
    }),
    roomService : z.boolean().optional(),
    TV   : z.boolean().optional(),
    Balcony  : z.boolean().optional(),
    freeWifi  : z.boolean().optional(),
    cityView  : z.boolean().optional(),
    oceanView  : z.boolean().optional(),
    forestView  : z.boolean().optional(),
    mountainView : z.boolean().optional(),
    airCondition  : z.boolean().optional(),
    soundProofed : z.boolean().optional(),

})

const AddRoomForm = ({ hotel, room, handleDialogueOpen }: AddRoomFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: room || {
            title : '',
            description: '',
            bedCount: 0,
            guestCount: 0,
            bathroomCount: 0,
            kingBed: 0,
            queenBed: 0,
            image: '',
            breakFastPrice: 0,
            roomPrice: 0,
            roomService: false, 
            TV : false,
            Balcony: false,
            freeWifi: false,
            cityView : false,
            oceanView: false,
            forestView: false,
            mountainView: false,
            airCondition: false,
            soundProofed : false,
        },
      })
    return (
        <div>
            Add
        </div>
    )
}

export default AddRoomForm
