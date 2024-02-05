/* eslint-disable prettier/prettier */
import { KnownTechs } from "./projects"
import type {RichTextContent} from '@graphcms/rich-text-types'


/* eslint-disable prettier/prettier */
export type WorkExperience = {
    companyLogo:{
        url:string
    }
    role:string
    companyName:string
    companyUrl:string
    startDate:string
    endDate:string
    technologies:KnownTechs[]
    description:{
        raw:RichTextContent
    }
    
}