import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
  title: string;
  iconColor?: string;
  showEdit?: boolean;
};

const SmallHeading = ({
  icon,
  title,
  iconColor = "text-yellow-500",
  showEdit = false,
}: Props) => {
  return (
    <>
      <div className="group mb-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className={iconColor} />
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        {showEdit && (
          <div className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 hover:cursor-pointer hover:bg-neutral-100">
            Edit
            <FontAwesomeIcon icon={faPencil} className="text-neutral-500" />
          </div>
        )}
      </div>
    </>
  );
};

export default SmallHeading;
