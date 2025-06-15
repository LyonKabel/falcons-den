
import { useState } from 'react';

function EmailForm() {
const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
    });

    const data = await res.json();
    alert(data.message);
    setEmail('');
    console.log(data);
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
    />
    <button type="submit">Send Email</button>
    </form>
);
}

export default EmailForm;
