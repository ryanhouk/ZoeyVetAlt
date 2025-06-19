import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
  title: string;
  iconColor?: string;
  showBtn?: boolean;
  btnTitle?: string;
};

const SmallHeading = ({
  icon,
  title,
  iconColor = "text-yellow-500",
  showBtn = false,
  btnTitle = "Edit",
}: Props) => {
  return (
    <>
      <div className="group mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className={iconColor} />
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        {showBtn && (
          <div className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 hover:cursor-pointer hover:bg-neutral-200">
            {btnTitle}
          </div>
        )}
      </div>
    </>
  );
};

export default SmallHeading;
