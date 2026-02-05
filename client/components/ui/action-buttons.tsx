import { Button } from "@/components/ui/button";

type ActionButtonsProps = {
  disabled?: boolean;
};
const ActionButtons = ({ disabled = false }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        disabled={disabled}
        className="bg-red-500 hover:bg-red-600 rounded-full size-3"
        size={"icon-xs"}
      />
      <Button
        disabled={disabled}
        className="bg-yellow-500 hover:bg-yellow-600 rounded-full size-3"
        size={"icon-xs"}
      />
      <Button
        disabled={disabled}
        className="bg-green-500 hover:bg-green-600 rounded-full size-3"
        size={"icon-xs"}
      />
    </div>
  );
};

export default ActionButtons;
