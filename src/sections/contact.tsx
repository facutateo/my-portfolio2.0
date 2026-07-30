import { useTranslation } from "../hooks/useTranslation";
import {useActiveSection} from "../hooks/useActiveSection";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'


function Contact() {
  const activesection = useActiveSection(["home","about", "skills", "projects", "contact"])
  const {t} = useTranslation()
  const form = useRef<HTMLFormElement>(null)
  const [isSending, SetIsSending]=useState(false)
  const handleSend = (e: React.FormEvent) =>{
    e.preventDefault();
    if(!form.current) return;
    SetIsSending(true);
    emailjs.sendForm('service_k2t0wnk','template_dyuhpud',form.current,'vSwrrQaUFp83cgZ9J').then(
      ()=>{
        form.current?.reset();
        
      })
      .catch((error)=>{
        console.error("Error", error)
      }
    )
    .finally(() => SetIsSending(false));
  };

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center ${activesection === "contact"? "animate-fade-in-down": "animate-fade-out-up"} px-4`}>
            <div className="text-center p-8 md:p-20">
            <h1 className="md:text-5xl text-3xl font-bold">{t("contactme")}</h1>
            </div>
      <form 
        ref={form} 
        onSubmit={handleSend}
        className="w-full max-w-2xl mx-auto flex flex-col border border-(--div-background-color) rounded items-center p-6 md:p-10 bg-(--background-color)/30 backdrop-blur-sm"
      >
        <div className="w-full flex justify-center">
        <input type="text" name="user_name" className="inputcont " placeholder={t("name")} required/>
        </div>
        <div className="w-full flex justify-center">
        <input type="text" name="user_email" className="inputcont" placeholder="email" required/>
        </div>
        <div className="w-full flex justify-center">
        <textarea className="inputcont h-40 md:h-48" name="message" placeholder={t("text")} rows={4} required/>
        </div>
        <div className="mt-4">
        <button type="submit" disabled={isSending}
            className={`w-full sm:w-auto ${isSending ? "cursor-not-allowed opacity-50" : "hover:scale-105 active:scale-95 transition-transform"}`}>{t("send")}</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
