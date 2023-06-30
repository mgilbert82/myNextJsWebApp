import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Work from "@/models/Work";

export const GET = async (req) => {
  //fetch data
  try {
    await connect();
    const works = await Work.find();
    return new NextResponse(JSON.stringify(works), { status: 200 });
  } catch (error) {}
  return new NextResponse("Database Error !", { status: 500 });
};

export const POST = async (req) => {
  const body = await req.json();
  const newWork = new Work(body);

  //Save data
  try {
    await connect();
    await newWork.save();
    return new NextResponse("Work has been created !", { status: 201 });
  } catch (error) {}
  return new NextResponse("Database Error !", { status: 500 });
};
