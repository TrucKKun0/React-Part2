import { Button } from "./Button";
import {startOfWeek, endOfWeek,eachDayOfInterval, format} from "date-fns"

export function HabitList(){
    {/*  props are data passed to the component */}
    const habits =[{id : "1", name:"Drink water"},{id : "2", name:"Go to the gym"}]
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
            <Button> Delete</Button>
         </div>
        <div className="flex gap-1.5">
            {visibleDates.map(date=>(
                <Button key={date.toISOString()}>
                    <span className="font-medium">{format(date,"EEE")}</span>
                    <span>{format(date,"d")}</span>
                </Button>
            ))}

        </div>

    </div>
}