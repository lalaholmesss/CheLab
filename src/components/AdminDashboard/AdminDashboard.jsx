import AdminNavbar from "./AdminNavbar";
import Requests from "./Requests";

export default function AdminDashboard(){
    return(
    <div className="bg-[#F9FBFF] h-[100vh] py-[40px]">
        <p className="font-semibold text-[24px] pl-80 pb-[40px]">Hello, Admin</p>
        <AdminNavbar/>
        <Requests/>
    </div>
    
)
    
}