import { prisma } from "@/config/prisma";
import { NextResponse} from "next/server";

export async function GET() {
    const data = await prisma.content.findMany();
    return NextResponse.json(data);
}

export async function POST(request) {
    const body = await request.json();
    const data = await prisma.content.create({
        data: {
            text: body.text,
            status: body.status
        }
    })
    return NextResponse.json(data);
}

export async function PUT(request) {
    const body = await request.json();
    const data = await prisma.content.update({
        where: {
            id: body.id
        },
        data: {
            status: body.status
        }
    })
    return NextResponse.json(data);
}

export async function DELETE(request) {
    const body = await request.json();
    const data = await prisma.content.delete({
        where: {
            id: body.id
        }
    })
    return NextResponse.json(data);
}