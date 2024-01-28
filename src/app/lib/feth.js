import { prisma } from "@/config/prisma";

export const checkEnvironment = () => {
    let base_url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/v1"
        : process.env.NEXT_PUBLIC_API_URL;
  
    return base_url;
  };

export const fetcher = async () => {
  const data = await prisma.content.findMany();
  return data;
};

export const creator = async (content) => {
    const data = await fetch(`${checkEnvironment()}`+ "/contents", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
    })
}


export const updater = async (id, newStatus) => {
    const data = await fetch(`${checkEnvironment()}`+ "/contents", {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:id, status:newStatus})
    })
}

export const deleter = async (id) => {
    const data = await fetch(`${checkEnvironment()}`+ "/contents", {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:id})
    })
}