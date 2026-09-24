import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#043f45] text-white mt-20">
      <div className="max-w-[1400px] mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/logo.png" className="w-48 rounded-xl mb-5" />
          <p className="text-white/70 leading-7">
            Healing Beyond Borders. Coordinated medical support for patients,
            families and international visitors.
          </p>
        </div>
        <Col
          t="Quick Links"
          a={[
            "Our Doctors",
            "Specialities",
            "Services",
            "Health Library",
            "Contact Us",
          ]}
        />
        <Col
          t="Patient Resources"
          a={["Treatments", "Technologies", "Blogs", "Videos", "Case Studies"]}
        />
        <div>
          <h3 className="text-[#e4bc62] font-bold text-lg mb-5">Contact</h3>
          <p className="flex gap-3 mb-4">
            <Phone size={19} /> +91 00000 00000
          </p>
          <p className="flex gap-3 mb-4">
            <Mail size={19} /> care@akesoglobal.com
          </p>
          <p className="flex gap-3">
            <MapPin size={20} /> Hyderabad, Telangana, India
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-white/55 py-5 text-sm">
        © 2026 Akeso Global Medical Services. All rights reserved.
      </div>
    </footer>
  );
}
function Col({ t, a }) {
  return (
    <div>
      <h3 className="text-[#e4bc62] font-bold text-lg mb-5">{t}</h3>
      {a.map((x) => (
        <Link
          key={x}
          to={"/" + x.toLowerCase().replaceAll(" ", "-")}
          className="block text-white/75 hover:text-white mb-3"
        >
          {x}
        </Link>
      ))}
    </div>
  );
}
