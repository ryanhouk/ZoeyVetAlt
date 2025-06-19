import Container from "@/components/layout/Container";
import React from "react";
import Heading from "@/components/headings/Heading";
import Divider from "@/components/layout/Divider";
import SingleDataItem from "@/components/cards/SingleDataPoint";
import Spacer from "@/components/layout/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faDog,
  faFile,
  faList,
  faPaw,
  faUser,
} from "@fortawesome/pro-duotone-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import LinkButtonBorder from "@/components/buttons/LinkButtonBorder";
import ContextNav from "@/components/nav/ContextNav";
import SmallHeading from "@/components/headings/SmallHeading";
import MedHistoryCard from "@/components/cards/MedHistoryCard";
import ContentHeader from "@/components/headings/ContentHeader";

const PatientDetails = () => {
  return (
    <>
      <Container>
        <ContextNav />
      </Container>
      <Container transparent className="grid grid-cols-8 gap-4">
        {/* Patient Details */}
        <Container className="col-span-2 w-full">
          <LinkButtonBorder
            title="All Patients"
            iconLeft={faList}
            url="/patients"
          />
          <Spacer small />
          <Divider />
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
            <SmallHeading
              icon={faPaw}
              title="Patient Information"
              showBtn
              iconColor="text-yellow-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <SingleDataItem heading="Species" title="Canine" />
              <SingleDataItem heading="Breed" title="Beagle" />
              <SingleDataItem heading="Gender" title="Male" />
              <SingleDataItem heading="Age" title="3 yrs" />
              <SingleDataItem heading="Birth Date" title="November 29, 2021" />
              <SingleDataItem heading="Weight" title="11.4 kg" />
              <SingleDataItem heading="Microchip ID" title="985121056784328" />
            </div>
            <Spacer small />
            <Divider />
            <div>
              <SmallHeading
                icon={faUser}
                title="Client Information"
                showBtn
                iconColor="text-green-500"
              />
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
              <p className="rounded-lg border bg-neutral-100 p-4">
                Vaccinations up to date. Tends to be very vocal during visits.
              </p>
              <div className="mt-3">
                <LinkButtonBorder title="Save" url="/" />
              </div>
            </div>
          </div>
        </Container>

        {/* Right Side */}
        <Container className="col-span-4 w-full">
          <ContentHeader title="Main Heading" />
        </Container>
        <div className="col-span-2">
          <Container className="w-full">
            <SmallHeading
              icon={faClockRotateLeft}
              title="Medical History"
              iconColor="text-purple-500"
              btnTitle="See All"
              showBtn
            />
            <div className="space-y-3">
              <MedHistoryCard
                date={new Date("2025-09-20")}
                visitType="Final Follow Up"
                provider="Dr. Edwards"
              />
              <MedHistoryCard
                date={new Date("2025-07-16")}
                visitType="Follow Up Visit"
                provider="Dr. Gronkiewicz"
              />
              <MedHistoryCard
                date={new Date("2025-06-19")}
                visitType="Enucleation Procedure"
                provider="Dr. Gronkiewicz"
              />
            </div>
          </Container>
          <Container className="w-full">
            <SmallHeading
              icon={faComments}
              title="Client Chat"
              iconColor="text-blue-500"
            />
            <div className="text-teal-700">
              We can create the ability to chat with the client here just like a
              standard SMS chat. This would be a third party integration,
              invisible to AEC, but noted for development purposes.
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PatientDetails;
