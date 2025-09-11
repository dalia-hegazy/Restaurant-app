import React, { useState } from 'react';
import './Reserve.css';

const Reserve = () => {
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({
      ...reservation,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the reservation data to a server here
    console.log('Reservation submitted:', reservation);
    setSubmitted(true);
  };

  const resetForm = () => {
    setReservation({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      occasion: '',
      specialRequests: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="reserve-container">
        <div className="reservation-success">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Reservation Confirmed!</h2>
          <p>Thank you, {reservation.name}. Your table for {reservation.guests} has been reserved for {reservation.date} at {reservation.time}.</p>
          <p>A confirmation email has been sent to {reservation.email}.</p>
          <button className="btn-primary" onClick={resetForm}>Make Another Reservation</button>
        </div>
      </div>
    );
  }

  return (
    <div className="reserve-container">
      <div className="reserve-hero">
        <div className="hero-content">
          <h1>Reserve Your Table</h1>
          <p>Experience fine dining at its best. Book your table today and prepare for a culinary journey.</p>
        </div>
      </div>

      <div className="reservation-form-container">
        <div className="form-intro">
          <h2>Make a Reservation</h2>
          <p>We recommend booking in advance, especially for weekends and special occasions.</p>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={reservation.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={reservation.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={reservation.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={reservation.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <select
                id="time"
                name="time"
                value={reservation.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={reservation.guests}
                onChange={handleChange}
                required
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9">9+ People (Please call)</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={reservation.occasion}
                onChange={handleChange}
              >
                <option value="">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business Dinner</option>
                <option value="date">Date Night</option>
                <option value="celebration">Celebration</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={reservation.specialRequests}
                onChange={handleChange}
                rows="3"
                placeholder="Any allergies, dietary restrictions, or special requirements?"
              ></textarea>
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn-primary">Reserve Now</button>
          </div>
        </form>
      </div>

      <div className="reservation-info">
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-clock"></i>
          </div>
          <h3>Opening Hours</h3>
          <p>Monday to Friday: 5:00 PM - 10:00 PM</p>
          <p>Saturday & Sunday: 11:00 AM - 10:00 PM</p>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-info-circle"></i>
          </div>
          <h3>Reservation Policy</h3>
          <p>Please arrive 10 minutes before your reservation. Large groups may require a deposit.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3>Contact Us</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Email: reservations@restaurant.com</p>
        </div>
      </div>
    </div>
  );
};

export default Reserve;