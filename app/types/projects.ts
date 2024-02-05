/* eslint-disable prettier/prettier */
import {RichTextContent} from  "@graphcms/rich-text-types"
export type KnownTechs  = {
    name:string,
    iconSvg:string,
    startDate:string,
}

export type ProjectSection = {
    title:string
    image:{
        url:string
    }
}

export type Project = {
    slug:string
    thumbnail:{
        url:string
    }
    title:string
    shortDescription:string
    technologies:KnownTechs[]
    pageThumbnail:{
        url:string
    }
    sections:ProjectSection[]
    description:{
        raw:RichTextContent
    }
    liveProjectUrl?:string
    githubUrl?:string
}