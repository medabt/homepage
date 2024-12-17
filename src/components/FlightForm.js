import React, { useState } from 'react';

function FlightForm() {
  const [formData, setFormData] = useState({
    departure: '',
    arrival: '',
    departureDate: '',
    returnDate: '',
    passengers: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.returnDate && new Date(formData.returnDate) < new Date(formData.departureDate)) {
      alert('La date de retour doit être après la date de départ');
      return;
    }

    console.log(formData);
    alert('Recherche de vols en cours...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Réservation de Vol</h2>

      <div className="form-group">
        <label htmlFor="departure">Ville de départ</label>
        <input
          type="text"
          id="departure"
          name="departure"
          value={formData.departure}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="arrival">Ville d'arrivée</label>
        <input
          type="text"
          id="arrival"
          name="arrival"
          value={formData.arrival}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group date-inputs">
        <div>
          <label htmlFor="departureDate">Date de départ</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div>
          <label htmlFor="returnDate">Date de retour</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="passengers">Nombre de passagers</label>
        <select
          id="passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          required
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      <button type="submit">Rechercher</button>
    </form>
  );
}

export default FlightForm;