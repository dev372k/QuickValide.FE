import { useState } from "react";
const Content = () => {
    const [content, setContent] = useState("From Concept to Feedback: Build Landing Pages in No Time.")
    const handleContent = (event) => {
        setContent(event.target.innerText);
        console.log(content)
    }
    return (
        <div className="my-3 text-6xl text-center py-10 w-full" id="waitlist">
            <div style={{ direction: 'ltr !important' }} className="w-1/2 mx-auto py-10 font-bold" contentEditable="true" onInput={handleContent}>
                {content}
            </div>
        </div>
    )
}

export default Content;