import React, { useEffect,useState} from "react";
import ShoppingCartComponent from "@/components/shoppingCartComponent";
function ShoppingCartPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  useEffect(() => {
    if (showRegisterModal) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.paddingRight = "17px";
    }
  }, []);

  return (
    <ShoppingCartComponent
      showRegisterModal={showRegisterModal}
      setShowRegisterModal={setShowRegisterModal}
    />
  );
}

export default ShoppingCartPage;
