import { useState } from "react"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import "./Contact.scss"

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [emailValid, setEmailValid] = useState(false)

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    const validateEmail = (email) => {
      const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regEx.test(String(email).toLowerCase())
    }

    setEmailValid = validateEmail(data.email)

    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("message", data.message)

    e.preventDefault()
    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Error while sending email")
      }

      setStatus("Message envoyé avec succès")
      setData({ name: "", email: "", message: "" })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="div__contact">
      <h3>CONTACT</h3>
      <form onSubmit={handleSubmit}>
        <label>Votre nom</label>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={data.name}
          onChange={handleChange}
          required
        />
        <label>Votre email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <label>Votre message</label>
        <textarea
          name="message"
          placeholder="Message"
          value={data.message}
          onChange={handleChange}
          required
        />
        <button type="submit">
        <FontAwesomeIcon
            icon={faPaperPlane}
            size="xl"
          />
          Envoyer</button>
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
      {data.email & !emailValid && (
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
