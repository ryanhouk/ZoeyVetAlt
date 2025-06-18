import Container from "@/components/layout/Container";
import React from "react";
import Heading from "@/components/headings/Heading";
import Divider from "@/components/layout/Divider";
import SingleDataItem from "@/components/cards/SingleDataPoint";
import Spacer from "@/components/layout/Spacer";
import {
  faDog,
  faFile,
  faPaw,
  faPencil,
  faUser,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButtonBorder from "@/components/buttons/LinkButtonBorder";

const PatientDetails = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Container className="col-span-1">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <FontAwesomeIcon
                icon={faDog}
                className="text-2xl text-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <Heading level={1}>Milo</Heading>
              <p className="text-sm font-medium text-neutral-500">
                AEC patient for 3 years
              </p>
            </div>
          </div>
          <Spacer small />
          <Divider />
          <div>
            <div className="mb-3 flex items-center gap-2">
              <FontAwesomeIcon icon={faPaw} className="text-yellow-500" />
              <h2 className="text-lg font-bold">Patient Information</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <SingleDataItem heading="Species" title="Canine" />
              <SingleDataItem heading="Breed" title="Beagle" />
              <SingleDataItem heading="Gender" title="Male" />
              <SingleDataItem heading="Age" title="3 yrs" />
              <SingleDataItem heading="Birth Date" title="November 29, 2021" />
              <SingleDataItem heading="Weight" title="11.4 kg" />
              <SingleDataItem heading="Microchip ID" title="985121056784328" />
            </div>
            <hr className="my-3" />
            <div>
              <div className="mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-green-500" />
                <h2 className="text-lg font-bold">Client Information</h2>
              </div>
              <SingleDataItem heading="Owner" title="John Smith" />
              <SingleDataItem heading="Email" title="john.smith@example.com" />
              <SingleDataItem heading="Phone" title="555-111-2222" />
              <SingleDataItem
                heading="Address"
                title="123 Main St, Anytown, CA 91234"
              />
            </div>
            <hr className="my-3" />
            <div>
              <div className="mb-3 flex items-center gap-2">
                <FontAwesomeIcon icon={faFile} className="text-purple-500" />
                <h2 className="text-lg font-bold">Notes</h2>
              </div>
              <p className="">
                Vaccinations up to date. Tends to be very vocal during visits.
              </p>
              <div className="mt-3">
                <LinkButtonBorder
                  title="Edit Note"
                  url="/"
                  iconRight={faPencil}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PatientDetails;
