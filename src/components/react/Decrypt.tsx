import React from "react";
import CryptoJS from "crypto-js";
import ReactMarkdown from "react-markdown";

export default function Decrypt({ encrypted }: { encrypted: string }) {
  const [key, setKey] = React.useState("");
  const [decrypted, setDecrypted] = React.useState("");
  const [error, setError] = React.useState("");

  async function fetchEncrypted() {
    const res = await fetch(encrypted);
    if (!res.ok) throw new Error("Could not fetch encrypted file");
    return res.text();
  }

  async function handleDecrypt() {
    try {
      const encText = await fetchEncrypted();
      const bytes = CryptoJS.AES.decrypt(encText, key);
      const plain = bytes.toString(CryptoJS.enc.Utf8);
      if (!plain) {
        setError("Wrong key");
        return;
      }
      setDecrypted(plain);
      setError("");
    } catch {
      setError("Error decrypting");
    }
  }

  if (decrypted) {
    return (
      <div className="prose">
        <ReactMarkdown>{decrypted}</ReactMarkdown>
      </div>
    );
  }

  return (
    <>
      <input
        type="password"
        placeholder="Type secret-key and press Enter!"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault;
            handleDecrypt();
          }
        }}
        className="w-full md:w-2/3 border-2 border-primary/70 placeholder:text-center placeholder-amber-200/70 rounded-lg text-center p-1"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
