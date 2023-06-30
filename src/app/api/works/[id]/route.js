import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Work from "@/models/Work";

//Get Work by Id
export const GET = async (req, { params }) => {
  const { id } = params;

  //fetch data
  try {
    await connect();
    const work = await Work.findById(id);
    return new NextResponse(JSON.stringify(work), { status: 200 });
  } catch (error) {}
  return new NextResponse("Database Error !", { status: 500 });
};

//Delete Work by Id
export const DELETE = async (req, { params }) => {
  const { id } = params;
  //fetch data
  try {
    await connect();
    await Work.findByIdAndDelete(id);
    return new NextResponse("Work has been deleted !", { status: 200 });
  } catch (error) {}
  return new NextResponse("Database Error !", { status: 500 });
};
