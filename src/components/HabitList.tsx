import { Button } from "./Button";
import {startOfWeek, endOfWeek,eachDayOfInterval, format, isFuture} from "date-fns"

export function HabitList(){
    {/*  props are data passed to the component */}
    const habits =[{id : "1", name:"Drink water"}]
    if(habits.length ===0){
        return <p className="text-center text-zinc-500 py-12">
            No habbits yet. Add one above to get started!</p>
    }
    return <div>
        {/* when you loop through a array it requires a key prop which is unique to that item */}
        {habits.map(habit=>(

            <HabitListItems key={habit.id} habit = {habit} />

        ))}
    </div>


}

type HabbitItemsProps = {
    habit : {id : string , name : string}
}

function HabitListItems({habit} : HabbitItemsProps){
    {/* gives an array of all the dates in the current week */}
    const visibleDates = eachDayOfInterval({
        start : startOfWeek(new Date()),
        end : endOfWeek(new Date())
    })
    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-3">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                <span className="text-sm text-amber-400">1</span>
            </div>
            <Button variant="ghost-destructive" className="text-sm"> Delete</Button>
         </div>
         {/* key is required when you loop through an array to help React identify which items have changed, are added, or are removed. 
         //It should be a unique identifier for each item in the list. 
         //In this case, we can use the date's ISO string as the key since it is unique for each date. */}
        <div className="flex gap-1.5">
            {visibleDates.map(date=>(
                <Button 
                key={date.toISOString()} 
                disabled={isFuture(date)} 
                className="flex flex-col items-center flex-1 gap-0.5 text-xs rounded-lg" >
                    <span className="font-medium">{format(date,"EEE")}</span>
                    <span>{format(date,"d")}</span>
                </Button>
            ))}

        </div>

    </div>
}