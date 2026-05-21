import {Button} from "./Button";
export function HabitForm(){
    return (
        <form action="" className="flex gap-2">
            <input className="flex-1 rounded-lg bg-zinc-800 px-4 py-4 outline-none focus-visible:ring-2 
             focus-visible:ring-vilot-500" placeholder="New habit..."/>
        <Button>Add Habit</Button>
        </form>

    )
}