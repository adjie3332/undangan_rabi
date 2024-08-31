import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const API_URL = "https://api.ulems.my.id/api/comment";

const Greetings = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    presence: "0",
    comment: "",
  });
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ next: 1, prev: null });

  useEffect(() => {
    // Fetch initial comments
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}?per=10&next=${pagination.next}`
        );
        setComments(response.data);
        setPagination((prev) => ({
          ...prev,
          prev: response.data.prevPage,
          next: response.data.nextPage,
        }));
      } catch (error) {
        console.error("Failed to fetch comments", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [pagination.next]);

  const handleCommentChange = (e) => {
    const { id, value } = e.target;
    setNewComment((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendComment = async () => {
    if (!newComment.name) {
      alert("Please fill name");
      return;
    }

    if (newComment.presence === "0") {
      alert("Please select presence");
      return;
    }

    try {
      const response = await axios.post(API_URL, newComment, {
        headers: {
          "Content-Type": "application/json",
          // Uncomment and set your token if required
          // 'Authorization': `Bearer ${session.getToken()}`
        },
      });
      if (response.status === 201) {
        setComments((prev) => [response.data, ...prev]);
        setNewComment({ name: "", presence: "0", comment: "" });
      }
    } catch (error) {
      console.error("Failed to post comment", error);
      alert("Failed to send comment. Please try again.");
    }
  };

  const handlePageChange = async (direction) => {
    setLoading(true);
    try {
      const nextPage = direction === "next" ? pagination.next : pagination.prev;
      if (!nextPage) return;

      const response = await axios.get(`${API_URL}?per=10&next=${nextPage}`);
      setComments(response.data);
      setPagination((prev) => ({
        ...prev,
        prev: response.data.prevPage,
        next: response.data.nextPage,
      }));
    } catch (error) {
      console.error("Failed to fetch comments", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="p-4">
          <div className="text-center">
            <h2
              className="font-esthetic mt-0 mb-3"
              style={{ fontSize: "3rem" }}
            >
              Love Gift
            </h2>
            <p className="mb-3" style={{ fontSize: "0.9rem" }}>
              Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan
              tanda kasih untuk kami, dapat melalui:
            </p>
            {/* Content omitted for brevity */}
          </div>
        </div>
      </div>

      <section className="m-0 px-0 pb-0 pt-2" id="comment">
        <div className="container">
          <div className="card-body border rounded-4 shadow p-3">
            <h2
              className="font-esthetic text-center mb-3"
              style={{ fontSize: "3rem" }}
            >
              Ucapan &amp; Doa
            </h2>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control shadow-sm rounded-4"
                id="name"
                value={newComment.name}
                onChange={handleCommentChange}
                placeholder="Isikan Nama Anda"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="presence" className="form-label">
                Presensi
              </label>
              <select
                className="form-select shadow-sm rounded-4"
                id="presence"
                value={newComment.presence}
                onChange={handleCommentChange}
              >
                <option value="0">Konfirmasi Presensi</option>
                <option value="1">Datang</option>
                <option value="2">Berhalangan</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Ucapan &amp; Doa
              </label>
              <textarea
                className="form-control shadow-sm rounded-4"
                id="comment"
                rows="4"
                value={newComment.comment}
                onChange={handleCommentChange}
                placeholder="Tulis Ucapan dan Doa"
              ></textarea>
            </div>

            <div className="d-grid">
              <button
                className="btn btn-primary btn-sm rounded-4 shadow m-1"
                onClick={handleSendComment}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="me-1" />
                Send
              </button>
            </div>
          </div>

          <div className="my-3 pt-3" id="comments">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              comments.map((comment) => (
                <div key={comment.uuid} className="comment">
                  {/* Render each comment here */}
                  <p>
                    {comment.name}: {comment.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <nav className="d-flex justify-content-center mb-0 pt-2">
            <ul className="pagination mb-0">
              <li className={`page-item ${!pagination.prev ? "disabled" : ""}`}>
                <button
                  className="page-link rounded-start-4"
                  onClick={() => handlePageChange("prev")}
                  disabled={!pagination.prev}
                >
                  <FontAwesomeIcon icon={faCircleLeft} className="me-1" />
                  Prev
                </button>
              </li>
              <li className="page-item disabled">
                <span className="page-link text-light">1</span>
              </li>
              <li className={`page-item ${!pagination.next ? "disabled" : ""}`}>
                <button
                  className="page-link rounded-end-4"
                  onClick={() => handlePageChange("next")}
                  disabled={!pagination.next}
                >
                  Next
                  <FontAwesomeIcon icon={faCircleRight} className="ms-1" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <Navbar />
    </>
  );
};

export default Greetings;
