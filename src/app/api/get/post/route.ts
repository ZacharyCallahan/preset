import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
    try {
        const allPosts = await prisma.post.findMany();

        return NextResponse.json(allPosts, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "There was an error" },
            { status: 500 }
        );
    }
}
