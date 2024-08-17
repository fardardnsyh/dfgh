"use server"

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const Logout = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/sign-in");
};