import { useState } from "react"
import "./Contact.scss"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      )
      if (response.data.success) {
        setStatus("Message envoyé avec succès")
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      setStatus("Erreur lors de l’envoi du message")
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
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Votre email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Votre message</label>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}
