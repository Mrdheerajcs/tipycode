import { useEffect, useState } from "react";
import axios from "axios";
import { API_HOST } from "../../ApiConfig/ApiConfig";
import Popup from "../componrnts/Popup";
import {FaEdit , FaSearch, FaTrash  } from "react-icons/fa";


const Education = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    boardName: "",
    degree: "",
    institutionName: "",
    startYear: "",
    endYear: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("authToken");
  const portfolioId = localStorage.getItem("portfolio");
  const [educationData, setEducationData] = useState([]);
  const [deleteId, setDeleteId] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);

  useEffect(() => {
    fetchUserPortfolio();
    fetchEducation();
  }, []);

  const fetchUserPortfolio = async () => {
    try {
      const response = await axios.get(`${API_HOST}/portfolio/getByuser/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
      }
    } catch (error) {
      console.error("Error fetching user details:", error.response || error);
    }
  };

  const fetchEducation = async () => {
    try {
      const response = await axios.get(`${API_HOST}/educations/getByPortfolio/${portfolioId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setEducationData(response.data?.response || []);
      }
    } catch (error) {
      console.error("Error fetching education details:", error.response || error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEducation = async (method, url) => {
    if (!formData.boardName || !formData.institutionName) {
      return alert("Please fill in all required fields.");
    }

    try {
      const educationPayload = {
        ...formData,
        user: userId,
        portfolio: portfolioId,
        status: true,
      };

      const response = await axios({
        method,
        url,
        data: educationPayload,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        showPopup("Education saved successfully!", "success");
        fetchEducation();
        resetForm();
      }
    } catch (error) {
      console.error(`Error ${method === "post" ? "adding" : "updating"} education:`, error.response || error);
      showPopup(`Failed to saving Education.`, "error");

    }
  };

  const handleAddEducation = () => {
    saveEducation("post", `${API_HOST}/educations/create`);
  };

  const handleSaveEdit = () => {
    if (!editingId) return;
    saveEducation("put", `${API_HOST}/educations/updateById/${editingId}`);
  };

  const handleEdit = (edu) => {
    setFormData(edu);
    setEditingId(edu.id);
  };

  const handleDelete = (edu) => {
    setDeleteId(edu);
    setDeleteModal(true);
  };

  const confirmHandleDelete = async () => {
    try {
      const response = await axios.delete(`${API_HOST}/educations/deleteById/${deleteId.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        setEducationData((prev) => prev.filter((edu) => edu.id !== deleteId.id));
        showPopup("Education Deleting successfully!", "success");
        setDeleteId(null);
        setDeleteModal(false);
      }
    } catch (error) {
      console.error("Error deleting education:", error.response || error);
      showPopup(`Failed to Deleting Education.`, "error");
    }
  };

  const resetForm = () => {
    setFormData({
      boardName: "",
      degree: "",
      institutionName: "",
      startYear: "",
      endYear: "",
      description: "",
    });
    setEditingId(null);
  };

  const showPopup = (message, type = "info") => {
    setPopupMessage({ message, type });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const filteredEducations = educationData.filter((education) => {
    return Object.values(education)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const totalItems = filteredEducations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedEducations = filteredEducations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-3">
      <h2 className="text-xl font-bold">Education</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {popupMessage && (
          <Popup
            message={popupMessage.message}
            type={popupMessage.type}
            onClose={() => setPopupMessage(null)}
          />
        )}

        <div className="mb-4 bg-slate-100 p-4 rounded-lg">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
            {[
              { label: "University/Board", name: "boardName" },
              { label: "Institute", name: "institutionName" },
              { label: "Course", name: "degree" },
              { label: "Start Year", name: "startYear" },
              { label: "End Year", name: "endYear" },
              { label: "Description", name: "description" },
            ].map(({ label, name }) => (
              <label key={name} className="block text-md font-medium text-gray-700">
                {label} <strong className="text-red-700">*</strong>
                <input
                  type="text"
                  placeholder={`Enter ${label}`}
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            ))}
          </div>
          <div className="mt-3 flex justify-start">
            {editingId === null ? (
              <button onClick={handleAddEducation} className="bg-blue-900 text-white rounded-2xl p-2 text-sm">
                Add Education
              </button>
            ) : (
              <button onClick={handleSaveEdit} className="bg-blue-900 text-white rounded-2xl p-2 text-sm">
                Update Education
              </button>
            )}
          </div>
        </div>

        <div className="mb-4 bg-slate-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center bg-blue-500 rounded-lg">
            <label htmlFor="itemsPerPage" className="mr-2 ml-2 text-white text-sm">Show:</label>
            <select
              id="itemsPerPage"
              className="border rounded-r-lg p-1.5 outline-none"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              {[5, 10, 15, 20].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search Education"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded-lg pl-10 outline-none"
            />
            <FaSearch className="absolute top-3 left-2 h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="overflow-x-auto md:overflow-y-auto">
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                {["University", "Institution", "Course", "Start", "Completed", "Description", "Edit", "Delete"].map((head) => (
                  <th key={head} className="p-2 border">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedEducations.map((edu) => (
                <tr key={edu.id}>
                  {["boardName", "institutionName", "degree", "startYear", "endYear", "description"].map((key) => (
                    <td key={key} className="p-2 border">{edu[key]}</td>
                  ))}
                  <td className="p-2 border">
                    <button className="flex bg-yellow-500 px-2 py-1 text-white mr-2 rounded-md" onClick={() => handleEdit(edu)}><FaEdit className=" mr-1 mt-1"/>Edit</button>
                  </td>
                  <td className="p-2 border">
                    <button className="flex bg-red-500 px-2 py-1 text-white rounded-md" onClick={() => handleDelete(edu)}><FaTrash className=" mr-1 mt-1"/>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      {deleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Confirm Delete Education
            </h2>
            <p>
              Are you sure! you want to Delete {" "}
              <strong>{deleteId?.degree}</strong> from<strong> {deleteId?.boardName}</strong>?
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setDeleteModal(false)}
                className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={confirmHandleDelete}
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
