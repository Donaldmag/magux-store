import {
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelForm,
  FloatingPanelRoot,
  FloatingPanelTrigger,
} from "../ui/cultui/FloatingPanelUI";

const FloatingPanel = (props) => {
  const { data, option_name } = props;
  const sizesValues = ["S", "M", "L"];
  const colorsValues = ["#000000", "#000fff", "#ffffff", "fff000"];

  const handleSubmit = (note) => {
    console.log("Submitted note:", note);
  };
  //   receives as props the classes of the main card component for responsiveness

  const handleClose = () => {
    console.log("Panel closed");
  }
 const isSizes = option_name === "sizes";
 const values = isSizes ? sizesValues : colorsValues;
  return (
    <div>
      <FloatingPanelRoot>
        <FloatingPanelTrigger className="md:max-w-28 md:w-28 max-sm:w-44 h-10 rounded-full!">
          <div className="flex items-center justify-start sm:gap-1.5 gap-2">
            <div className="xs:text-sm text-xs font-semibold capitalize">
              {option_name}
            </div>

            <div className="flex items-center justify-start gap-1">
              {isSizes
                ? values.map((item) => (
                    <span
                      key={item}
                      className="-px-0.5 py-1 text-[0.85rem] max-sm:text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))
                : values.map((item) => (
                    <span
                      key={item}
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item }}
                    />
                  ))}
            </div>
          </div>
        </FloatingPanelTrigger>
        <FloatingPanelContent>
          <FloatingPanelForm
            onSubmit={handleSubmit}
            closeFloatingPanel={handleClose}
            className="p-2 max-w-[100px]  relative"
          >
            <fieldset className="flex flex-wrap gap-3">
              <legend className="sr-only">Color</legend>
              {data.map((item) => (
                <label
                  key={item.id}
                  htmlFor={`${option_name}-${item.id}`}
                  className={`block size-8 rounded-full shadow-sm has-checked:ring-2 has-checked:ring-black has-checked:ring-offset-2 cursor-pointer ${
                    isSizes
                      ? "flex items-center justify-center border-2 border-zinc-300"
                      : ""
                  }`}
                  style={!isSizes ? { backgroundColor: item.value } : {}}
                >
                  <input
                    type="radio"
                    name={`${option_name}Option`}
                    value={item.value}
                    id={`${option_name}-${item.id}`}
                    className="sr-only"
                    onChange={(e) => {
                      console.log("Selected color:", e.target.value);
                      handleClose;
                    }}
                  />
                  {isSizes && (
                    <span className="font-semibold">{item.value}</span>
                  )}
                </label>
              ))}
            </fieldset>
            {/* <FloatingPanelCloseButton className="mt-2 right-2 bottom-2 absolute" /> */}
          </FloatingPanelForm>
        </FloatingPanelContent>
      </FloatingPanelRoot>
    </div>
  );
};

export default FloatingPanel;
