import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically send an email or save to DB
        console.log("Contact form submission:", body);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
