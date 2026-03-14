import { useState } from "react";   //  ผมเพิ่ม เครื่องมือจาก รีแอคมาใช้ครับ มันมาจากกลุ่มบริษัทในเคลือเฟสบุค ก่อตั้งขึ้นประมาณปี 2013

function PostCard({ title, body }) {

  const [likes, setLikes] = useState(0);   //  อันนี้คือผมสร้างสเตต จากตัวแปลสองอย่างครับ ตัวนึงเก็บค่าปัจจุบัน อีกตัว ใช้เปลี่ยนค่าเวลากดเพิ่ม

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem", color: "#1e40af" }}>{title}</h3>
      <p style={{ margin: 0, color: "#4a5568", lineHeight: 1.6 }}>{body}</p>

      {/*  เพิ่มปุ่ม Like เวลากดเซ็ตไลค์ผมมันจะ +1 ไลค์เพิ่มไปอีกครับ*/}
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          marginTop: "0.8rem",
          padding: "5px 10px",
          borderRadius: "6px",
          border: "none",
          background: "#1e40af",
          color: "white",
          cursor: "pointer",
        }}
      >
        👍 Like ({likes})
      </button>

    </div>
  );
}

export default PostCard;