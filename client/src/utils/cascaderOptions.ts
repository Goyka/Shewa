interface genderOption {
  value: string;
  label: string;
}

interface regionOption {
  value: string;
  label: string;
  children: { value: string; label: string; children: never[] }[];
}

// interface ageOption {
//   value: string;
//   label: string;
// }

export const genderOptions: genderOption[] = [
  {
    value: "male",
    label: "남성",
  },
  {
    value: "female",
    label: "여성",
  },
  {
    value: "nonBinary",
    label: "비공개",
  },
];

export function createYearOptions(startYear: number, endYear: number) {
  const yearOptions = [];

  for (let year = startYear; year <= endYear; year++) {
    yearOptions.push({
      value: year.toString(),
      label: `${year}년`,
    });
  }

  return yearOptions.reverse();
}

export const regionOptions: regionOption[] = [
  {
    value: "Seoul",
    label: "서울",
    children: [
      {
        value: "Gangnam-gu",
        label: "강남구",
        children: [],
      },
      {
        value: "Gangdong-gu",
        label: "강동구",
        children: [],
      },
      {
        value: "Gangbuk-gu",
        label: "강북구",
        children: [],
      },
      {
        value: "Gangseo-gu",
        label: "강서구",
        children: [],
      },
      {
        value: "Gwanak-gu",
        label: "관악구",
        children: [],
      },
      {
        value: "Gwangjin-gu",
        label: "광진구",
        children: [],
      },
      {
        value: "Guro-gu",
        label: "구로구",
        children: [],
      },
      {
        value: "Geumcheon-gu",
        label: "금천구",
        children: [],
      },
      {
        value: "Nowon-gu",
        label: "노원구",
        children: [],
      },
      {
        value: "Dobong-gu",
        label: "도봉구",
        children: [],
      },
      {
        value: "Dongdaemoon-gu",
        label: "동대문구",
        children: [],
      },
      {
        value: "Dongjak-gu",
        label: "동작구",
        children: [],
      },
      {
        value: "Mapo-gu",
        label: "마포구",
        children: [],
      },
      {
        value: "Seodaemoon-gu",
        label: "서대문구",
        children: [],
      },
      {
        value: "Seocho-gu",
        label: "서초구",
        children: [],
      },
      {
        value: "Seongdong-gu",
        label: "성동구",
        children: [],
      },
      {
        value: "Seongbuk-gu",
        label: "성북구",
        children: [],
      },
      {
        value: "Songpa-gu",
        label: "송파구",
        children: [],
      },
      {
        value: "Yangcheon-gu",
        label: "양천구",
        children: [],
      },
      {
        value: "Yeongdeungpo-gu",
        label: "영등포구",
        children: [],
      },
      {
        value: "Yongsan-gu",
        label: "용산구",
        children: [],
      },
      {
        value: "Eunpyeong-gu",
        label: "은평구",
        children: [],
      },
      {
        value: "Jongno-gu",
        label: "종로구",
        children: [],
      },
      {
        value: "Jung-gu",
        label: "중구",
        children: [],
      },
      {
        value: "Joongrang-gu",
        label: "중랑구",
        children: [],
      },
    ],
  },
];
