/* eslint-disable prettier/prettier */
import { KnownTechs, Project } from "./projects"
import type {RichTextContent} from '@graphcms/rich-text-types'
import { WorkExperience } from "./work-experience"

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
    highlightProjects:Project[]
}]

export type ProjectPageData = {
    project:Project
}

export type ProjectsPageData = {
    projects:Project[]
}
export type HomePageData = {
    pages : HomePageInfo
    workExperiences:WorkExperience[]
}

export type ProjectsPageStaticData ={
    projects:{
        slug:string
    }[]
}