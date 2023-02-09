export interface CareersModel{
    Career_id: number;
    Title: string;
    Posted_by_id: number;
    Career_type: string;
    Created_date: string;
    Closing_date: string;
    Career_description: string;
    Is_active: string;
    Street_address: string;
    City: string;
    State: string;
    Country: string;
    Zip: string;
    Selected?:boolean
}