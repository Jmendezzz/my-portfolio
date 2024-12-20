import { LocalizedText } from "./Localized";
import { Technology } from "./Technology";

export interface Project {
    id: number;
    name: LocalizedText,
    description: LocalizedText,
    imageUrl: string;
    githubUrl: string;
    initDate: Date;
    endDate: Date;
    technologies: Technology[];
}