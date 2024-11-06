import dotenv from "dotenv"
import { useState, useRef } from "react"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import emailjs from "@emailjs/browser"
import "./Contact.scss"

export default function Contact() {
  const form = useRef()

  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })

  const [emailValid, setEmailValid] = useState(false)

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validateEmail = (email) => {
      const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regEx.test(String(email).toLowerCase())
    }

    setEmailValid(validateEmail(form.current.user_email.value))

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey: publicKey,
        }
      )

      if (response.text != "OK") throw new Error("Error while sending email")

      setStatus("Message envoyé avec succès")
      console.log("Message sent successfully")

      form.current.reset()

      setData({ user_name: "", user_email: "", message: "" })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="div__contact">
      <h2>CONTACT</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <label htmlFor="user_name">Votre nom</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Nom"
          value={data.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="user_email">Votre email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Votre message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <span className="iconEmail">
            <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </span>
          Envoyer
        </button>
      </form>
      {status && (
        <div className="emailSent">
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="xl"
            style={{ color: "green" }}
          />
          {status}
        </div>
      )}
      {data.user_email & !emailValid && (
        <div className="emailSent">
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="xl"
            style={{ color: "red" }}
          />
          L'adresse email n'est pas valide
        </div>
      )}
    </div>
  )
}
