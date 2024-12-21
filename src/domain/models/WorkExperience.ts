import { LocalizedText } from "./Localized";

export interface WorkExperience {
    id: number;
    title: LocalizedText;
    descrption: LocalizedText;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
}