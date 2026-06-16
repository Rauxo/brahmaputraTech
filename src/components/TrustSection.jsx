import React from 'react'
import { FiBell, FiShield, FiUsers } from 'react-icons/fi'
import { HiOutlineShare } from 'react-icons/hi'
import './TrustSection.css'

function TrustSection() {
  const items = [
    {
      icon: <FiBell />,
      title: '5+ Years',
      subtitle: 'Experience'
    },
    {
      icon: <FiShield />,
      title: 'Businesses Served',
      subtitle: 'Across Northeast'
    },
    {
      icon: <HiOutlineShare />,
      title: 'Multi-Industry',
      subtitle: 'Expertise'
    },
    {
      icon: <FiUsers />,
      title: 'Dedicated',
      subtitle: 'Local Support'
    }
  ]

  return (
    <section className="trust-section">
      <div className="trust-container">
        {items.map((item, index) => (
          <div className="trust-card" key={index}>
            <div className="trust-icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustSection