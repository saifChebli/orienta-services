import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";

export default function Dossier() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    studyLevel: "",
    jobDomain: "",
    destination: "",
    language: "",
    cv: null,
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead submitted", form);
    alert(
      "Merci ! Nous vous contacterons en moins de 24h.\nشكراً! سنتواصل معك في أقل من 24 ساعة."
    );
  };

  return (
    <div className="min-h-screen font-kufam bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <TopBar />
      <div className="flex flex-col items-center space-y-4 justify-center">
        <HeaderHero />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div>
            <section className="bg-white rounded-2xl shadow-xl/40 max-w-4xl mx-auto shadow-slate-200 p-6 sm:p-8 border border-slate-100">
              <form onSubmit={handleSubmit} className="mt-6 gap-4">
                
                <Field labelFR="Nom complet" labelAR="الاسم الكامل" required>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Ahmed Ben Ali"
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  />
                </Field>

                <Field labelFR="Téléphone" labelAR="الهاتف" required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ex: +216 20 000 000"
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  />
                </Field>

                <Field labelFR="Adresse e-mail" labelAR="البريد الإلكتروني" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Ex: exemple@email.com"
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  />
                </Field>

                <Field labelFR="Niveau d'étude" labelAR="المستوى الدراسي" required>
                  <select
                    name="studyLevel"
                    value={form.studyLevel}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  >
                    <option value="">Choisir…</option>
                    <option>Secondaire</option>
                    <option>Licence</option>
                    <option>Master</option>
                    <option>Doctorat</option>
                    <option>Autre</option>
                  </select>
                </Field>

                <Field labelFR="Domaine professionnel" labelAR="المجال المهني" required>
                  <input
                    type="text"
                    name="jobDomain"
                    value={form.jobDomain}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Informatique, Santé, BTP…"
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  />
                </Field>

                <Field labelFR="Pays souhaité" labelAR="البلد المرغوب" required>
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Canada, Allemagne, France…"
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  />
                </Field>

                <Field labelFR="Langue souhaitée" labelAR="اللغة المرغوبة" required>
                  <select
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  >
                    <option value="">Choisir…</option>
                    <option>Français</option>
                    <option>Anglais</option>
                    <option>Allemand</option>
                    <option>Autre</option>
                  </select>
                </Field>

                <Field labelFR="Votre CV" labelAR="السيرة الذاتية" required>
                  <input
                    type="file"
                    name="cv"
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                  />
                </Field>

                <Field
                  className="sm:col-span-2"
                  labelFR="Message"
                  labelAR="الرسالة"
                  required
                >
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    required
                    placeholder="Expliquez votre demande…"
                    className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2 resize-none"
                  />
                </Field>

                <div className="sm:col-span-2 my-4 flex items-center gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    className="h-5 w-5 rounded-md border-[#1D4ED8]"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-slate-700">
                    J'accepte d'envoyer mes informations{" "}
                    <span className="text-rose-600">*</span>
                  </label>
                </div>

                <div className="sm:col-span-2 my-4 pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#1D4ED8] px-5 py-3 text-white font-semibold shadow-lg"
                  >
                    Envoyer ma demande
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
    <div className="bg-[#1D4ED8] h-[80px] text-white sticky top-0 z-40">
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={120} />
          </a>
          <nav>
            <Link to="/">Accueil</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <header className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto rounded-3xl p-6 sm:p-10">
        <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl text-[#1D4ED8] font-extrabold">
         Inscription
        </h1>
        <p className="mt-3 text-slate-600 max-w-prose text-center">
          Remplissez le formulaire et notre équipe vous contactera rapidement
          pour évaluer votre profil et trouver la meilleure opportunité.
        </p>
      </div>
    </header>
  );
}

function Field({ labelFR, labelAR, required, className, children }) {
  return (
    <label className={`block my-6 ${className || ""}`}>
      <span className="block text-lg font-medium text-slate-700">
        {labelFR} - {labelAR}{" "}
        {required && <span className="text-rose-600">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
