import { useEffect, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface AutoRecaptchaProps {
  onVerify?: (token: string) => void;
  action?: string;
}

const AutoRecaptcha: React.FC<AutoRecaptchaProps> = ({ 
  onVerify, 
  action = "page_view" 
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.warn("Execute recaptcha not yet available");
      return;
    }

    try {
      const token = await executeRecaptcha(action);
      
      // Store token in sessionStorage
      sessionStorage.setItem("recaptcha_token", token);
      
      // Call callback if provided
      if (onVerify) {
        onVerify(token);
      }

      // Optional: Send token to your backend for verification
      // await verifyRecaptchaToken(token);
      
    } catch (error) {
      console.error("ReCaptcha verification error:", error);
    }
  }, [executeRecaptcha, action, onVerify]);

  useEffect(() => {
    handleReCaptchaVerify();

    // Refresh token every 2 minutes (ReCaptcha tokens expire after 2 minutes)
    const interval = setInterval(() => {
      handleReCaptchaVerify();
    }, 110000); // 1 minute 50 seconds

    return () => clearInterval(interval);
  }, [handleReCaptchaVerify]);

  // This component doesn't render anything
  return null;
};

export default AutoRecaptcha;