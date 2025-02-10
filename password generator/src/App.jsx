import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
    setCopied(false);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8 text-white">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Password Generator
        </h1>

        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 tracking-wider"
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded ${
              copied
                ? "bg-green-500 text-white"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            {copied ? "Copied!" : "📋"}
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">
              Password Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={24}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
                className="form-checkbox rounded text-blue-500"
              />
              <span>Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="form-checkbox rounded text-blue-500"
              />
              <span>Special Chars</span>
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
