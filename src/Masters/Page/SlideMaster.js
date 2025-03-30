import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_HOST } from "../../ApiConfig/ApiConfig";
import Popup from "../components/Popup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

const SlideMaster = () => {
  const [formData, setFormData] = useState({
    firstHeadTextOne: "",
    firstHeadTextTwo: "",
    secondTextOne: "",
    secondTextTwo: "",
    yearsOfExceptional: "",
    experiencedTeam: "",
    clientAcross: "",
  });
  const [masterHomeData, setMasterHomeData] = useState([]);
  const [editingId, setEditingId] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const firstHeadTextOne = useRef(null);
  const firstHeadTextTwo = useRef(null);
  const secondTextOne = useRef(null);
  const secondTextTwo = useRef(null);
  const editorRef = useRef(null);
  const token = localStorage.getItem("authToken");


  const handleEditorChange = (field) => (event, editor) => {
    const data = editor.getData();
    setFormData((prev) => ({
      ...prev,
      [field]: data,
    }));
  };

  const showPopup = (message, type = "info") => {
    setPopupMessage({ message, type });
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };


  useEffect(() => {
    fetchMasterHomePage();
  }, []);


  const fetchMasterHomePage = async () => {
    try {
      const response = await axios.get(`${API_HOST}/home/getHomeMaster`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const responseData = response.data?.response || [];
        setMasterHomeData(responseData);

        if (responseData !== null && responseData.length > 0) {
          setEditingId(true);
        } else {
          setEditingId(false);
        }
      }
    } catch (error) {
      console.error("Error fetching Experience details:", error.response || error);
    }
  };

  const handleSaveOrUpdate = async () => {
    try {
      const payload = {
        ...formData,
        id: editingId ? masterHomeData[0]?.id : null,
      };

      const response = await axios.post(`${API_HOST}/home/getHomeMaster/save`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        showPopup(editingId ? "Updated successfully!" : "Saved successfully!", "success");
        fetchMasterHomePage();
      }
    } catch (error) {
      console.error("Error saving/updating data:", error.response || error);
      showPopup("Error occurred. Please try again!", "error");
    }
  };



  const stripHtml = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (/^\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


console.log("my data",formData);



  return (
    <div className="p-3">
      <h2 className="text-xl font-bold mb-4">Slide Master</h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {popupMessage && (
          <Popup message={popupMessage.message} type={popupMessage.type} onClose={() => setPopupMessage(null)} />
        )}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-100 rounded-lg mb-4">
          {[
            { label: "First Head Text One", ref: firstHeadTextOne, field: "firstHeadTextOne" },
            { label: "First Head Text Two", ref: firstHeadTextTwo, field: "firstHeadTextTwo" },
            { label: "Second Text One", ref: secondTextOne, field: "secondTextOne" },
            { label: "Second Text Two", ref: secondTextTwo, field: "secondTextTwo" },
          ].map(({ label, ref, field }) => (
            <div key={field} className="form-group col-md-12">
              <label>{label} Description</label>
              <div className="border border-black rounded p-1" ref={ref}></div>
              <CKEditor
                editor={DecoupledEditor}
                data={formData[field]}
                config={{
                  toolbar: { shouldNotGroupWhenFull: true },
                  alignment: {
                    options: ["left", "center", "right", "justify"],
                  },
                  table: {
                    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "tableProperties", "tableCellProperties"],
                  },
                }}
                onReady={(editor) => {
                  editorRef.current = editor;
                  const toolbarContainer = ref.current;
                  toolbarContainer.innerHTML = "";
                  toolbarContainer.appendChild(editor.ui.view.toolbar.element);

                  editor.editing.view.change((writer) => {
                    const root = editor.editing.view.document.getRoot();
                    writer.setStyle("min-height", "100px", root);
                    writer.setStyle("border", "1px solid black", root);
                    writer.setStyle("padding", "10px", root);
                  });

                }}
                onChange={handleEditorChange(field)}
              />
            </div>
          ))}


          {[
            { label: "Years Of Exceptional Services", field: "yearsOfExceptional" },
            { label: "Experienced Team Members", field: "experiencedTeam" },
            { label: "Client Across Sectors", field: "clientAcross" },
          ].map(({ label, field }) => (
            <div key={field} className="form-group col-md-12">
              <label>{label}
                <input
                  type="text"
                  placeholder={`Enter ${label}`}
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>

            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={handleSaveOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {editingId ? "Update Data" : "Add Data"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default SlideMaster;
