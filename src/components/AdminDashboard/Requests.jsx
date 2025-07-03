import { useState } from "react";

const initialRequests = [
  {
    id: 1,
    name: "Niko",
    email: "niko@gmail.com",
    title: "Feature Request",
    description: "Add dark modeaaaaerrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaaaaavnjdffdsfd Loremdkfdjdfkjdf",
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
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleStatusUpdate = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
    setSelectedRequest(null); // Close modal
  };

  return (
    <div className="p-[]">
      <div className="ml-80 p-6 bg-white p-[40px] rounded-[24px] block w-[860px]">
        <h2 className="text-2xl font-bold mb-6">All Requests</h2>

        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr className="border-t text-[#9197B3] text-[14px] border-b border-gray-300 font-normal">
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
                  className="border-b border-gray-200 hover:bg-gray-50 text-[14px] cursor-pointer"
                  onClick={() => setSelectedRequest(req)}
                >
                  <td className="px-4 py-2">{req.name}</td>
                  <td className="px-4 py-2">{req.email}</td>
                  <td className="px-4 py-2">{req.title}</td>
                  <td className="px-4 py-2 truncate max-w-[200px]">{req.description}</td>
                  <td
                    className={`px-4 py-2 font-medium ${
                      req.status === "Accepted"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {req.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[500px] p-6 relative">
            <h3 className="text-xl font-semibold mb-4">Request Details</h3>
            <p><strong>Name:</strong> {selectedRequest.name}</p>
            <p><strong>Email:</strong> {selectedRequest.email}</p>
            <p><strong>Title:</strong> {selectedRequest.title}</p>
            <p className="mt-2 mb-4"><strong>Description:</strong> {selectedRequest.description}</p>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => handleStatusUpdate(selectedRequest.id, "Accepted")}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Accept
              </button>
              <button
                onClick={() => handleStatusUpdate(selectedRequest.id, "Rejected")}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Reject
              </button>
            </div>

            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
