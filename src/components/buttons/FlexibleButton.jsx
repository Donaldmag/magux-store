import { Button } from "../ui/reui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "../../lib/utils";

const FlexibleButton = (props) => {
  const { mode, btnText, underlined } = props;
  return (
    <Button
      variant="primary"
      mode={mode}
      underlined={underlined}
      className={cn(
        "h-12 w-12 rounded-lg",
        mode === "icon" ? "" : "mx-auto w-full md:max-w-96 font-medium"
      )}
    >
      {btnText}
      {mode === "icon" ? <ShoppingBag className="w-5! h-5!" /> : <></>}
    </Button>
  );
};

export default FlexibleButton;
