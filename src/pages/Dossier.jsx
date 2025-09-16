import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";
import axios from "axios";
import toast from "react-hot-toast";

export default function Dossier() {
  const [form, setForm] = useState({
    dossierNumber: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    jobType: "",
    hasCV: "",
    cvFile: null,
    experiences: "",
    exp1: "",
    exp2: "",
    exp3: "",
    attestationsTravail: null,
    languages: "",
    diplomas: "",
    diplomasFiles: null,
    stages: "",
    attestationsStage: null,
    associations: "",
    skills: "",
    remarks: "",
    paymentReceipt: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const res = await axios.post(
        "http://localhost:5000/api/dossiers/add-candidate",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Merci ! Votre dossier a été envoyé avec succès.");
      setForm({
        dossierNumber: "",
        fullName: "",
        email: "",
        phone: "",
        address: "",
        birthDate: "",
        jobType: "",
        hasCV: "",
        cvFile: null,
        experiences: "",
        exp1: "",
        exp2: "",
        exp3: "",
        attestationsTravail: null,
        languages: "",
        diplomas: "",
        diplomasFiles: null,
        stages: "",
        attestationsStage: null,
        associations: "",
        skills: "",
        remarks: "",
        paymentReceipt: null,
      });
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de l’envoi du dossier.");
    }
  };

  return (
    <div className="min-h-screen font-kufam bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <TopBar />
      <div className="flex flex-col items-center space-y-4 justify-center">
        <HeaderHero />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <section className="bg-white rounded-2xl shadow-xl/40 max-w-4xl mx-auto shadow-slate-200 p-6 sm:p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="mt-6 gap-4">
              {/* Numéro de dossier */}
              <Field labelFR="Numéro de dossier" required>
                <input
                  type="text"
                  name="dossierNumber"
                  value={form.dossierNumber}
                  onChange={handleChange}
                  required
                  placeholder="Numéro de dossier"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Nom & prénom */}
              <Field labelFR="Nom & Prénom" required>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Foulen Ben Foulen"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Email */}
              <Field labelFR="Email" required>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="foulen@gmail.com"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Téléphone */}
              <Field labelFR="Numéro de téléphone" required>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Numéro de téléphone"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Adresse exacte */}
              <Field labelFR="Adresse exacte" required>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="Adresse exacte : ville, province, code postal"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Date de naissance */}
              <Field labelFR="Date de naissance" required>
                <input
                  type="date"
                  name="birthDate"
                  value={form.birthDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Travail recherché */}
              <Field labelFR="Quel type de travail recherchez-vous?" required>
                <input
                  type="text"
                  name="jobType"
                  value={form.jobType}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Informatique, Santé..."
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Avez-vous un CV */}
              <Field labelFR="Avez-vous un CV ?" required>
                <input
                  type="text"
                  name="hasCV"
                  value={form.hasCV}
                  onChange={handleChange}
                  required
                  placeholder="Oui - Non"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Upload CV */}
              <Field labelFR="CV (PDF)">
                <input
                  type="file"
                  multiple
                  name="cvFile"
                  onChange={handleChange}
                  className="w-full max-w-xs rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Expériences */}
              <Field labelFR="Liste des expériences professionnelles" required>
                <input
                  type="text"
                  name="experiences"
                  value={form.experiences}
                  onChange={handleChange}
                  required
                  placeholder="Période / société / postes occupés"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Expérience N°1" required>
                <input
                  type="text"
                  name="exp1"
                  value={form.exp1}
                  onChange={handleChange}
                  required
                  placeholder="Expérience N°1"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Expérience N°2" required>
                <input
                  type="text"
                  name="exp2"
                  value={form.exp2}
                  onChange={handleChange}
                  required
                  placeholder="Expérience N°2"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Expérience N°3" required>
                <input
                  type="text"
                  name="exp3"
                  value={form.exp3}
                  onChange={handleChange}
                  required
                  placeholder="Expérience N°3"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field
                labelFR="Attachez des photos de vos attestations de travail"
                required
              >
                <input
                  type="file"
                  multiple
                  name="attestationsTravail"
                  onChange={handleChange}
                  className="w-full max-w-xs rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Langues */}
              <Field labelFR="Niveau en anglais et français" required>
                <input
                  type="text"
                  name="languages"
                  value={form.languages}
                  onChange={handleChange}
                  required
                  placeholder="Niveau en anglais et français"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Diplômes */}
              <Field
                labelFR="Liste des diplômes avec établissements et périodes"
                required
              >
                <input
                  type="text"
                  name="diplomas"
                  value={form.diplomas}
                  onChange={handleChange}
                  required
                  placeholder="Diplômes avec établissements et périodes"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field
                labelFR="Attachez des photos de vos diplômes, certificats..."
                required
              >
                <input
                  type="file"
                  multiple
                  name="diplomasFiles"
                  onChange={handleChange}
                  className="w-full max-w-xs rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Stages */}
              <Field labelFR="Liste des stages" required>
                <input
                  type="text"
                  name="stages"
                  value={form.stages}
                  onChange={handleChange}
                  required
                  placeholder="Liste des stages"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field
                labelFR="Attachez des photos de vos attestations de stage"
                required
              >
                <input
                  type="file"
                  multiple
                  name="attestationsStage"
                  onChange={handleChange}
                  className="w-full max-w-xs rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Associations */}
              <Field labelFR="Liste des expériences associatives" required>
                <input
                  type="text"
                  name="associations"
                  value={form.associations}
                  onChange={handleChange}
                  required
                  placeholder="Liste des expériences associatives"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Compétences */}
              <Field labelFR="Vos compétences" required>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  required
                  placeholder="Vos compétences"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Remarques */}
              <Field labelFR="Autre remarques ou questions">
                <input
                  type="text"
                  name="remarks"
                  value={form.remarks}
                  onChange={handleChange}
                  placeholder="Vos remarques"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Reçu de paiement */}
              <Field labelFR="Télécharger votre reçu de paiement" required>
                <input
                  type="file"
                  multiple
                  name="paymentReceipt"
                  onChange={handleChange}
                  className="w-full max-w-xs rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Submit */}
              <div className="sm:col-span-2 my-4 pt-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#1D4ED8] px-5 py-3 text-white font-semibold shadow-lg"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </section>
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
          <Link to="/" className="flex items-center gap-2">
            <span>
              <img src={logo} alt="" width={120} />
            </span>
          </Link>
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
          Veuillez lire attentivement tous les champs ci-dessous et préparer vos
          pièces jointes à l'avance pour un traitement optimal.
        </p>
      </div>
    </header>
  );
}

function Field({ labelFR, required, className, children }) {
  return (
    <label className={`block my-6 ${className || ""}`}>
      <span className="block text-lg font-medium text-slate-700">
        {labelFR} {required && <span className="text-rose-600">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
