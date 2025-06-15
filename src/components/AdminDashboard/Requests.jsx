import { useState } from "react";

const initialRequests = [
  {
    id: 1,
    name: "Niko",
    email: "niko@gmail.com",
    title: "Feature Request",
    description: "Add dark mode support",
    status: "Pending",
  },
  {
    id: 2,
    name: "Lana",
    email: "lana@example.com",
    title: "Bug Report",
    description: "Dropdown not working",
    status: "Accepted",
  },
  {
    id: 3,
    name: "Ali",
    email: "ali@mail.com",
    title: "Feedback",
    description: "Great UI!",
    status: "Rejected",
  },
];

export default function Requests() {
  const [requests, setRequests] = useState(initialRequests);

  const handleStatusChange = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  return (
<div className="p-[]">
  <div className="ml-80 p-6 bg-white p-[40px] rounded-[24px] block w-[860px]">
    <h2 className="text-2xl font-bold mb-6">All Requests</h2>

    <div className="overflow-x-auto">
      <table className=" table-auto">
        <thead>
          <tr className="border-t text-[#9197B3] text-[14px] border-b border-gray-300 font-normal ">
            <th className="px-4 py-2 text-left font-medium">Submitter Name</th>
            <th className="px-4 py-2 text-left font-medium">Email</th>
            <th className="px-4 py-2 text-left font-medium">Title</th>
            <th className="px-4 py-2 text-left font-medium">Description</th>
            <th className="px-4 py-2 text-left font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr
              key={req.id}
              className="border-b border-gray-200 hover:bg-gray-50 text-[14px]"
            >
              <td className="px-4 py-2">{req.name}</td>
              <td className="px-4 py-2">{req.email}</td>
              <td className="px-4 py-2">{req.title}</td>
              <td className="px-4 py-2">{req.description}</td>
              <td className="px-4 py-2">
  <select
    value={req.status}
    onChange={(e) => handleStatusChange(req.id, e.target.value)}
    className={`px-2 py-1 rounded-[8px] border text-[14px] bg-white ${
      req.status === "Pending"
        ? "text-yellow-700"
        : req.status === "Accepted"
        ? "text-green-700"
        : "text-red-700"
    }`}
  >
    <option value="Pending" className="text-yellow-700">Pending</option>
    <option value="Accepted" className="text-green-700">Accepted</option>
    <option value="Rejected" className="text-red-700">Rejected</option>
  </select>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}
