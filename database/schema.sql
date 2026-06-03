-- Complete SQL schema
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);
CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  specialty VARCHAR(255) NOT NULL
);
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER NOT NULL REFERENCES patients(id),
  doctor_id INTEGER NOT NULL REFERENCES doctors(id),
  date DATE NOT NULL,
  time TIME NOT NULL
);