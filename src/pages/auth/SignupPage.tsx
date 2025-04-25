import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card, {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { UserRole } from "../../types";

const SignupPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<UserRole>("business");
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [socialsConnected, setSocialsConnected] = useState({
    instagram: false,
    facebook: false,
    tiktok: false,
  });

  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const validateStep1 = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!password.trim()) {
      setError("Password is required");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Selected file:", selectedFile);
    }
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setError("");
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    try {
      await signup(email, password, name, role);
      navigate("/onboarding");
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-[#2A0A5E] to-[#4A2A9E] bg-clip-text text-transparent mr-1">
            ONI
          </span>
          <span className="text-[#00F5FF] text-3xl">Match</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#2A0A5E] hover:text-[#3A1A7E]"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader className="text-center bg-gradient-to-r from-[#2A0A5E]/10 to-[#00F5FF]/10">
            <CardTitle>Step {step} of 2</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {step === 1 ? (
              <div className="space-y-6">
                <Input
                  label="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  placeholder="you@example.com"
                />

                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  placeholder="••••••••"
                  helpText="Password must be at least 8 characters"
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  fullWidth
                  placeholder="••••••••"
                />

                <Button
                  type="button"
                  variant="primary"
                  fullWidth
                  onClick={handleNextStep}
                >
                  Continue
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 block text-sm font-medium text-gray-700"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`border rounded-md py-3 px-4 flex items-center justify-center transition-colors ${
                        role === "business"
                          ? "bg-[#2A0A5E] text-white border-[#2A0A5E]"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setRole("business")}
                    >
                      Business
                    </button>
                    <button
                      type="button"
                      className={`border rounded-md py-3 px-4 flex items-center justify-center transition-colors ${
                        role === "influencer"
                          ? "bg-[#2A0A5E] text-white border-[#2A0A5E]"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setRole("influencer")}
                    >
                      Influencer
                    </button>
                  </div>
                </div>

                <Input
                  label="Full Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  fullWidth
                  placeholder="Your name"
                />

                {role === "influencer" && (
                  <div>
                    <label
                      htmlFor="media-kit"
                      className="block mb-2 font-medium"
                    >
                      Upload Photo
                    </label>
                    <input
                      id="media-kit"
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf"
                      onChange={handleFileChange}
                      required
                      className="block w-full"
                    />
                    {file && (
                      <div className="mt-2">
                        <strong>Preview:</strong>{" "}
                        {file.type.startsWith("image") && (
                          <img
                            src={URL.createObjectURL(file)}
                            alt="Preview"
                            style={{ maxWidth: "200px", marginTop: "10px" }}
                          />
                        )}
                      </div>
                    )}

                    {/* --- Social OAuth Buttons --- */}

                    <div className="space-y-4 mt-5">
                      <label className="block font-medium text-sm text-center text-gray-700 mb-2">
                        Connect Your Socials
                      </label>
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() =>
                            (window.location.href = "/auth/instagram")
                          } // change to your backend OAuth route
                          className="w-full px-4 py-2 bg-[#C13584] text-white rounded-md hover:bg-[#e9429d] transition"
                        >
                          Connect Instagram
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            (window.location.href = "/auth/facebook")
                          }
                          className="w-full px-4 py-2 bg-[#3b5998] text-white rounded-md hover:bg-[#4a69ad] transition"
                        >
                          Connect Facebook
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            (window.location.href = "https://www.tiktok.com/v2/auth/authorize/")
                          }
                          className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                        >
                          Connect TikTok
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[#2A0A5E] focus:ring-[#2A0A5E] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-[#2A0A5E] hover:text-[#3A1A7E]"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-[#2A0A5E] hover:text-[#3A1A7E]"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isLoading}
                    fullWidth
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="bg-gray-50 border-t border-gray-200 p-6">
            <p className="text-sm text-gray-500 text-center">
              By signing up, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
