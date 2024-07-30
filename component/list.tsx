"use client";
import { DataProps } from "@/app/page";
import { useEffect, useState } from "react";

export default function List({ fullData }: { fullData: DataProps[] }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(fullData);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!search) setData(fullData);
    setData(
      fullData.filter((item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);
  return (
    <div className="rounded-md shadow-xl bg-white min-w-[360px] border">
      <div className="py-4 px-5">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full text-sm appearance-none outline-none border border-gray-400 rounded-md px-3 py-2"
        />
      </div>
      <div className="pb-4 px-5">
        <p className="text-gray-600 text-xs mb-4">List of {data.length} data</p>
        <ul className="-my-3 divide-y max-h-[200px] overflow-auto">
          {data.map((item, key) => (
            <li className="text-sm w-full py-3" key={key}>
              <div className="flex w-full">
                <input
                  type="checkbox"
                  onChange={(e) => setStatus(e.target.checked)}
                  checked={item.completed}
                  name="status"
                  id=""
                />
                <p className="flex-1 ml-3">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
