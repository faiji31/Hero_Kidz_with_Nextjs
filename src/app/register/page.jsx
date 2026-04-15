import Link from "next/link";

export const metadata = {
  title: "Register | HeroKidz",
  description: "Create your HeroKidz account",
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-primary mb-4">
          Create Account 🚀
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Social Login */}
        <div className="space-y-2">
          <button className="btn btn-outline w-full">
            Sign up with Google
          </button>
          
        </div>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;