"use client";
import { Protest_Guerrilla } from "@next/font/google";
import { motion } from "framer-motion";
import { WaterDroplet } from "@/components/WaterDroplet";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const roboto = Protest_Guerrilla({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {


    setTimeout(() => {
      router.push("/home")
    }, 2000);  

    
 

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black" >
      <div className="flex justify-center gap-3">
        <motion.div
          className={roboto.className}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.5 },
            delay: 0.2,
          }}
        >
          <motion.h1
            className="text-white text-xl lg:text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, grey, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 0, // Ensure animation only runs once
              ease: "easeInOut",
            }}
          >
            Hey
          </motion.h1>
        </motion.div>

        <motion.div
          className={roboto.className}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.5 },
            delay: 0.3,
          }}
        >
          <motion.h1
            className="text-white text-xl lg:text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, grey, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 0, // No repeat
              ease: "easeInOut",
            }}
          >
            There
          </motion.h1>{" "}
        </motion.div>

        <motion.div
          className={roboto.className}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 0.5 },
            delay: 0.4,
          }}
        >
          <motion.h1
            className="text-white text-xl lg:text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, grey, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 0, // No repeat
              ease: "easeInOut",
            }}
          >
            I
          </motion.h1>{" "}
        </motion.div>

        <motion.div
          className={roboto.className}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
            delay: 0.5,
          }}
        >
          <motion.h1
            className="text-white text-xl lg:text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, grey, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 0, // No repeat
              ease: "easeInOut",
            }}
          >
            Am
          </motion.h1>{" "}
        </motion.div>

        <motion.div
          className={roboto.className}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
            delay: 0.6,
          }}
        >
          <motion.h1
            className="text-white text-xl lg:text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, grey, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 0, // No repeat
              ease: "easeInOut",
            }}
          >
            Lohith
          </motion.h1>{" "}
        </motion.div>

        <motion.div
          className={roboto.className}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
            delay: 0.7,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.h1
            className="text-white text-xl lg:text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #fff, grey, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              backgroundSize: "200% auto",
            }}
            animate={{
              backgroundPosition: ["0%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: 0, // No repeat
              ease: "easeInOut",
            }}
          >
            Here
          </motion.h1>{" "}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
            delay: 0.8,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <WaterDroplet />
        </motion.div>
      </div>
      <motion.div
        className="mt-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 0.7 },
          delay: 0.9,
        }}
      >

      </motion.div>
    </main>
  );
}
