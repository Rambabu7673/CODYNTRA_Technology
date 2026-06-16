import React, { useState } from "react";
import update from "../../api/updateApi";

const CreateJob = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    jobName: "",
    jobDescription: "",
    jobLocation: "",
    jobType: "",
    jobSalary: "",
    jobDuration: "",
  });

  const changeHandle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createJobHandle = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await update.post("/user/updateJob", form);

      alert(res.data.message);

      setForm({
        jobName: "",
        jobDescription: "",
        jobLocation: "",
        jobType: "",
        jobSalary: "",
        jobDuration: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to create job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-5">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 blur-[150px] animate-pulse"></div>

      <div className="relative w-full max-w-5xl">
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(255,106,0,0.15)]">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-black text-white">
              Create
              <span className="text-orange-500"> Job</span>
            </h1>

            <p className="text-zinc-400 mt-3">
              Publish new opportunities on CODYNTRA
            </p>
          </div>

          <form
            onSubmit={createJobHandle}
            className="grid md:grid-cols-2 gap-5"
          >
            <input
              type="text"
              name="jobName"
              placeholder="Job Name"
              value={form.jobName}
              onChange={changeHandle}
              required
              className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />

            <input
              type="text"
              name="jobLocation"
              placeholder="Job Location"
              value={form.jobLocation}
              onChange={changeHandle}
              required
              className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />

            <select
              name="jobType"
              value={form.jobType}
              onChange={changeHandle}
              required
              className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:border-orange-500 outline-none"
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
              <option value="Contract">Contract</option>
            </select>

            <input
              type="number"
              name="jobSalary"
              placeholder="Salary"
              value={form.jobSalary}
              onChange={changeHandle}
              required
              className="bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />

            <input
              type="text"
              name="jobDuration"
              placeholder="Duration (Optional)"
              value={form.jobDuration}
              onChange={changeHandle}
              className="md:col-span-2 bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />

            <textarea
              rows="6"
              name="jobDescription"
              placeholder="Write job description..."
              value={form.jobDescription}
              onChange={changeHandle}
              required
              className="md:col-span-2 bg-zinc-800 border border-zinc-700 text-white p-4 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,106,0,0.4)]"
            >
              {loading ? "Creating..." : "Create Job"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
