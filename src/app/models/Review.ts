export class Review
{
    Review_Id:number;
    Facebook:boolean;
    Instagram:boolean;
    Gmail:boolean;
    User_Id:number;
    Student_Id:number;
    Entry_Date:Date;

    Facebook_Date:Date;
    Instagram_Date:Date;
    Google_Date:Date;

    Checklist:boolean;
    Kit:boolean;
    Ticket:boolean;
    Accomodation:boolean;
    Airport_Pickup:boolean;
    Checklist_Date:Date;
    Kit_Date:Date;
    Ticket_Date:Date;
    Accomodation_Date:Date;
    Airport_Pickup_Date:Date;





constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

