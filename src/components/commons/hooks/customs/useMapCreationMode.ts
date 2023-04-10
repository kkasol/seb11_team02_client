import { useEffect, useState } from "react";
declare const window: typeof globalThis & {
  kakao?: any;
};

export const useMapCreationMode = (): {
  isOpen: boolean;
  mapCreation: () => void;
} => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const mapCreation = (): void => {
    useEffect(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=%REACT_APP_API_KEY%&libraries=services&libraries=clusterer";

      document.head.appendChild(script);
      script.onload = () => {
        window.kakao.maps.load(function () {
          setIsOpen(true);
        });
      };
    }, []);
  };

  return { mapCreation, isOpen };
};
