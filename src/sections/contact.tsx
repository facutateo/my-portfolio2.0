import { useTranslation } from "../hooks/useTranslation";
import { useActiveSection } from "../hooks/useActiveSection";
import React, { useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const activesection = useActiveSection()
  const {t} = useTranslation()
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>("idle")
  const isSending = status === "sending"

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!form.current) return;
    setStatus("sending");
    try {
      // EmailJS se descarga recién cuando alguien envía el formulario.
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.sendForm('service_k2t0wnk','template_dyuhpud',form.current,'vSwrrQaUFp83cgZ9J')
      form.current?.reset();
      setStatus("sent");
    } catch (error) {
      console.error("Error", error)
      setStatus("error");
    }
  };

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center ${activesection === "contact"? "animate-fade-in-down": "animate-fade-out-up"} px-4 py-16`}>
      <div className="text-center pb-10 md:pb-14">
        <p className="eyebrow">04</p>
        <h2 className="md:text-6xl text-4xl mt-2">{t("contactme")}</h2>
      </div>
      <form
        ref={form}
        onSubmit={handleSend}
        className="w-full max-w-2xl mx-auto flex flex-col gap-4 border border-line rounded-3xl p-6 md:p-10 bg-surface/70 backdrop-blur-sm"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <label className="sr-only" htmlFor="user_name">{t("name")}</label>
          <input id="user_name" type="text" name="user_name" autoComplete="name" className="inputcont" placeholder={t("name")} required/>
          <label className="sr-only" htmlFor="user_email">Email</label>
          <input id="user_email" type="email" name="user_email" autoComplete="email" className="inputcont" placeholder="Email" required/>
        </div>
        <label className="sr-only" htmlFor="message">{t("text")}</label>
        <textarea id="message" className="inputcont h-40 md:h-48" name="message" placeholder={t("text")} rows={4} required/>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button type="submit" disabled={isSending}
            className={`btn btn-primary w-full sm:w-auto ${isSending ? "cursor-not-allowed opacity-60" : "hover:scale-105 active:scale-95"}`}>
            {isSending ? t("sending") : t("send")}
          </button>
          <p role="status" aria-live="polite" className={`text-sm ${status === "error" ? "text-red-500" : "text-muted"}`}>
            {status === "sent" && t("sent")}
            {status === "error" && t("senderror")}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Contact;
