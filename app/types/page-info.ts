/* eslint-disable prettier/prettier */
import { KnownTechs } from "./projects"
import type {RichTextContent} from '@graphcms/rich-text-types'

/* eslint-disable prettier/prettier */
export type Social = {
    url:string,
    iconSvg:string,
}
export type HomePageInfo = [{

    introduction : {
        raw:RichTextContent
    },
    technologies:KnownTechs[]

    profilePicture:{
        url:string,
    },
    socials:Social[],
    knownTechs:KnownTechs[],
}]

export type HomePageData = {
    pages : HomePageInfo
}