'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section slide-center">
        <div className="workshop-container">
          <div className="content-wrapper">
            <div className="brand-name">
              <h3>RAMAN FITNESS CLUB</h3>
            </div>
            
            <div className="main-heading">
              <h1 className="title-primary">15 DAYS 365 WAYS WORKSHOP</h1>
            </div>

            <div className="divider"></div>

            <div className="description">
              <Link href="/register" className="cta-join">
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="trainers-section">
        <div className="workshop-container">
          <div className="section-heading">
            <h2 className="title-primary-alt">MEET OUR TRAINERS</h2>
          </div>

          <div className="trainers-grid">
            <div className="trainer-card">
              <div className="trainer-image-wrapper">
                <Image 
                  src="/raman.jpg" 
                  alt="Raman - Home Workout Trainer" 
                  className="trainer-image"
                  width={500}
                  height={500}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="trainer-badge">8+ Years</div>
              </div>
              <div className="trainer-info">
                <h3>Raman</h3>
                <p className="trainer-role">Home Workout Trainer</p>
                <p className="trainer-stats">Experience: 8+ Years | Clients Trained: 103+</p>
                <p className="trainer-desc">
                  Raman is an experienced home-based fitness trainer specializing in weight loss, 
                  weight gain, and functional strength training. With a results-driven and safety-focused approach.
                </p>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-image-wrapper">
                <Image
                  src="/suchitra.jpg"
                  alt="Suchitra - Yoga Instructor"
                  className="trainer-image"
                  width={500}
                  height={500}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="trainer-badge">55+ Transformations</div>
              </div>
              <div className="trainer-info">
                <h3>Suchitra</h3>
                <p className="trainer-role">Yoga Instructor</p>
                <p className="trainer-stats">Transformations Guided: 55+</p>
                <p className="trainer-desc">
                  Suchitra specializes in stress reduction, anxiety management, and holistic wellness 
                  through yoga and mindfulness practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="program-section">
        <div className="workshop-container">
          <div className="section-heading">
            <h2 className="title-primary-alt">PROGRAM DETAILS</h2>
          </div>

          <div className="program-content">
            <p className="program-intro">
              This 15-day online fitness workshop is specially designed to help participants build a strong 
              fitness foundation through a combination of Yoga and Home-Based Workouts. The workshop focuses 
              on learning the basics correctly, improving mobility, strength, and body awareness—no gym equipment required.
            </p>

            <div className="program-details-grid">
              <div className="detail-item detail-card-zoom">
                <div className="detail-icon">📅</div>
                <h3>Workshop Start</h3>
                <div className="detail-content">
                  <p className="detail-highlight">Date: Starts from 15th January 2026</p>
                  <p className="detail-subtext">Join us for a transformative 15-day journey</p>
                </div>
              </div>

              <div className="detail-item detail-card-zoom">
                <div className="detail-icon">🏋️</div>
                <h3>Workshop Structure</h3>
                <div className="detail-content">
                  <p>Each day includes two guided sessions conducted live by a professional trainer:</p>
                  
                  <div className="session-card">
                    <div className="session-header">
                      <span className="session-emoji">🧘</span>
                      <strong>Yoga Session – 35 Minutes</strong>
                    </div>
                    <p>Focus on flexibility, mobility, breathing techniques, posture correction, and recovery.</p>
                  </div>

                  <div className="session-card">
                    <div className="session-header">
                      <span className="session-emoji">💪</span>
                      <strong>Home-Based Workout Session – 35 Minutes</strong>
                    </div>
                    <p>Strength, fat burning, endurance, and functional movements using bodyweight only.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batches Section */}
      <section className="batches-section">
        <div className="workshop-container">
          <div className="section-heading">
            <h2 className="title-primary-alt">Batches Available</h2>
          </div>

          <div className="batches-content">
            <p>To ensure targeted results, the workshop is divided into two separate batches:</p>
            
            <div className="batches-grid">
              <Link href="/register" className="batch-card batch-link">
                <h3>Weight Loss Batch</h3>
                <p>Fat loss–focused workouts, calorie-burning routines, and mobility improvement.</p>
                <span className="batch-cta">Register Now →</span>
              </Link>

              <Link href="/register" className="batch-card batch-link">
                <h3>Weight Gain Batch</h3>
                <p>Strength-based workouts designed to support healthy weight and muscle gain.</p>
                <span className="batch-cta">Register Now →</span>
              </Link>
            </div>

            <p className="batch-note">Participants will be assigned to batches based on their fitness goal.</p>
          </div>

          <div className="mode-section">
            <h3>Mode of Training</h3>
            <p>Live online sessions via video call with real-time form corrections and direct interaction with certified trainers.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="workshop-container">
          <div className="section-heading">
            <h2 className="title-primary-alt">CLIENT REVIEWS</h2>
          </div>

          <div className="divider"></div>

          <p className="reviews-intro">See what our clients have to say about their transformation journey</p>

          <div className="reviews-grid">
            <div className="review-card">
              <Image
                src="/review1.png"
                alt="Client Review 1"
                className="review-image"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="review-card">
              <Image
                src="/review2.png"
                alt="Client Review 2"
                className="review-image"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="review-card">
              <Image
                src="/review3.png"
                alt="Client Review 3"
                className="review-image"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="review-card">
              <Image
                src="/review4.png"
                alt="Client Review 4"
                className="review-image"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="review-card">
              <Image
                src="/review5.png"
                alt="Client Review 5"
                className="review-image"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="review-card">
              <Image
                src="/review6.png"
                alt="Client Review 6"
                className="review-image"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="transformation-section">
        <div className="workshop-container">
          <div className="section-heading">
            <h2 className="title-primary-alt">CLIENT TRANSFORMATIONS</h2>
          </div>

          <div className="divider"></div>

          <div className="transformation-content">
            <div className="transformation-images">
              <div className="before-after-container">
                <div className="image-wrapper before-image">
                  <div className="image-label">BEFORE</div>
                  <Image
                    src="/before.jpg"
                    alt="Before Transformation"
                    width={400}
                    height={500}
                    className="transformation-img"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="arrow-divider">→</div>
                <div className="image-wrapper after-image">
                  <div className="image-label">AFTER</div>
                  <div className="after-images-grid">
                    <Image
                      src="/after1.jpg"
                      alt="After Transformation 1"
                      width={400}
                      height={500}
                      className="transformation-img"
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                      src="/after2.jpg"
                      alt="After Transformation 2"
                      width={400}
                      height={500}
                      className="transformation-img"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="transformation-story">
              <h3 className="story-title">Client Transformation Story: Ajinkya Patil</h3>
              
              <div className="client-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Ajinkya Patil</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">36 Years</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Profession:</span>
                  <span className="info-value">IT Developer</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Transformation Period:</span>
                  <span className="info-value">4 Months</span>
                </div>
              </div>

              <h4 className="story-subtitle">From Desk-Bound Struggles to a Healthier, Stronger Life</h4>
              
              <p className="story-text">
                Like many working professionals, Ajinkya Patil spent long hours at his desk, facing constant work pressure, irregular routines, and growing health concerns. At 35, his lifestyle had started taking a serious toll—low energy levels, reduced fitness, and medical issues that made daily life challenging.
              </p>

              <p className="story-text">
                Despite knowing the importance of fitness, Ajinkya struggled to find the right guidance that could fit into his busy schedule without risking further health complications.
              </p>

              <p className="story-highlight">That's when he decided to take a step toward change</p>

              <h4 className="story-subtitle">The Turning Point</h4>
              
              <p className="story-text">
                Ajinkya joined our program with one clear goal: <strong>To regain his health safely and sustainably.</strong>
              </p>

              <p className="story-text">
                Through personalized guidance, structured workouts, and carefully selected exercises tailored to his medical condition, he began rebuilding his body—step by step.
              </p>

              <div className="story-emphasis">
                <p>Every workout was designed with purpose.</p>
                <p>Every movement focused on healing, not just appearance.</p>
              </div>

              <h4 className="story-subtitle">The Transformation</h4>
              
              <p className="story-text">In just 4 months, Ajinkya achieved a complete lifestyle transformation:</p>

              <ul className="transformation-results">
                <li>✓ Improved overall strength and mobility</li>
                <li>✓ Noticeable fat reduction and body balance</li>
                <li>✓ Increased energy and confidence</li>
                <li>✓ Significant improvement in medical issues through corrective exercise</li>
                <li>✓ Most importantly, he learned how to train smart, not just hard</li>
              </ul>

              <div className="story-cta">
                <h4 className="cta-title">His Story Is Proof That You Can Do It Too</h4>
                <p className="cta-text">
                  If a busy IT professional with health issues can transform in 4 months, so can you—with the right plan and expert support.
                </p>
                <p className="cta-highlight">Your transformation story could be next.</p>
                <Link href="/register" className="transformation-btn">
                  START YOUR TRANSFORMATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="workshop-container">
          <div className="pricing-content">
            <h2>Let's be honest</h2>
            <p>Have you checked how much fitness actually costs today?</p>
            
            <div className="pricing-comparison">
              <div className="price-item">
                <p>15 days of yoga sessions in the market?</p>
                <p className="price">Around ₹22,000</p>
              </div>
              <div className="price-item">
                <p>Personal trainer support?</p>
                <p className="price">₹15,000+</p>
              </div>
            </div>

            <div className="smart-option">
              <h3 className="highlight-text">Now Here's the Smart Option</h3>
              <p className="final-price">Get Both for Just ₹3,499</p>
              <p className="price-note">15 Days | 2 Sessions Daily | Live Training | Expert Guidance</p>
              <Link href="/register" className="register-cta-btn">
                REGISTER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="who-section">
        <div className="workshop-container">
          <h2>Who Should Join?</h2>
          
          <div className="accordion-container">
            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'beginner' ? 'active' : ''}`}
                onClick={() => toggleAccordion('beginner')}
              >
                <span className="accordion-icon">👶</span>
                <span className="accordion-title">Beginners with no prior fitness experience</span>
                <span className="accordion-toggle">{openAccordion === 'beginner' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'beginner' ? 'open' : ''}`}>
                <p>Perfect for those taking their first step into fitness. Our trainers will guide you through every movement with patience and care. We start from the absolute basics, ensuring you build a strong foundation without feeling overwhelmed. No previous knowledge required – just bring your willingness to learn!</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'safe' ? 'active' : ''}`}
                onClick={() => toggleAccordion('safe')}
              >
                <span className="accordion-icon">🛡️</span>
                <span className="accordion-title">People looking to start yoga & workouts safely</span>
                <span className="accordion-toggle">{openAccordion === 'safe' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'safe' ? 'open' : ''}`}>
                <p>Safety is our top priority. Learn proper form and technique from certified professionals who emphasize injury prevention. Our live sessions allow real-time corrections, ensuring you perform each exercise correctly. Build confidence while protecting your body from common workout mistakes.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'weight' ? 'active' : ''}`}
                onClick={() => toggleAccordion('weight')}
              >
                <span className="accordion-icon">⚖️</span>
                <span className="accordion-title">Individuals aiming for weight loss or weight gain</span>
                <span className="accordion-toggle">{openAccordion === 'weight' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'weight' ? 'open' : ''}`}>
                <p>Whether you want to shed pounds or build muscle, we have specialized batches for your goals. Weight loss batch focuses on calorie-burning cardio and mobility, while weight gain batch emphasizes strength training and muscle building. Both include personalized guidance and nutrition tips.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'home' ? 'active' : ''}`}
                onClick={() => toggleAccordion('home')}
              >
                <span className="accordion-icon">🏠</span>
                <span className="accordion-title">Anyone preferring home-based training</span>
                <span className="accordion-toggle">{openAccordion === 'home' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'home' ? 'open' : ''}`}>
                <p>No gym? No problem! All exercises are designed for home environments using just your bodyweight. Save time and money on gym memberships and commutes. Train in the comfort of your own space, at times that suit your schedule, with professional guidance through live video sessions.</p>
              </div>
            </div>
          </div>

          <h2>What You Will Learn</h2>
          
          <div className="accordion-container">
            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'form' ? 'active' : ''}`}
                onClick={() => toggleAccordion('form')}
              >
                <span className="accordion-icon">✅</span>
                <span className="accordion-title">Proper form and technique for exercises</span>
                <span className="accordion-toggle">{openAccordion === 'form' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'form' ? 'open' : ''}`}>
                <p>Master the fundamentals of correct exercise execution. Learn how to engage the right muscles, maintain proper posture, and avoid common mistakes. Our trainers provide real-time feedback during live sessions, ensuring you develop good habits from day one. Proper form maximizes results and minimizes injury risk.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'breathing' ? 'active' : ''}`}
                onClick={() => toggleAccordion('breathing')}
              >
                <span className="accordion-icon">🧘</span>
                <span className="accordion-title">Breathing and mindfulness practices</span>
                <span className="accordion-toggle">{openAccordion === 'breathing' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'breathing' ? 'open' : ''}`}>
                <p>Discover the power of breath control and mental focus. Learn pranayama techniques that reduce stress, improve oxygen flow, and enhance workout performance. Practice mindfulness exercises that help you stay present, manage anxiety, and develop a deeper mind-body connection for overall wellness.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'strength' ? 'active' : ''}`}
                onClick={() => toggleAccordion('strength')}
              >
                <span className="accordion-icon">💪</span>
                <span className="accordion-title">Strength building without equipment</span>
                <span className="accordion-toggle">{openAccordion === 'strength' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'strength' ? 'open' : ''}`}>
                <p>Build functional strength using only your bodyweight. Learn progressive exercises like push-ups, squats, planks, and lunges with variations for all fitness levels. Understand how to increase difficulty as you get stronger. Develop real-world strength that translates to daily activities and improved quality of life.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'flexibility' ? 'active' : ''}`}
                onClick={() => toggleAccordion('flexibility')}
              >
                <span className="accordion-icon">🤸</span>
                <span className="accordion-title">Flexibility and mobility improvement</span>
                <span className="accordion-toggle">{openAccordion === 'flexibility' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'flexibility' ? 'open' : ''}`}>
                <p>Enhance your range of motion and joint health through targeted stretching and mobility work. Learn dynamic warm-ups, static stretches, and yoga poses that improve flexibility. Reduce stiffness, prevent injuries, and move more freely in daily life. Perfect for desk workers and anyone with tight muscles.</p>
              </div>
            </div>

            <div className="accordion-item">
              <button 
                className={`accordion-header ${openAccordion === 'recovery' ? 'active' : ''}`}
                onClick={() => toggleAccordion('recovery')}
              >
                <span className="accordion-icon">🩹</span>
                <span className="accordion-title">Recovery strategies and injury prevention</span>
                <span className="accordion-toggle">{openAccordion === 'recovery' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'recovery' ? 'open' : ''}`}>
                <p>Understand the importance of rest and recovery in your fitness journey. Learn proper cool-down techniques, foam rolling basics, and active recovery methods. Recognize warning signs of overtraining and how to listen to your body. Develop sustainable habits that keep you training safely for the long term.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="workshop-container">
          <p>© 2026 Raman Fitness Club. All rights reserved.</p>
          <p>Transform your life in 15 days!</p>
        </div>
      </footer>
    </>
  )
}
