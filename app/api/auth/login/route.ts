import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // بيانات دخول افتراضية للوحة التحكم
    if (email === "admin@masar.ly" && password === "Masar2025") {
      return NextResponse.json({ 
        success: true, 
        user: { name: "مدير النظام", role: "admin" } 
      });
    }

    return NextResponse.json(
      { success: false, message: "بيانات الدخول غير صحيحة" }, 
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطأ في الاتصال بالسيرفر" }, 
      { status: 500 }
    );
  }
}
