import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitRegistration } from "../api/register";

export default function TeamRegistrationForm() {
  const [teamSize, setTeamSize] = useState(2);
  const DEADLINE = new Date("2026-05-01T12:00:00+05:30").getTime();
  const isClosed = Date.now() > DEADLINE;

  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    yearDept: "",
    studentId: "",
    email: "",
    phone: "",
    members: [
      { name: "", yearDept: "", studentId: "", email: "", phone: "" },
      { name: "", yearDept: "", studentId: "", email: "", phone: "" },
      { name: "", yearDept: "", studentId: "", email: "", phone: "" },
    ],
  });

  const handleLeaderChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index][e.target.name] = e.target.value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isClosed) {
      alert("Registration Closed! The deadline has passed.");
      return;
    }

    setIsSubmitting(true);
    try {
      const finalData = {
        ...formData,
        teamSize: teamSize,
        members: formData.members.slice(0, teamSize),
      };

      await submitRegistration(finalData);

      alert("Registration Successful ✅");
      
      // Reset Form Data
      setFormData({
        teamName: "",
        leaderName: "",
        yearDept: "",
        studentId: "",
        email: "",
        phone: "",
        members: [
          { name: "", yearDept: "", studentId: "", email: "", phone: "" },
          { name: "", yearDept: "", studentId: "", email: "", phone: "" },
          { name: "", yearDept: "", studentId: "", email: "", phone: "" },
        ],
      });
      setTeamSize(2);
    } catch (error) {
      alert("Registration failed ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle =
    "w-full p-3 bg-white/5 backdrop-blur-sm border border-primary/30 rounded-sm text-white focus:outline-none focus:border-primary transition-colors font-light placeholder-gray-500";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 bg-white/5 backdrop-blur-md border border-primary/20 rounded-lg shadow-[0_0_30px_rgba(0,245,255,0.1)] relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[80px] pointer-events-none" />

      <h2 className="text-2xl font-orbitron font-bold text-primary mb-8 tracking-widest border-b border-primary/20 pb-4">
        TEAM REGISTRATION
      </h2>

      {/* Team Leader Details */}
      <div className="mb-10">
        <h3 className="text-sm font-semibold tracking-widest text-gray-300 mb-4 uppercase">Team Leader Profile</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input className={inputStyle} name="teamName" placeholder="Team Name" onChange={handleLeaderChange} required />
          <input className={inputStyle} name="leaderName" placeholder="Name" onChange={handleLeaderChange} required />
          <input className={inputStyle} name="yearDept" placeholder="Year & Department" onChange={handleLeaderChange} required />
          <input className={inputStyle} name="studentId" placeholder="Student ID" onChange={handleLeaderChange} required />
          <input type="email" className={inputStyle} name="email" placeholder="Email" onChange={handleLeaderChange} required />
          <input type="tel" className={inputStyle} name="phone" placeholder="Phone" onChange={handleLeaderChange} required />
        </div>
      </div>

      {/* Team Size */}
      <div className="mb-8">
        <label className="text-sm font-semibold tracking-widest text-gray-300 mb-2 uppercase block">Team Member Size </label>
        <div className="relative">
          <select
            className={`${inputStyle} appearance-none cursor-pointer`}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
          >
            <option value={2} className="bg-background text-white">2 Members</option>
            <option value={3} className="bg-background text-white">3 Members</option>
          </select>
        </div>
      </div>

      {/* Team Members */}
      <AnimatePresence>
        {[...Array(teamSize)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="mb-8 p-6 border border-white/10 rounded-lg bg-black/20 overflow-hidden"
          >
            <h3 className="text-sm font-semibold tracking-widest text-primary mb-4 uppercase">
              Team Member {index + 1}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input className={inputStyle} name="name" placeholder="Name" value={formData.members[index].name} onChange={(e) => handleMemberChange(index, e)} required />
              <input className={inputStyle} name="yearDept" placeholder="Year & Department" value={formData.members[index].yearDept} onChange={(e) => handleMemberChange(index, e)} required />
              <input className={inputStyle} name="studentId" placeholder="Student ID" value={formData.members[index].studentId} onChange={(e) => handleMemberChange(index, e)} required />
              <input type="email" className={inputStyle} name="email" placeholder="Email" value={formData.members[index].email} onChange={(e) => handleMemberChange(index, e)} required />
              <input type="tel" className={inputStyle} name="phone" placeholder="Phone" value={formData.members[index].phone} onChange={(e) => handleMemberChange(index, e)} required />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {isClosed ? (
        <div className="w-full mt-8 px-8 py-4 bg-red-500/10 border border-red-500/50 text-red-500 font-orbitron font-bold tracking-widest uppercase text-center rounded-md shadow-[0_0_15px_rgba(255,0,0,0.3)]">
          Registration Closed
        </div>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-8 group relative px-8 py-4 bg-transparent font-orbitron font-bold tracking-widest uppercase overflow-hidden ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="absolute inset-0 w-full h-full border-2 border-primary group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.5)]" />
          <div className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out" />
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]">
            {isSubmitting ? "INITIALIZING..." : "INITIALIZE UPLINK"}
          </span>
        </button>
      )}
    </motion.form>
  );
}
