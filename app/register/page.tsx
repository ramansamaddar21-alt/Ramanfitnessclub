'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, FormEvent } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    batch: '',
    whatsapp: '',
    email: '',
    goal: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message with form data
    const message = `Hi! I want to register for the 15 Days 365 Ways Workshop.

*Registration Details:*
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Batch: ${formData.batch}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
${formData.goal ? `Fitness Goal: ${formData.goal}` : ''}

I'm ready to start my transformation journey!`

    // WhatsApp Business link
    const whatsappNumber = '918446328448' // +91 844 632 8448
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="register-page">
      {/* Header */}
      <header className="register-header">
        <div className="workshop-container">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="brand-title">RAMAN FITNESS CLUB</h1>
        </div>
      </header>

      {/* Registration Section */}
      <section className="registration-main">
        <div className="workshop-container">
          <div className="registration-content">
            <div className="registration-left">
              <h2 className="register-title">JOIN THE TRANSFORMATION</h2>
              <p className="register-subtitle">15 Days 365 Ways Workshop</p>
              
              <div className="price-box">
                <div className="price-label">Workshop Fee</div>
                <div className="price-amount">₹3,499</div>
                <div className="price-features">
                  <div className="feature-item">✓ 15 Days Live Training</div>
                  <div className="feature-item">✓ Yoga + Home Workouts</div>
                  <div className="feature-item">✓ Expert Guidance</div>
                  <div className="feature-item">✓ Diet & Lifestyle Support</div>
                  <div className="feature-item">✓ Certificate on Completion</div>
                </div>
              </div>

              <div className="trainers-preview">
                <h3>Your Trainers</h3>
                <div className="trainer-mini">
                  <Image
                    src="/raman.jpg"
                    alt="Raman"
                    width={60}
                    height={60}
                    className="trainer-mini-img"
                  />
                  <div>
                    <strong>Raman</strong>
                    <p>Home Workout Expert</p>
                  </div>
                </div>
                <div className="trainer-mini">
                  <Image
                    src="/suchitra.jpg"
                    alt="Suchitra"
                    width={60}
                    height={60}
                    className="trainer-mini-img"
                  />
                  <div>
                    <strong>Suchitra</strong>
                    <p>Yoga Instructor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="registration-right">
              <div className="form-container">
                <h3>Register Now</h3>
                <p className="form-subtitle">Fill in your details to join the workshop</p>

                <form className="registration-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter your full name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Age *</label>
                      <input 
                        type="number" 
                        name="age"
                        placeholder="Age" 
                        value={formData.age}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label>Gender *</label>
                      <select 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Batch Selection *</label>
                    <select 
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your batch</option>
                      <option value="Weight Loss Batch">Weight Loss Batch</option>
                      <option value="Weight Gain Batch">Weight Gain Batch</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      name="whatsapp"
                      placeholder="+91 XXXXX XXXXX" 
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Fitness Goal (Optional)</label>
                    <textarea 
                      name="goal"
                      placeholder="Tell us about your fitness goals..."
                      rows={3}
                      value={formData.goal}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="payment-divider">
                    <span className="divider-line"></span>
                    <span className="divider-text">Complete Registration via WhatsApp</span>
                    <span className="divider-line"></span>
                  </div>

                  <button type="submit" className="submit-btn whatsapp-btn">
                    <span className="whatsapp-icon">💬</span>
                    CONTINUE ON WHATSAPP - ₹3,499
                  </button>

                  <p className="form-note whatsapp-note">
                    * You'll be redirected to WhatsApp to complete your registration and payment
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
