import { useEffect, useState } from "react";

type Location = {
  country: string | null;
  city: string | null;
  ip: string | null;
  loading: boolean;
  error: string | null;
};

export function useUserLocation() {
  const [location, setLocation] = useState<Location>({
    country: null,
    city: null,
    ip: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("Failed to fetch location");
        const data = await res.json();

        setLocation({
          country: data.country || null,
          city: data.city || null,
          ip: data.ip || null,
          loading: false,
          error: null,
        });
      } catch (err: any) {
        setLocation((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    };

    fetchLocation();
  }, []);

  return location;
}
