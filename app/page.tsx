import { addCV, getCV } from "@/lib/cv";

export default async function Home() {
  const tasks = await getCV()
  return (
    <div className="flex flex-col min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold">Todo list</h1>
            <form action={addCV}>
                <label>Ajouter une tâche : 
                    <input name = "title" className="border" />
                </label>
                <button className="button bg-gray-100 border p-2">Submit</button>
            </form>
            <ul>
                {tasks.map(task => <li>{task.title}</li>)}
            </ul>
    </div>
  );
}
