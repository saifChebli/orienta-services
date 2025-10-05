import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";
import toast from "react-hot-toast";
import api from "../api";
import axios from 'axios'
export default function Consultation() {

    useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    address: "",
    jobDomain: "",
    experience: "",
    destination: "",
    jobType: "",
    reason: "",
    extra: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/consultations/add-consultation", form);
      if (response.status === 201) {
        toast.success("Demande envoyée avec succès!");
        setForm({
          fullName: "",
          phone: "",
          whatsapp: "",
          address: "",
          jobDomain: "",
          experience: "",
          destination: "",
          jobType: "",
          reason: "",
          extra: "",
          consent: false,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite.");
    }
  };

  return (
    <div  translate='no' className="min-h-screen font-kufam bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <TopBar />
      <div className="flex flex-col items-center space-y-4 justify-center">
        <HeaderHero />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div>
            {/* Lead Form */}
            <section className="bg-white rounded-2xl shadow-xl/40 max-w-4xl mx-auto shadow-slate-200 p-6 sm:p-8 border border-slate-100">
              <form onSubmit={handleSubmit} className="mt-6 gap-4">
                <Field labelFR="Nom complet" labelAR="الاسم الكامل" required>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ex: Ahmed Ben Ali"
                  />
                </Field>

                <Field labelFR="Téléphone" labelAR="الهاتف" required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ex: +216 20 000 000"
                  />
                </Field>

                <Field labelFR="WhatsApp" labelAR="واتساب" required>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ex: +216 20 000 000"
                  />
                </Field>

                <Field labelFR="Adresse" labelAR="العنوان" required>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ville, Région"
                  />
                </Field>

                <Field
                  labelFR="Emploi / Domaine actuel"
                  labelAR="عملك / مجالك الحالي"
                  required
                >
                  <input
                    type="text"
                    name="jobDomain"
                    value={form.jobDomain}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ex: Infirmier / BTP / Informatique"
                  />
                </Field>

                <Field labelFR="Années d'expérience" labelAR="سنوات الخبرة" required>
                  <select
                    name="experience"
                    value={form.experience}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                  >
                    <option value="">Choisir…</option>
                    <option>0-1</option>
                    <option>1-3</option>
                    <option>3-5</option>
                    <option>5-10</option>
                    <option>10+</option>
                  </select>
                </Field>

                <Field
                  labelFR="Pays de destination"
                  labelAR="البلد المراد الهجرة إليه"
                  required
                >
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ex: Canada, Allemagne, France…"
                  />
                </Field>

                <Field
                  labelFR="Type de travail souhaité"
                  labelAR="نوع الوظيفة المرغوبة"
                  required
                >
                  <input
                    type="text"
                    name="jobType"
                    value={form.jobType}
                    required
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                    placeholder="Ex: CDI, CDD, Contrat d'étude…"
                  />
                </Field>

                <Field
                  className="sm:col-span-2"
                  labelFR="Pourquoi travailler à l'étranger ?"
                  labelAR="لماذا تريد العمل في الخارج؟"
                  required
                >
                  <textarea
                    name="reason"
                    value={form.reason}
                    required
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40 resize-none"
                    placeholder="Votre motivation – سبب رغبتك"
                  />
                </Field>

                <Field
                  className="sm:col-span-2"
                  labelFR="Informations complémentaires"
                  labelAR="معلومات إضافية"
                  required
                >
                  <textarea
                    name="extra"
                    value={form.extra}
                    required
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-xl border border-[#1D4ED8] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400/40 resize-none"
                    placeholder="Détails utiles – تفاصيل إضافية"
                  />
                </Field>

                <div className="sm:col-span-2 my-4 flex items-center gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded-md border-[#1D4ED8]"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-slate-700">
                    J'accepte d'envoyer mes informations <span className="text-rose-600">*</span>
                  </label>
                </div>

                <div className="sm:col-span-2 my-4 pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#1D4ED8] px-5 py-3 text-white text-base font-semibold shadow-lg shadow-slate-900/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400/40"
                  >
                    Réservez votre consultation gratuite
                  </button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[#1D4ED8] h-[80px] text-white  border-b border-slate-100 sticky top-0 z-40">
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 h-full">
          <Link to="/" className="flex items-center gap-2">
            <span>
              <img src={logo} alt="" width={120} />
            </span>
          </Link>

          <nav className=" items-center gap-6 text-lg">
            <Link to="/">Accueil</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <header className=" px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
      <div className=" flex flex-col justify-center items-center max-w-4xl mx-auto rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-lg/40 shadow-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Stars */}
          <div
            className="flex items-center gap-1 text-amber-500 text-2xl"
            aria-label="5 stars"
          >
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 sm:gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl text-[#1D4ED8] font-extrabold tracking-tight leading-tight">
              نكلموك في اقل من 24 ساعة
            </h1>
            <p className="mt-3 text-slate-600 max-w-prose text-center">
              Remplissez le formulaire et notre équipe vous contactera
              rapidement pour évaluer votre profil, vos objectifs, et la
              meilleure voie pour travailler à l'étranger.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Field({ labelFR, labelAR, required, className, children }) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="block text-lg my-8 font-medium text-slate-700">
        {labelFR} - {labelAR}{" "}
        {required && <span className="text-rose-600">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
