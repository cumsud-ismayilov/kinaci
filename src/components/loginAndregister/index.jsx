import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function index({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-8 w-[690px] rounded-xl relative shadow-xl"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* X (Close Button) */}
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-2xl font-bold text-orange-600 hover:scale-110 transition"
          >
            ✕
          </button>

          {/* LOGIN FORM */}
          {isLogin && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-[158px] h-[86px]"
                src="http://localhost:5173/src/assets/kinaciLogo.png"
                alt="kinaciLogo"
              />
              <h2 className="text-2xl font-bold mb-6 mt-6">Hesab</h2>
              <form className="flex flex-col gap-[6px]" action="">
                <label className="block">E-Mail</label>
                <input
                  className="input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px]  "
                  type="email"
                  placeholder="johndoe@john.doe"
                />

                <label className="block">Şifrə</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="password"
                />

                <button className="py-3 px-8 rounded-selectBtn w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer rounded-xl">
                  Daxil ol
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                Hesabınız yoxdur?
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-orange-600 font-semibold ml-1 cursor-pointer"
                >
                  Qeydiyyatdan keç
                </button>
              </p>
            </motion.div>
          )}

          {/* REGISTER FORM */}
          {!isLogin && (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-[158px] h-[86px]"
                src="http://localhost:5173/src/assets/kinaciLogo.png"
                alt="kinaciLogo"
              />
              <h2 className="text-2xl font-bold mb-6 mt-6">Hesab</h2>
              <form className="flex flex-col gap-[6px]" action="">
                <label className="block">Ad & Soyad</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="text"
                  placeholder="John Doe"
                />

                <label className="block">E-Mail</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="email"
                  placeholder="johndoe@john.doe"
                />

                <label className="block">Şifrə</label>
                <input
                  className="input input my-2.5 px-2.5 py-4  rounded-xl border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] "
                  type="password"
                />

                <button className="py-3 px-8 rounded-selectBtn w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 cursor-pointer rounded-xl">
                  Qeydiyyatdan keç
                </button>
              </form>

              <p className="mt-4 text-sm text-center">
                Hesabınız var?
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-orange-600 font-semibold ml-1 cursor-pointer"
                >
                  Daxil ol
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default index;
