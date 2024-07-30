import List from "@/component/list";
export interface DataProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getData() {
  let result: DataProps[] = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    result = (await res.json()) satisfies DataProps[];
  } catch (error) {
    console.error(error);
  }

  return result;
}

export default async function Home() {
  const fullData = (await getData()).slice(0, 40);
  return (
    <div className="w-screen min-h-screen py-20 flex justify-center items-center">
      <List fullData={fullData} />
    </div>
  );
}
