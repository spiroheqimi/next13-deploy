"use client";

export default function ContactForm() {

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-144 flex flex-col space-y-5">
        <label htmlFor="name" className="text-mytext-color text-xl">
          Name
        </label>
        <input
          id="name"
          type="text"
          pattern="[a-zA-Z0-9]{1,15}"
          autoComplete="off"
          className="py-2 px-3 rounded-lg border-2 outline-none border-mytext-color"
          required
        />
        <label htmlFor="email" className="text-mytext-color text-xl">
          Email
        </label>
        <input
          id="email"
          type="text"
          className="py-2 px-3 rounded-lg border-2 outline-none border-mytext-color"
          autoComplete="off"
          required
        />
        <label htmlFor="message" className="text-mytext-color text-xl">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="py-2 px-3 rounded-lg border-2 outline-none border-mytext-color"
          rows="6"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-violet-700 my-8 px-6 py-3 rounded-3xl text-white hover:scale-105 "
      >
        Submit
      </button>
    </form>
  );
}
