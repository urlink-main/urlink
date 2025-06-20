"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
// import { supabase } from "@/lib/supabase";
import { Eye, EyeOff, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";

const testimonials = [
  {
    quote: "URLINK helped us increase mobile app conversions by 3x.",
    author: "Sarah K.",
    role: "Marketing Director",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    quote: "Super intuitive and powerful, I use it for every campaign now.",
    author: "Daniel M.",
    role: "Growth Strategist",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const isNameValid = name.length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log("Form submitted:", { name, email, password, acceptedTerms });
    try {
      setLoading(true);
      // Validate form inputs
      if (!isNameValid || !isEmailValid || !isPasswordValid || !acceptedTerms) {
        setError("Please fill out all fields correctly and accept the terms.");
        return;
      }

      // Sign up logic using Supabase
      const { error: signupError, data: { user: userAccount } } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            emailRedirectTo: `${window.location.origin}/api/auth/callback`
          },
        },
      });

      // if (userAccount)
      //   await supabase.auth.admin.updateUserById(userAccount.id, {
      //     email_confirm: false
      //   });

      if (signupError) {
        throw signupError;
      }

      // const res = await supabase.auth.resend({
      //   email,
      //   type: 'signup',
      // });

      // console.log("Resend verification email response:", res);

      toast.success("Account created successfully! Please check your email for verification.");
      router.push("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      toast.error("Failed to create account. Please try again.");
    }
    setLoading(false);
    setName("");
    setEmail("");
    setPassword("");
    setAcceptedTerms(false);
    setShowPassword(false);
    setCurrentTestimonial(0); // Reset testimonial on new signup
  };

  const handleGoogleSignup = async () => {
    // Google auth logic commented out
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white">
        <div className="w-full max-w-[340px] sm:max-w-md md:max-w-lg">
          <Link href="/" className="flex items-center gap-2 md:gap-3 mb-6 md:mb-12">
            <div className="h-8 w-8 md:h-12 md:w-12 rounded-md bg-[#5e17eb] flex items-center justify-center p-1 md:p-2">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M9.26139 17.1175C11.3756 17.1206 12.8001 19.2408 12.0546 21.2264C11.616 22.3969 9.69693 23.8578 8.8077 24.8514C1.63493 32.868 9.69693 44.9708 19.7582 41.3156C22.6935 40.2495 23.6553 38.3213 25.833 36.5171C28.3101 34.4665 31.8353 36.9738 30.6209 39.9455C30.2428 40.8695 27.3589 43.6022 26.4742 44.3311C17.7892 51.4812 4.54003 47.705 0.916595 37.1236C-1.66488 29.5833 1.44892 22.7886 7.2198 17.9024C7.82774 17.3867 8.44324 17.116 9.25988 17.1175H9.26139Z" fill="white" />
                <path d="M30.8025 0.0302097C43.5496 -0.728958 52.0985 12.9708 45.8558 24.1466C44.7624 26.1035 42.5757 28.5686 40.8607 30.0249C37.7893 32.6336 34.1915 28.8347 36.2982 26.0657C37.6713 24.2601 39.5874 23.1319 40.7216 20.9754C45.3537 12.1708 35.8082 2.56631 26.9915 7.24381C24.7428 8.43701 23.7159 10.471 21.8694 11.7111C18.9507 13.6725 15.3469 10.0945 18.1296 6.91413C21.4989 3.06688 25.5503 0.343253 30.8025 0.0302097Z" fill="white" />
                <path d="M32.0016 12.9497C34.6224 12.9255 35.9911 16.0332 34.255 17.981C29.5956 22.6601 24.903 27.3043 20.2466 31.9863C18.7344 33.5062 17.3219 35.8154 14.813 34.8566C13.0164 34.1701 12.3797 31.9198 13.464 30.3394C19.0247 24.6139 24.6882 18.9444 30.4168 13.3882C30.8599 13.1221 31.4844 12.9557 32.0016 12.9512V12.9497Z" fill="white" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-bold text-[#5e17eb]">URLINK</span>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
            Create your free URLINK account
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            Start with 500 free clicks, no credit card needed.
          </p>
          <form onSubmit={handleEmailSignup} className="space-y-3 md:space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#5e17eb] pr-10 placeholder:text-gray-400 text-black text-sm md:text-base"
              />
              <AnimatePresence>
                {isNameValid && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute right-3 top-3 -translate-y-1/2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#5e17eb] pr-10 placeholder:text-gray-400 text-black text-sm md:text-base"
              />
              <AnimatePresence>
                {isEmailValid && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute right-3 top-3 -translate-y-1/2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create password (min. 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:border-[#5e17eb] pr-10 placeholder:text-gray-400 text-black text-sm md:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4 md:h-5 md:w-5" /> : <Eye className="h-4 w-4 md:h-5 md:w-5" />}
              </button>
              <AnimatePresence>
                {isPasswordValid && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute right-10 md:right-12 top-3 -translate-y-1/2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                color="indigo"
                checked={acceptedTerms}
                onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                className="mt-1 border-2 border-[#5e17eb] data-[state=checked]:border-[#5e17eb] data-[state=checked]:text-white rounded-md data-[state=checked]:bg-[#5e17eb]"
              />
              <label htmlFor="terms" className="text-xs md:text-sm text-gray-600 leading-tight mt-0.5">
                I accept the{" "}
                <a href="/privacy-policy" target="_blank" className="text-[#5e17eb] hover:underline">
                  Privacy Policy
                </a>
                {" "}and{" "}
                <a href="/terms" target="_blank" className="text-[#5e17eb] hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>
            {error && <div className="text-red-500 text-xs md:text-sm text-center">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-[#5e17eb] hover:bg-[#4e13c4] text-white py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
              disabled={loading || !acceptedTerms}
            >
              {loading ? "Creating Account..." : "Create My Free Account"}
            </Button>
          </form>
          <div className="mt-4 md:mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full mt-4 md:mt-6 border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 py-2 md:py-3 rounded-lg text-sm md:text-base"
            onClick={handleGoogleSignup}
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[#5e17eb]">Sign up with Google</span>
          </Button>
          <div className="text-xs md:text-sm text-center text-gray-600 mt-6 md:mt-8 flex flex-col md:flex-row md:justify-center gap-3 md:gap-4">
            <Link href='/' className="text-[#5e17eb] hover:underline">
              ← Back to homepage
            </Link>
            <span className="hidden md:inline">
              Already have an account?
            </span>
            <span className="md:hidden">
              Have an account?
            </span>
            <Link href="/login" className="text-[#5e17eb] hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="hidden lg:block w-[600px] bg-[#5e17eb] p-8 text-white">
        <div className="h-full flex flex-col">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8">
              Everything you need to grow your audience
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span>Track your links with real-time analytics</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span>Create custom QR codes for any platform</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span>Auto-redirect users to the right app</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span>500 free clicks included</span>
              </li>
            </ul>
          </div>

          {/* Mobile testimonial (shown only on small screens) */}
          <div className="block lg:hidden mt-6 mb-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#5e17eb]/10 backdrop-blur-sm rounded-lg p-4"
              >
                <p className="text-gray-800 italic mb-4 text-sm">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-sm">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-xs text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop testimonial */}
          <div className="mt-auto hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <p className="text-white/90 italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-white/75">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
