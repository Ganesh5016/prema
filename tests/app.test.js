// Jest tests here
import axios from 'axios';
describe('Patient registration', () => {
  it('should register a patient', async () => {
    const response = await axios.post('/api/patients', { name: 'John Doe', email: 'johndoe@example.com' });
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('name', 'John Doe');
    expect(response.data).toHaveProperty('email', 'johndoe@example.com');
  });
});