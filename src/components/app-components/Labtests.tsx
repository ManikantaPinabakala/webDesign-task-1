import React from "react";

interface Lab {
  id: string;
  title: string;
  props: {
    iconUrl: string;
    iconText: string;
  }[];
}

interface LabList {
  labTests: Lab[];
}

const Labtests: React.FC<LabList> = ({ labTests }) => {
  const labData = labTests?.[0].props;

  return (
    <div className="flex w-[80%] justify-center items-center self-center flex-wrap gap-6 mt-4">
      {labData?.map((eachLabTest, index) => (
        <div
          key={index}
          className="w-[25%] flex flex-col justify-center items-center"
        >
          <img src={eachLabTest.iconUrl} className="scale-75" />
          <p className="text-xs text-center text-wrap">
            {eachLabTest.iconText}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Labtests;
