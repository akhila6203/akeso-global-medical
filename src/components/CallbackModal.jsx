import { X } from "lucide-react";
export default function CallbackModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/55 grid place-items-center p-4"
      onMouseDown={onClose}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-3xl bg-white p-6 md:p-8 shadow-premium relative"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg bg-[#edf5f4] p-2"
        >
          <X size={18} />
        </button>
        <div className="mb-7">
          <p className="text-[#c58b20] font-semibold text-sm">AKESO CARE</p>
          <h2 className="text-2xl font-bold text-[#073f46]">
            Request Call Back
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Frontend demo: request submitted successfully.");
            onClose();
          }}
          className="space-y-5"
        >
          {[
            ["Name *", "Enter Your Name", "text"],
            ["Mobile Number *", "Enter Your Mobile Number", "tel"],
            ["Email", "Enter Your Email", "email"],
          ].map(([l, p, t]) => (
            <label className="block" key={l}>
              <span className="font-semibold text-slate-700">{l}</span>
              <input
                required={l.includes("*")}
                type={t}
                placeholder={p}
                className="mt-2 w-full border-b border-slate-300 px-1 py-3 outline-none focus:border-[#c58b20]"
              />
            </label>
          ))}
          <button className="w-full rounded-full bg-[#075b60] hover:bg-[#003f46] text-white font-bold py-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
