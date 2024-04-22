interface genderOption {
  value: string;
  label: string;
}

interface preferOption {
  value: string;
  label: string;
}

// interface ageOption {
//   value: string;
//   label: string;
// }

export const genderOptions: genderOption[] = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "nonBinary",
    label: "Non-binary",
  },
];

export function createYearOptions(startYear: number, endYear: number) {
  const yearOptions = [];

  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({
      value: year.toString(),
      label: `${year}`,
    });
  }

  return yearOptions.reverse();
}

export const preferOptions: preferOption[] = [
  {
    value: "road",
    label: "Road",
  },
  {
    value: "track",
    label: "Track",
  },
  {
    value: "trail",
    label: "Trail",
  },
];
