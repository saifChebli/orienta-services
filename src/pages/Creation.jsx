import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.png";

export default function Creation() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    birthDate: "",
    exp1: "",
    exp2: "",
    exp3: "",
    languages: "",
    diplomas: "",
    stages: "",
    associations: "",
    skills: "",
    cvType: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    alert("Merci ! Votre demande de CV a été envoyée avec succès.");
  };

  return (
    <div className="min-h-screen font-kufam bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <TopBar />
            {/* Header Section */}
      <section className="py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 leading-snug">
        MODÈLES EXAMINÉS PAR DES EXPERTS EN <br /> CONSEILS DE CARRIÈRE
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur Nos modèles de CV professionnels
        sont parfaits pour tout demandeur d’emploi. Ils sont faciles à lire, bien
        organisés et contiennent juste assez de couleurs pour capter l’attention
        des responsables du recrutement occupés. elit. Ut elit tellus, luctus nec
        ullamcorper mattis, pulvinar dapibus leo.
      </p>

      <div className="my-10 border-t border-gray-300 w-11/12 md:w-2/3 mx-auto"></div>

      <div className="flex flex-col items-center space-y-6">
        <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          CRÉER UN NOUVEAU CV A 24DT
          {/* <FaIdCard className="text-lg" /> */}
        </button>

        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="user2"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/60.jpg"
            alt="user3"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="user4"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full border-2 border-white text-sm font-medium">
            +6
          </div>
        </div>
      </div>
    </section>

      {/* Timeline Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Étapes de création de votre CV
        </h2>
        <div className="relative">
          <div className="border-l-4 border-blue-500 absolute h-full left-5 top-0">

          </div>
          <ul className="space-y-10 ">
            <li className="relative pl-12">
              <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                1
              </span>
              <h3 className="text-lg font-semibold">Informations personnelles</h3>
              <p className="text-gray-600">
                Nom, prénom, email, téléphone et adresse.
              </p>
            </li>
            <li className="relative pl-12">
              <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                2
              </span>
              <h3 className="text-lg font-semibold">Niveau d’étude</h3>
              <p className="text-gray-600">
                Indiquez votre diplôme et votre parcours académique.
              </p>
            </li>
            <li className="relative pl-12">
              <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                3
              </span>
              <h3 className="text-lg font-semibold">Domaine de travail</h3>
              <p className="text-gray-600">
                Choisissez votre domaine professionnel et secteur d’activité.
              </p>
            </li>
            <li className="relative pl-12">
              <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                4
              </span>
              <h3 className="text-lg font-semibold">Création et téléchargement</h3>
              <p className="text-gray-600">
                Générez automatiquement votre CV au format PDF.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex flex-col items-center space-y-4 justify-center">

        <HeaderHero />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <section className="bg-white rounded-2xl shadow-xl/40 max-w-4xl mx-auto shadow-slate-200 p-6 sm:p-8 border border-slate-100">
            <form onSubmit={handleSubmit} className="mt-6 gap-4">

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

              <Field labelFR="Adresse exacte" required>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="Ville, province, code postal"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

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

              <Field labelFR="Expérience N°2">
                <input
                  type="text"
                  name="exp2"
                  value={form.exp2}
                  onChange={handleChange}
                  placeholder="Expérience N°2"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Expérience N°3">
                <input
                  type="text"
                  name="exp3"
                  value={form.exp3}
                  onChange={handleChange}
                  placeholder="Expérience N°3"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Niveau en anglais et français" required>
                <input
                  type="text"
                  name="languages"
                  value={form.languages}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Bilingue, Intermédiaire..."
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Liste des diplômes avec établissements et périodes" required>
                <input
                  type="text"
                  name="diplomas"
                  value={form.diplomas}
                  onChange={handleChange}
                  required
                  placeholder="Licence - Université de Tunis (2019-2022)"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Liste des stages">
                <input
                  type="text"
                  name="stages"
                  value={form.stages}
                  onChange={handleChange}
                  placeholder="Stage en entreprise X"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              <Field labelFR="Liste des expériences associatives">
                <input
                  type="text"
                  name="associations"
                  value={form.associations}
                  onChange={handleChange}
                  placeholder="Membre d'une association"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

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

              {/* Type de CV */}
              <Field labelFR="Type de CV" required>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="cvType"
                      value="Français"
                      checked={form.cvType === "Français"}
                      onChange={handleChange}
                      required
                    />
                    Français
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="cvType"
                      value="Anglais"
                      checked={form.cvType === "Anglais"}
                      onChange={handleChange}
                    />
                    Anglais
                  </label>
                </div>
              </Field>

              <Field labelFR="Autres remarques ou questions">
                <input
                  type="text"
                  name="remarks"
                  value={form.remarks}
                  onChange={handleChange}
                  placeholder="Vos remarques"
                  className="w-full rounded-xl border border-[#1D4ED8] px-3 py-2"
                />
              </Field>

              {/* Upload reçu */}
              <Field labelFR="Télécharger votre reçu de paiement" required>
                <input
                  type="file"
                  name="paymentReceipt"
                  onChange={handleChange}
                  required
                  className="w-full"
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
          Création de CV
        </h1>
        <p className="mt-3 text-slate-600 max-w-prose text-center">
          Remplissez soigneusement ce formulaire après avoir effectué votre
          paiement. Votre CV sera généré et livré par email sous 24h.
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
