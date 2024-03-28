"use client";


export default function Button() {
  return (
    <button
      className="btn btn-outline-success"
      onClick={() => {
        console.log("logout");
      }}
    >
      LogOut
    </button>
  );
}
