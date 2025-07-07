import { useState } from "react";
import CryptoJS from "crypto-js";
import ReactMarkdown from "react-markdown";

export default function Decrypt({ encrypted }: { encrypted: string }) {
  const [key, setKey] = useState("");
  const [decrypted, setDecrypted] = useState("");
  const [error, setError] = useState("");

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
    <div>
      <input
        type="password"
        placeholder="Type secret key to decrypt and press enter"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault;
            handleDecrypt();
          }
        }}
        className="w-[400px]"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
