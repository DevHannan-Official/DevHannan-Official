"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/components/shared/button";

export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="secondary"
      onClick={() =>
        setTheme(
          theme === "dark" ? "system" : theme === "system" ? "light" : "dark"
        )
      }
    >
      {theme === "dark" ? (
        <Monitor size={16} />
      ) : theme === "system" ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </Button>
  );
};
