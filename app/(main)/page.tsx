import { DasboardCard } from "@/components/dashboard/DashboardCard";
import { PostTable } from "@/components/post/PostTable";
import { Folder, MessageCircle, MessageSquare, Newspaper, User } from "lucide-react";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";

export default function Home() {
  return (
    <>
     <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
      <DasboardCard title="posts" count={593} icons={<Newspaper className="text-slate-500 cursor-pointer" size={72}/>}/>
      <DasboardCard title="Categories" count={58} icons={<Folder className="text-slate-500 cursor-pointer" size={72}/>}/>
      <DasboardCard title="Users" count={97} icons={<User className="text-slate-500 cursor-pointer" size={72}/>}/>
      <DasboardCard title="Comments" count={769} icons={<MessageCircle className="text-slate-500 cursor-pointer" size={72}/>}/>
     </div>
     <AnalyticsChart/>
    </>
  );
}
