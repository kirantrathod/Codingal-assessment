import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

export const EndClassModal = (props) => {
  // close the modal when clicking outside the modal.
  const { setShowModal } = props;
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      props.setShowModal(false);
    }
  };
  //Initial Reason starts here
  const [initialReason, setInitialReason] = useState("Class completed");
  const handleInitialReasonChange = (e) => {
    setInitialReason(e.target.value);
  };
  //Initial Reason ends here
  //Secondary Reason starts here
  const [secondaryReason, setSecondaryReason] = useState(
    "Student didn't show up for the class."
  );
  const handleSecondaryReasonChange = (e) => {
    setSecondaryReason(e.target.value);
  };
  //Secondary Reason ends here
  const [textAreaReason, setTextAreaReason] = useState("");
  const handleTextArea = (e) => {
    setTextAreaReason(`and ${e.target.value}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal();
  };

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <AiOutlineClose
          className="close-btn"
          onClick={() => setShowModal(false)}
        ></AiOutlineClose>
        <div className="modal-container">
          <div className="checkbox-response-container">
            <form onSubmit={handleSubmit}>
              <h2>Select a reason to end class</h2>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="Class completed"
                      checked={initialReason === "Class completed"}
                      onChange={handleInitialReasonChange}
                    />
                    Class completed
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      type="radio"
                      value="Class interrupted/aborted"
                      checked={initialReason === "Class interrupted/aborted"}
                      onChange={handleInitialReasonChange}
                    />
                    Class interrupted/aborted
                  </label>
                  {initialReason === "Class interrupted/aborted" ? (
                    <ul className="secondary-reason-list">
                      <li>
                        <label>
                          <input
                            type="radio"
                            value="Student didn't show up for the class."
                            checked={
                              secondaryReason ===
                              "Student didn't show up for the class."
                            }
                            onChange={handleSecondaryReasonChange}
                          />
                          Student didn't show up for the class.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            value="Student didn't show intrest."
                            checked={
                              secondaryReason === "Student didn't show intrest."
                            }
                            onChange={handleSecondaryReasonChange}
                          />
                          Student didn't show intrest.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            value="Student got disconnected."
                            checked={
                              secondaryReason === "Student got disconnected."
                            }
                            onChange={handleSecondaryReasonChange}
                          />
                          Student got disconnected.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            value="I got disconnected."
                            checked={secondaryReason === "I got disconnected."}
                            onChange={handleSecondaryReasonChange}
                          />
                          I got disconnected.
                        </label>
                      </li>
                      <li>
                        <label>
                          <input
                            type="radio"
                            value="Other reason."
                            checked={secondaryReason === "Other reason."}
                            onChange={handleSecondaryReasonChange}
                          />
                          Other reason.
                        </label>
                        {secondaryReason === "Other reason." ? (
                          <textarea
                            name="other reason body"
                            placeholder="Type here"
                            onChange={handleTextArea}
                          />
                        ) : null}
                      </li>
                    </ul>
                  ) : null}
                </li>
              </ul>
              <div className="buttons">
                <button className="btn end-class-btn" type="submit">
                  End Class
                </button>
                <button
                  className="btn"
                  type="cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
