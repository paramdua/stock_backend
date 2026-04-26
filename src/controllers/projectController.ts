import { Request, Response } from "express";


export const getProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const projects = await prisma.project.findMany();
    const abc = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
    // .then(json => console.log(json))
    console.log("abc", abc)
    res.json({ result: abc });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving projects: ${error.message}` });
  }
};

export const buyCall = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { status } = req.body;
  try {
    // const projects = await prisma.project.findMany();
    const abc = await fetch('https://api.upstox.com/v3/order/gtt/place', {
      method: 'POST',
      headers:  {
        'Content-Type': 'application/json',
        'Authorization': req.headers["authorization"] || ' '
      },
      body: JSON.stringify(req.body) // forward incoming request body
    }).then(response => response.json())
    // .then(json => console.log(json))

    res.json({ result: abc });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving projects: ${error.message}` });
  }
};