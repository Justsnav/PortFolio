import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail, Send, X } from "lucide-react";
import { profile } from "@/data/portfolio";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formName.trim() || "Visitor"}`
    );
    const body = encodeURIComponent(
      `${formMessage.trim()}\n\n---\nSender: ${formName.trim()} (${formEmail.trim()})`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="contact-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-modal"
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
          >
            <div className="contact-modal-header">
              <div>
                <h3 id="contact-title">Let’s connect</h3>
                <p>Have an opportunity, collaboration, or question? Send a message or reach out directly.</p>
              </div>
              <button
                type="button"
                className="contact-modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            <div className="contact-modal-body">
              <div className="contact-email-card">
                <span className="email-address">{profile.email}</span>
                <button
                  type="button"
                  className={`copy-btn ${copied ? "copied" : ""}`}
                  onClick={handleCopy}
                >
                  {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
                </button>
              </div>

              <div className="contact-actions">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    profile.email
                  )}&su=Hello%20Abhinav`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action-btn primary"
                >
                  <Mail size={15} /> Open in Gmail <ArrowUpRight size={13} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="contact-action-btn"
                >
                  <Send size={14} /> Open Mail App
                </a>
              </div>

              <div className="contact-divider">or send a quick note</div>

              <form className="contact-form" onSubmit={handleSendForm}>
                <div className="contact-form-row">
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="Your Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="contact-input"
                    placeholder="Your Email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  className="contact-textarea"
                  placeholder="Your message, project idea, or question…"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  rows={3}
                  required
                />
                <button type="submit" className="contact-form-submit">
                  {sent ? (
                    <><Check size={15} /> Opening Gmail…</>
                  ) : (
                    <><Send size={14} /> Send Message <ArrowUpRight size={14} /></>
                  )}
                </button>
                <p className="contact-form-note">
                  Opens a pre-filled compose window ready to send.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
